# Update Widget Configuration

## Endpoint Information

**Description:** Update the configuration settings for an existing application widget

**HTTP Method:** `PUT`

**URL Path:** `/api/v2/widgets/{widget_id}`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `widget_id` | string | Yes | The ID of the widget to update. |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |
| `Content-Type` | string | Yes | Set to `application/json` |

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name for the widget instance |
| `configuration` | object | No | Widget configuration settings to update |
| `configuration.appearance` | object | No | Appearance/styling settings |
| `configuration.behavior` | object | No | Behavior settings |
| `configuration.integration` | object | No | Integration settings |

### cURL Example

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/widgets/{widget_id} \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Updated Widget Name",
    "configuration": {
      "appearance": {
        "primary_color": "#1565C0"
      }
    }
  }'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": "widget_1",
    "name": "Updated Widget Name",
    "type": "application_form",
    "status": "active",
    "configuration": {
      "appearance": {
        "primary_color": "#1565C0",
        "secondary_color": "#1565C0",
        "font_family": "Helvetica, Arial, sans-serif",
        "logo_url": "https://example.com/logo.png"
      },
      "behavior": {
        "auto_submit": false,
        "allow_save_progress": true
      }
    },
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2024-01-01T12:00:00Z"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The updated widget object |
| `data.id` | string | Unique identifier for the widget |
| `data.name` | string | Name of the widget |
| `data.type` | string | Type of widget |
| `data.status` | string | Widget status |
| `data.configuration` | object | Updated widget configuration settings |
| `data.created_at` | timestamp | Creation timestamp |
| `data.updated_at` | timestamp | Last update timestamp |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
