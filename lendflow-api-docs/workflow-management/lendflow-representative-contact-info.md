# Lendflow Representative Contact Info

## Endpoint Details

**Description:** Get representative contact information for an application.

**HTTP Method:** GET

**URL Path:** `/api/v2/applications/{application_id}/representen`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `application_id` | string | Yes | The ID of the application |

### Authentication

```
Authorization: Bearer [YOUR_TOKEN]
Content-Type: application/json
```

### Example Request

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/representen \
  --header 'Authorization: Bearer <token>'
```

## Response

### Response Schema (200 - Success)

```json
{
  "data": {
    "type": "onboarding",
    "first_name": "John",
    "last_name": "Doe",
    "email_address": "john@example.com",
    "telephone": "+12345678901"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Type of representative (onboarding, support, etc.) |
| `first_name` | string | First name of the representative |
| `last_name` | string | Last name of the representative |
| `email_address` | string | Email address for contact |
| `telephone` | string | Phone number in E.164 format |

### Error Response (400 - Bad Request)

```json
{
  "error": {
    "code": "INVALID_APPLICATION_ID",
    "message": "Application ID is invalid or not found"
  }
}
```

## Use Cases

1. **Get assigned representative** - Retrieve the Lendflow representative assigned to an application
2. **Customer support** - Use contact information to reach the appropriate representative
3. **Application routing** - Identify which representative is handling the application

## Response Headers

```
HTTP/1.1 200 OK
Content-Type: application/json
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 400 | Bad Request | Invalid application ID |
| 401 | Unauthorized | Missing or invalid authentication |
| 404 | Not Found | Application not found |
| 500 | Internal Server Error | Server error |

## Rate Limit

- **Limit:** 1000 requests per hour
- **Window:** 1 hour
- **Status:** Check X-RateLimit-* headers

## Related Endpoints

- [Get All Application Notes](/api-reference/workflow-management/get-all-application-notes)
- [Get Application Attributes](/api-reference/attribute-builder/get-application-attributes)

## Notes

- The representative type indicates the role of the contact
- Phone numbers are returned in E.164 international format
- Email addresses should be used for written communication
- Phone numbers should be used for urgent matters

## Error Handling

```javascript
fetch('https://api.lendflow.com/api/v2/applications/app_123/representen', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer <token>',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log('Representative:', data.data);
})
.catch(error => {
  console.error('Error:', error);
});
```

---

Last updated: 2024-01-15
