# Entity Profiles API

The Entity Profiles API provides access to entity profile data and management within the Lendflow system. Entity profiles contain comprehensive information about businesses and individuals involved in loan applications.

## Overview

The Entity Profiles API allows you to:

- Retrieve entity profile information
- Create and manage entity profiles
- Update entity profile details
- Associate entities with applications
- Query entity attributes and metadata

## Base URL

```
https://api.lendflow.com/api/v2
```

## Authentication

All Entity Profiles API endpoints require Bearer token authentication. Include your token in the Authorization header:

```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Entity Profile Management

- Get Entity Profiles - Retrieve entity profiles
- Get Entity Profile Details - Retrieve detailed information about a specific entity
- Create Entity Profile - Create a new entity profile
- Update Entity Profile - Update an existing entity profile

### Entity Information

- Get Entity Attributes - Get custom attributes for an entity
- Set Entity Attribute - Set a custom attribute value for an entity

## Quick Start

### Retrieve Entity Profiles

Get a list of entity profiles:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/entity-profiles \
  --header 'Authorization: Bearer <token>'
```

### Get Entity Profile Details

Retrieve detailed information about a specific entity:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/entity-profiles/{entity_id} \
  --header 'Authorization: Bearer <token>'
```

## Common Parameters

### Authorization Header

**Type:** string
**Required:** Yes

The Bearer token for API authentication. Register for a new API key at the [client portal](https://app.lendflow.com/login).

### Path Parameters

- `entity_id` - The ID of the entity profile

## Response Format

All API responses are returned in JSON format. Successful responses (2xx status codes) include a `data` field containing the requested information.

```json
{
  "data": { ... }
}
```

## Error Handling

Errors are returned with appropriate HTTP status codes and include error details in the response body.

## Rate Limiting

Please contact Lendflow support for information about rate limiting policies.

## Support

For API support and questions, please contact Lendflow through the [client portal](https://app.lendflow.com/login) or visit the support section of the documentation.
