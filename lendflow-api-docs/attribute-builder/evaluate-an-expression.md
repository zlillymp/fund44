# Evaluate an Expression

## Endpoint Information

**Description:** Evaluate a mathematical or logical expression against attribute data

**HTTP Method:** `POST`

**URL Path:** `/api/v2/attributes/evaluate`

## Request

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |
| `Content-Type` | string | Yes | Set to `application/json` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expression` | string | Yes | The expression to evaluate (e.g., mathematical or logical formula) |
| `context` | object | No | Context variables for expression evaluation |

### cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/attributes/evaluate \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "expression": "attribute1 + attribute2 > 100",
    "context": {}
  }'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "result": true,
    "value": null,
    "error": null
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The evaluation result object |
| `data.result` | boolean | The result of the expression evaluation |
| `data.value` | null | The computed value (if applicable) |
| `data.error` | null | Any error encountered during evaluation |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
