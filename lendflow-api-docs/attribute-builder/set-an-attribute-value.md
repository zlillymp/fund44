# Set an Attribute Value

## Endpoint Information

**Description:** Set the value of an attribute for a specific application

**HTTP Method:** `POST`

**URL Path:** `/api/v2/applications/{application_id}/attributes/{attribute_id}/value`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `application_id` | string | Yes | The ID of the application. |
| `attribute_id` | string | Yes | The ID of the attribute to set. |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |
| `Content-Type` | string | Yes | Set to `application/json` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string/number/boolean | Yes | The value to set for the attribute |
| `source` | string | No | Source of the attribute value |

### cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/attributes/{attribute_id}/value \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "value": "some_value",
    "source": "manual"
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
    "value": null,
    "source": null,
    "error": null,
    "application_id": null,
    "attribute": null,
    "updated_at": null,
    "created_at": null
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The updated attribute object |
| `data.id` | string/null | Unique identifier for the attribute |
| `data.value` | string/number/boolean/null | The attribute value |
| `data.source` | string/null | Source of the attribute value |
| `data.error` | null | Any error associated with the attribute |
| `data.application_id` | string/null | Associated application ID |
| `data.attribute` | string/null | Attribute name/type |
| `data.updated_at` | timestamp/null | Last update timestamp |
| `data.created_at` | timestamp/null | Creation timestamp |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
