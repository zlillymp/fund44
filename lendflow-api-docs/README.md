# Lendflow API Documentation

This directory contains comprehensive documentation for the Lendflow API, organized by feature area and endpoint functionality.

## Documentation Structure

The documentation is organized into the following main sections:

### Core API Sections (Extracted)

- **[Attribute Builder](./attribute-builder/)** - Manage and work with custom attributes
  - Get Application Attributes
  - Get All Attributes
  - Create Attribute
  - Update Attribute
  - Evaluate an Expression
  - Set an Attribute Value

- **[Lender Network](./lender-network/)** - Access and manage lender information
  - Get Available Lenders

- **[Entity Profiles](./entity-profiles/)** - Manage entity profile data
  - Get Entity Profiles
  - Get Entity Profile Details

- **[Application Widget](./application-widget/)** - Embed application widgets
  - Get Widget Configuration
  - Create Widget Instance
  - Update Widget Configuration

### Additional Sections

- **[Offers](./offers/)** - Manage loan offers and applications
- **[Authentication](./authentication/)** - API authentication and tokens
- **[Stips](./stips/)** - Manage stipulations (requirements)
- **[Documents](./documents/)** - Handle document uploads and retrieval
- **[Pre-Qualification](./pre-qualification/)** - Pre-qualification workflows
- **[Workflow Management](./workflow-management/)** - Workflow operations

## Getting Started

### 1. Authentication

All API endpoints require Bearer token authentication. See the [Authentication guide](./authentication/) for details on obtaining and using API keys.

### 2. Base URL

All API endpoints use the following base URL:

```
https://api.lendflow.com/api/v2
```

### 3. Making Requests

Include your Bearer token in the Authorization header:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/attributes \
  --header 'Authorization: Bearer YOUR_TOKEN'
```

## File Organization

Each section has the following structure:

```
section-name/
├── index.md                    # Overview and quick start
├── endpoint-1.md              # Individual endpoint documentation
├── endpoint-2.md
└── ...
```

## Endpoint Documentation Format

Each endpoint documentation file includes:

- **Endpoint Information**: Description, HTTP method, URL path
- **Request**: Parameters, headers, cURL example
- **Response**: Status code, schema, field descriptions
- **Authorization**: Information about required authentication

## Common Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | Yes | Bearer token for API authentication |
| `Content-Type` | Yes (for POST/PUT) | Set to `application/json` |

## Response Format

All successful responses follow this format:

```json
{
  "data": {
    ...
  }
}
```

Paginated responses include:

```json
{
  "data": [...],
  "links": {
    "first": "url",
    "last": "url",
    "prev": "url",
    "next": "url"
  },
  "meta": {
    "current_page": 1,
    "per_page": 15,
    "total": 100,
    ...
  }
}
```

## Error Handling

Errors are returned with appropriate HTTP status codes:

- `400` - Bad Request (invalid parameters)
- `401` - Unauthorized (missing or invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `422` - Unprocessable Entity (validation error)
- `500` - Internal Server Error

## Rate Limiting

Please contact Lendflow support for information about rate limiting policies and usage quotas.

## Authentication

### Getting an API Key

1. Visit the [Lendflow client portal](https://app.lendflow.com/login)
2. Navigate to API settings
3. Generate a new API key
4. Copy and securely store your Bearer token

### Token Format

All API requests must include the Authorization header:

```
Authorization: Bearer [YOUR_TOKEN]
```

Replace `[YOUR_TOKEN]` with your actual API key.

## Common Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number for pagination (default: 1) |
| `per_page` | integer | Results per page (default: 15) |
| `search` | string | Search/filter term |
| `sort` | string | Sort field and direction |

## Webhook Support

The Lendflow API supports webhooks for real-time notifications. Configure webhook endpoints in your widget or application configuration.

## Support

For API support and questions:

- Visit the [Lendflow website](https://www.lendflow.com)
- Contact support through the [client portal](https://app.lendflow.com/login)
- Email: support@lendflow.com

## Documentation Updates

This documentation is based on the Lendflow API v2. Check for updates regularly as the API may be enhanced with new features and endpoints.

## Quick Links

- [Attribute Builder API](./attribute-builder/)
- [Lender Network API](./lender-network/)
- [Entity Profiles API](./entity-profiles/)
- [Application Widget API](./application-widget/)
- [Authentication Guide](./authentication/)
- [Offers API](./offers/)

---

**Last Updated:** January 2024
**API Version:** v2
