# Attribute Builder API

The Attribute Builder API allows you to manage and work with attributes in the Lendflow system. Attributes are customizable data fields that can be associated with applications and used to drive business logic.

## Overview

Attributes are the building blocks of Lendflow's flexible data model. They allow you to:

- Create custom data fields for your applications
- Store and retrieve attribute values
- Evaluate expressions based on attributes
- Filter and search by attribute values

## Base URL

```
https://api.lendflow.com/api/v2
```

## Authentication

All Attribute Builder API endpoints require Bearer token authentication. Include your token in the Authorization header:

```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Application Attributes

- [Get Application Attributes](./get-application-attributes.md) - Retrieve all attributes for a specific application
- [Set an Attribute Value](./set-an-attribute-value.md) - Set the value of an attribute for an application

### Attribute Management

- [Get All Attributes](./get-all-attributes.md) - Retrieve all available attributes in the system
- [Create Attribute](./create-attribute.md) - Create a new attribute definition
- [Update Attribute](./update-attribute.md) - Update an existing attribute definition

### Expression Evaluation

- [Evaluate an Expression](./evaluate-an-expression.md) - Evaluate a mathematical or logical expression against attribute data

## Quick Start

### 1. Retrieve Application Attributes

Get all attributes associated with an application:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/attributes \
  --header 'Authorization: Bearer <token>'
```

### 2. Create an Attribute

Define a new attribute for use in your system:

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/attributes \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "attribute_name",
    "description": "Description of the attribute",
    "status": 1,
    "type": 1
  }'
```

### 3. Set an Attribute Value

Assign a value to an attribute for a specific application:

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/attributes/{attribute_id}/value \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "value": "attribute_value"
  }'
```

## Common Parameters

### Authorization Header

**Type:** string
**Required:** Yes

The Bearer token for API authentication. Register for a new API key at the [client portal](https://app.lendflow.com/login).

### Path Parameters

- `application_id` - The ID of the application
- `attribute_id` - The ID of the attribute

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
