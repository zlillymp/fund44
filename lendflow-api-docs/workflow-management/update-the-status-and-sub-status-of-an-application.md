# Update the Status and Sub-Status of an Application

## Endpoint Details

**Description:** Update the status and sub-status of an application in the workflow.

**HTTP Method:** PUT

**URL Path:** `/api/v2/applications/{application_id}/status`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `application_id` | string | Yes | The ID of the application |

### Request Body (JSON)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | Yes | The new status (pending, approved, declined, funded, etc.) |
| `sub_status` | string | No | The sub-status for more detailed state |
| `reason` | string | No | Reason for status change |
| `notes` | string | No | Additional notes |

### Authentication

```
Authorization: Bearer [YOUR_TOKEN]
Content-Type: application/json
```

### Example Request

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/applications/app_12345/status \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "status": "approved",
    "sub_status": "ready_for_funding",
    "reason": "All requirements met",
    "notes": "Application approved by underwriter"
  }'
```

### JavaScript Example

```javascript
const updateApplicationStatus = async (applicationId, statusData) => {
  const response = await fetch(
    `https://api.lendflow.com/api/v2/applications/${applicationId}/status`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${YOUR_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(statusData)
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// Usage
updateApplicationStatus('app_12345', {
  status: 'approved',
  sub_status: 'ready_for_funding',
  reason: 'All requirements met'
}).then(data => {
  console.log('Status updated:', data.data);
}).catch(error => {
  console.error('Error updating status:', error);
});
```

## Valid Status Values

### Primary Statuses

| Status | Description |
|--------|-------------|
| `pending` | Application received, awaiting review |
| `in_review` | Application under active review |
| `approved` | Application approved by underwriter |
| `declined` | Application declined |
| `funded` | Application funded |
| `withdrawn` | Application withdrawn by applicant |
| `incomplete` | Application missing required information |

### Sub-Statuses

| Sub-Status | Description |
|------------|-------------|
| `initial_review` | Initial assessment pending |
| `awaiting_documents` | Waiting for required documents |
| `ready_for_underwriting` | Ready for underwriter review |
| `under_underwriting` | Currently being underwritten |
| `ready_for_funding` | Approved and ready to fund |
| `funding_in_progress` | Funds being transferred |
| `document_requested` | Additional documents requested |
| `condition_pending` | Conditional approval pending conditions |

## Response

### Response Schema (200 - Success)

```json
{
  "data": {
    "id": "app_12345",
    "status": "approved",
    "sub_status": "ready_for_funding",
    "status_updated_at": "2024-01-15T10:30:00Z",
    "reason": "All requirements met",
    "notes": "Application approved by underwriter",
    "previous_status": "in_review",
    "previous_sub_status": "under_underwriting",
    "updated_by": "user_789",
    "updated_by_name": "John Smith"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Application ID |
| `status` | string | New status |
| `sub_status` | string | New sub-status |
| `status_updated_at` | string | Timestamp of update (ISO 8601) |
| `reason` | string | Reason provided for change |
| `notes` | string | Additional notes |
| `previous_status` | string | Previous status |
| `previous_sub_status` | string | Previous sub-status |
| `updated_by` | string | User ID who made the change |
| `updated_by_name` | string | Name of user who made the change |

## Error Responses

### 400 - Invalid Status

```json
{
  "error": {
    "code": "INVALID_STATUS",
    "message": "Invalid status value",
    "details": [
      {
        "field": "status",
        "message": "Status must be one of: pending, in_review, approved, declined, funded, withdrawn"
      }
    ]
  }
}
```

### 400 - Invalid Status Transition

```json
{
  "error": {
    "code": "INVALID_STATUS_TRANSITION",
    "message": "Cannot transition from funded to pending",
    "allowed_transitions": ["declined", "withdrawn"]
  }
}
```

### 404 - Application Not Found

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Application not found"
  }
}
```

### 401 - Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing authentication token"
  }
}
```

## Status Transition Rules

```
pending -> in_review, declined, withdrawn
in_review -> approved, declined, incomplete, withdrawn
approved -> funded, declined, in_review, withdrawn
funded -> declined, withdrawn
declined -> (terminal state)
withdrawn -> (terminal state)
incomplete -> in_review, pending, withdrawn
```

## Use Cases

### Approve an Application
```javascript
await updateApplicationStatus('app_123', {
  status: 'approved',
  sub_status: 'ready_for_funding',
  reason: 'Underwriting approval',
  notes: 'All conditions met'
});
```

### Request More Information
```javascript
await updateApplicationStatus('app_123', {
  status: 'incomplete',
  sub_status: 'document_requested',
  reason: 'Missing tax returns',
  notes: 'Please provide 2023 business tax returns'
});
```

### Fund Application
```javascript
await updateApplicationStatus('app_123', {
  status: 'funded',
  sub_status: 'funding_in_progress',
  reason: 'Lender approved',
  notes: 'Funds being transferred to business account'
});
```

## Response Headers

```
HTTP/1.1 200 OK
Content-Type: application/json
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
X-RateLimit-Reset: 1640995200
```

## Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Status updated successfully |
| 400 | Bad Request | Invalid status or data |
| 401 | Unauthorized | Missing or invalid authentication |
| 404 | Not Found | Application not found |
| 422 | Unprocessable Entity | Invalid status transition |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

## Rate Limit

- **Limit:** 1000 requests per hour
- **Window:** 1 hour
- **Status:** Check X-RateLimit-* headers

## Audit Trail

Every status change is logged for audit purposes:
- Who made the change (user ID and name)
- When the change was made
- What changed (from/to status)
- Reason provided

View audit trail through the dashboard or API.

## Related Endpoints

- [Get Application Status History](/api-reference/workflow-management/get-application-status-history)
- [Decline Application](/api-reference/workflow-management/decline-application)
- [Revive Application](/api-reference/workflow-management/revive-application)
- [Add Application Note](/api-reference/workflow-management/add-application-note)

## Permissions

- Owner can update status
- Assigned underwriter/analyst can update status
- Admin can update status
- Other users cannot change status

## Events

Updating status triggers webhooks:
- `application.status_changed`
- `application.updated`

## Best Practices

1. **Always provide reason** - Include reason for status changes for record keeping
2. **Use appropriate sub-status** - Select sub-status that accurately reflects the state
3. **Add notes** - Include notes for context on what triggered the change
4. **Check valid transitions** - Ensure the transition is allowed
5. **Log changes** - Keep records of who made changes and when
6. **Notify stakeholders** - Update relevant parties when status changes
7. **Verify before changing** - Double-check before marking as funded

## Error Handling Example

```javascript
try {
  const result = await updateApplicationStatus('app_123', {
    status: 'approved',
    sub_status: 'ready_for_funding'
  });
  console.log('Status updated:', result.data);
} catch (error) {
  if (error.response?.status === 422) {
    console.error('Invalid status transition:', error.response.data.error);
  } else if (error.response?.status === 404) {
    console.error('Application not found');
  } else {
    console.error('Error:', error.message);
  }
}
```

---

Last updated: 2024-01-15
