# Create Widget Instance

## Endpoint Information

**Description:** Create a new application widget instance for embedding

**HTTP Method:** `POST`

**URL Path:** `/api/v2/widgets`

## Request

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |
| `Content-Type` | string | Yes | Set to `application/json` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name for the widget instance |
| `type` | string | Yes | Type of widget (application_form, etc.) |
| `configuration` | object | No | Widget configuration settings |
| `configuration.appearance` | object | No | Appearance/styling settings |
| `configuration.behavior` | object | No | Behavior settings |
| `configuration.integration` | object | No | Integration settings |

### cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/widgets \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My New Widget",
    "type": "application_form",
    "configuration": {
      "appearance": {
        "primary_color": "#00C853",
        "logo_url": "https://example.com/logo.png"
      },
      "behavior": {
        "allow_save_progress": true
      }
    }
  }'
```

## Response

### Status Code: 201

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": "widget_new_1",
    "name": "My New Widget",
    "type": "application_form",
    "status": "active",
    "embed_code": "<script src=\"https://widget.lendflow.com/widget_new_1.js\"></script>",
    "script_url": "https://widget.lendflow.com/widget_new_1.js",
    "configuration": {
      "appearance": {
        "primary_color": "#00C853",
        "logo_url": "https://example.com/logo.png"
      },
      "behavior": {
        "allow_save_progress": true
      }
    },
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The created widget object |
| `data.id` | string | Unique identifier for the widget |
| `data.name` | string | Name of the widget |
| `data.type` | string | Type of widget |
| `data.status` | string | Widget status |
| `data.embed_code` | string | HTML embed code for the widget |
| `data.script_url` | string | URL to widget JavaScript file |
| `data.configuration` | object | Widget configuration settings |
| `data.created_at` | timestamp | Creation timestamp |
| `data.updated_at` | timestamp | Last update timestamp |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
