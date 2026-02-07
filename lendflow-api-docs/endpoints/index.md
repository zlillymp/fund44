# Endpoints Reference

This section provides a central reference for all Lendflow API endpoints organized by category.

## Complete API Endpoint Reference

All Lendflow API endpoints are organized into the following main categories:

### Core Sections

1. **Workflow Management** (`/api-reference/workflow-management/`)
   - Application lifecycle management
   - Placement handling
   - Notes and metadata
   - User assignments
   - Workflow builder operations
   - Offer management

2. **Legacy APIs** (`/api-reference/legacy/`)
   - Backward-compatible endpoints
   - Legacy application submission flows
   - Traditional data operations

3. **Data Providers** (`/api-reference/data-providers/`)
   - External data provider integrations
   - Service availability checks

4. **Authentication** (`/api-reference/authentication/`)
   - Bearer token generation
   - User authentication
   - Session management

5. **Offers** (`/api-reference/offers/`)
   - Offer creation and management
   - Offer confirmation
   - Offer updates and decline

6. **Pre-Qualification** (`/api-reference/pre-qualification/`)
   - Pre-qualification logic
   - Business eligibility checks

7. **Documents** (`/api-reference/documents/`)
   - Document management
   - Document uploads

8. **Stipulations** (`/api-reference/stips/`)
   - Stipulation management
   - Requirement tracking

9. **Data Orchestration** (`/api-reference/data-orchestration/`)
   - Data flow management
   - Data transformation

10. **Scorecards** (`/api-reference/scorecards/`)
    - Scoring operations
    - Application scoring

11. **Offer Templates** (`/api-reference/offer-templates/`)
    - Template management
    - Template configuration

12. **Attribute Builder** (`/api-reference/attribute-builder/`)
    - Custom attribute creation
    - Attribute management

13. **Lender Network** (`/api-reference/lender-network/`)
    - Lender integration
    - Network operations

14. **Entity Profiles** (`/api-reference/entity-profiles/`)
    - Business entity profiles
    - Profile management

15. **Application Widget** (`/api-reference/application-widget/`)
    - Embeddable application forms
    - Widget configuration

## Base URL

```
https://api.lendflow.com/api/v2
```

## Authentication

All endpoints require Bearer token authentication:

```
Authorization: Bearer [YOUR_TOKEN]
```

Register for an API key on the [Lendflow client portal](https://app.lendflow.com/login).

## Common Request Headers

```
Authorization: Bearer <token>
Content-Type: application/json
```

## Common Response Format

All API responses follow this standard structure:

```json
{
  "data": {
    // Response data here
  },
  "status": 200,
  "message": "Success"
}
```

## HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created successfully |
| 204 | No Content | Success with no response body |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Permission denied |
| 404 | Not Found | Resource not found |
| 422 | Unprocessable Entity | Request validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 502 | Bad Gateway | Service unavailable |
| 503 | Service Unavailable | Temporary unavailability |

## Rate Limiting

API requests are rate limited. Check the following headers in responses:

- `X-RateLimit-Limit`: Maximum requests per time window
- `X-RateLimit-Remaining`: Remaining requests in current window
- `X-RateLimit-Reset`: Unix timestamp when limit resets

## Error Handling

Errors include detailed messages to help with debugging:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Field validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

## API Versioning

The current API version is `v2`. All endpoints use this path structure:
```
https://api.lendflow.com/api/v2/<endpoint>
```

## CORS

CORS is supported for cross-origin requests. The API accepts requests from browser-based applications.

## Pagination

List endpoints support pagination with query parameters:
- `page`: Page number (default: 1)
- `per_page`: Items per page (default: 50, max: 100)

Example:
```
GET /api/v2/applications?page=2&per_page=25
```

## Filtering

List endpoints support filtering with query parameters:
- `search`: Search term
- `status`: Filter by status
- `created_after`: Filter by creation date
- `created_before`: Filter by creation date

Example:
```
GET /api/v2/applications?status=pending&created_after=2024-01-01
```

## Sorting

List endpoints support sorting with the `sort` parameter:
- Use `-` prefix for descending order
- Default sorting varies by endpoint

Example:
```
GET /api/v2/applications?sort=-created_at
```

## Webhooks

The API supports webhooks for real-time event notifications. Configure webhooks in your dashboard.

## SDK and Client Libraries

Lendflow provides official SDKs:
- JavaScript/Node.js
- Python
- Ruby
- PHP

See [API Documentation](https://docs.lendflow.com) for details.

---

For detailed documentation on specific endpoints, refer to the appropriate section's documentation.
