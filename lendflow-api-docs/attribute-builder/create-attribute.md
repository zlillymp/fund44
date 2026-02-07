# Create Attribute

## Endpoint Information

**Description:** Create a new attribute in the system

**HTTP Method:** `POST`

**URL Path:** `/api/v2/attributes`

## Request

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |
| `Content-Type` | string | Yes | Set to `application/json` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the attribute. Must not be greater than 255 characters. |
| `description` | string | null | Optional description of the attribute. Must not be greater than 500 characters. |
| `client_id` | string | No | The ID of an existing record in the clients table. |
| `status` | enum[integer] | No | Status of the attribute. Available options: `1`, `2` |
| `type` | enum[string] | No | Type of the attribute. Available options: `1`, `2` |
| `tokens` | string | No | Additional configuration tokens. |
| `content` | null | No | Content field for the attribute. |
| `is_readonly` | boolean | No | Whether the attribute is read-only. Default: `false` |

### cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/attributes \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "d",
    "description": "Et animi quos velit et fugiat.",
    "client_id": null,
    "status": "1",
    "type": "1",
    "tokens": null,
    "content": null,
    "is_readonly": false
  }'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": null,
    "short_id": null,
    "name": "sunt.",
    "description": "Laboriosias praesentium quis adipisci e0",
    "status": 2,
    "type": 1,
    "content": null,
    "updated_at": null,
    "created_at": null,
    "is_readonly": false
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The created attribute object |
| `data.id` | string/null | Unique identifier for the attribute |
| `data.short_id` | string/null | Short identifier for the attribute |
| `data.name` | string | Name of the attribute |
| `data.description` | string | Description of the attribute |
| `data.status` | integer | Status code (1 or 2) |
| `data.type` | integer | Type identifier for the attribute |
| `data.content` | null | Content field (currently null) |
| `data.updated_at` | timestamp/null | Last update timestamp |
| `data.created_at` | timestamp/null | Creation timestamp |
| `data.is_readonly` | boolean | Whether the attribute is read-only |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
