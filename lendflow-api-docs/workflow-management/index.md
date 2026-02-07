# Workflow Management API Endpoints

This section contains all endpoints for managing applications, placements, notes, and workflow operations.

## Base URL
```
https://api.lendflow.com/api/v2
```

## Authentication
All requests require Bearer token authentication:
```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Application Management

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Lendflow Representative Contact Info | GET | `/applications/{application_id}/representen` | Get representative contact information for an application |
| Update Status and Sub-Status | PUT | `/applications/{application_id}/status` | Update the application status and sub-status |
| Decline Application | PUT | `/applications/{application_id}/decline` | Decline an application |
| Revive Application | PUT | `/applications/{application_id}/revive` | Revive a declined application |
| Get Enrichment Summary | GET | `/applications/{application_id}/enrichment-summary` | Get enrichment summary data |
| Add Application Metadata | POST | `/applications/{application_id}/metadata` | Add custom metadata to an application |

### Placements Management

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Get All Placements for an Application | GET | `/applications/{application_id}/placements` | Retrieve all placements for an application |
| Submit a Lender Placement | POST | `/applications/{application_id}/placements` | Submit an application to a lender |
| Get a Placement for an Application | GET | `/applications/{application_id}/placements/{placement_id}` | Get details of a specific placement |
| Update Lender Placement Status | PUT | `/applications/{application_id}/placements/{placement_id}/status` | Update placement status |

### Data and Enrichment

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Fetch All Plaid Data | GET | `/applications/{application_id}/plaid/data` | Fetch all Plaid bank data for application |

### User and Assignment Management

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Update Application's Assigned Users | PUT | `/applications/{application_id}/assigned-users` | Update underwriter, analyst, and other assigned users |
| Get All Users | GET | `/users` | Retrieve all users in the system |

### Notes Management

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Get All Application Notes | GET | `/applications/{application_id}/notes` | Retrieve all notes for an application |
| Add Application Note | POST | `/applications/{application_id}/notes` | Add a new note to an application |
| Show Application Note | GET | `/applications/{application_id}/notes/{note_id}` | Get a specific note |
| Get All Application Business Notes | GET | `/applications/{application_id}/business-notes` | Retrieve all business notes |
| Add Application Business Note | POST | `/applications/{application_id}/business-notes` | Add a business note |
| Show Application Business Note | GET | `/applications/{application_id}/business-notes/{note_id}` | Get a specific business note |

### Requirements and Criteria

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| List Complete Application Criteria and Missing Requirements | GET | `/applications/{application_id}/requirements` | List application criteria and missing items |

### Application Operations

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Duplicate an Application | POST | `/applications/{application_id}/duplicate` | Create a duplicate of an application |
| Save Consent as Signed Document | POST | `/applications/{application_id}/consent-document` | Save consent as a signed document |

### Workflow Builder

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Retrieve Applications using Workflow Builder | GET | `/workflow/applications` | Retrieve applications via workflow builder |
| Submit New Application Using Workflow Template | POST | `/workflow/applications` | Create new application from workflow template |
| Retrieve an Application Using Workflow Builder | GET | `/workflow/applications/{application_id}` | Get application via workflow builder |
| Update an Application Using Workflow Builder | PUT | `/workflow/applications/{application_id}` | Update application via workflow builder |
| Sample Payload - Workflow | GET | `/workflow/sample-payload` | Get sample payload for workflow |
| Show Workflow Stages | GET | `/workflow/stages` | Retrieve available workflow stages |
| Available Workflow Builder Templates | GET | `/workflow/templates` | Get available workflow templates |
| Sample Payload - Workflow Template | GET | `/workflow/template-sample-payload` | Get sample payload for workflow template |

### Offers Management

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Toggle Visibility for Offer | PUT | `/applications/{application_id}/offers/{offer_id}/visibility` | Toggle offer visibility in borrower platform |
| Get Single Offer Checkout Snapshot Details | GET | `/applications/{application_id}/offers/{offer_id}/checkout-snapshot` | Get offer checkout details |
| Update Offer Checkout Snapshot | PUT | `/applications/{application_id}/offers/{offer_id}/checkout-snapshot` | Update checkout snapshot |

### Communication and Integration

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Get Integration Snippet/Application Link | GET | `/applications/{application_id}/integration-link` | Get application link or embed snippet |
| Create New Email for Single or Multiple Deals | POST | `/emails` | Create new email for applications |
| Get All Consent Templates | GET | `/consent-templates` | Retrieve all consent templates |
| Show Consent Template | GET | `/consent-templates/{template_id}` | Get specific consent template |

## Common Parameters

### Path Parameters
- `application_id`: Unique identifier for the application (string, required)
- `placement_id`: Unique identifier for the placement (string, optional)
- `note_id`: Unique identifier for the note (string, optional)
- `offer_id`: Unique identifier for the offer (string, optional)
- `template_id`: Unique identifier for the template (string, optional)

### Authentication
All endpoints require Bearer token in the header:
```
Authorization: Bearer [YOUR_TOKEN]
```

## Response Format
All responses follow this format:
```json
{
  "data": {
    // Response data
  },
  "status": 200
}
```

## Error Handling
Standard HTTP status codes are used:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting
Check response headers for rate limit information.

---

For detailed endpoint documentation, see individual endpoint files in this directory.
