# Get All Attributes

## Endpoint Information

**Description:** Retrieve all available attributes from the system

**HTTP Method:** `GET`

**URL Path:** `/api/v2/attributes`

## Request

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |
| `Content-Type` | string | No | Set to `application/json` |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `clients` | string[] | No | Filter attributes by client IDs. The id of an existing record in the clients table. |
| `search` | string | null | Optional search parameter to filter attributes by name or character ID. |
| `status` | enum[string] | null | Filter attributes by status. Available options: `1`, `2` |

### cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/attributes \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": [
    {
      "id": null,
      "smart_id": null,
      "name": "Eius et.",
      "description": "Et fugiat sunt nihil accusantium. Mol",
      "status": 2,
      "type": 1,
      "content": null,
      "updated_at": null,
      "created_at": null,
      "is_readonly": false
    },
    {
      "id": null,
      "smart_id": null,
      "name": "Neon edit.",
      "description": "Dignissimos neque blanditiis odio. Ex",
      "status": 2,
      "type": 1,
      "content": null,
      "updated_at": null,
      "created_at": null,
      "is_readonly": false
    }
  ]
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object[] | Array of attribute objects |
| `data[].id` | string/null | Unique identifier for the attribute |
| `data[].smart_id` | string/null | Smart ID for the attribute |
| `data[].name` | string | Name of the attribute |
| `data[].description` | string | Description of the attribute |
| `data[].status` | integer | Status code (1 or 2) |
| `data[].type` | integer | Type identifier for the attribute |
| `data[].content` | null | Content field (currently null) |
| `data[].updated_at` | timestamp/null | Last update timestamp |
| `data[].created_at` | timestamp/null | Creation timestamp |
| `data[].is_readonly` | boolean | Whether the attribute is read-only |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
