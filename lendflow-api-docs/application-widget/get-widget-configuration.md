# Get Widget Configuration

## Endpoint Information

**Description:** Retrieve the configuration settings for a specific application widget

**HTTP Method:** `GET`

**URL Path:** `/api/v2/widgets/{widget_id}`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `widget_id` | string | Yes | The ID of the widget to retrieve configuration for. |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |

### cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/widgets/{widget_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": "widget_1",
    "name": "My Application Widget",
    "type": "application_form",
    "status": "active",
    "configuration": {
      "appearance": {
        "primary_color": "#00C853",
        "secondary_color": "#1565C0",
        "font_family": "Helvetica, Arial, sans-serif",
        "logo_url": "https://example.com/logo.png"
      },
      "behavior": {
        "auto_submit": false,
        "allow_save_progress": true,
        "require_email_verification": true,
        "fields_required": ["first_name", "last_name", "email"]
      },
      "integration": {
        "callback_url": "https://example.com/callback",
        "webhook_url": "https://example.com/webhook"
      }
    },
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-12-01T00:00:00Z"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The widget configuration object |
| `data.id` | string | Unique identifier for the widget |
| `data.name` | string | Name of the widget |
| `data.type` | string | Type of widget (application_form, etc.) |
| `data.status` | string | Widget status (active, inactive, draft) |
| `data.configuration` | object | Widget configuration settings |
| `data.configuration.appearance` | object | Appearance/styling configuration |
| `data.configuration.appearance.primary_color` | string | Primary color (hex) |
| `data.configuration.appearance.secondary_color` | string | Secondary color (hex) |
| `data.configuration.appearance.font_family` | string | Font family for widget text |
| `data.configuration.appearance.logo_url` | string | URL to logo image |
| `data.configuration.behavior` | object | Behavior configuration |
| `data.configuration.behavior.auto_submit` | boolean | Whether form auto-submits |
| `data.configuration.behavior.allow_save_progress` | boolean | Allow users to save progress |
| `data.configuration.behavior.require_email_verification` | boolean | Require email verification |
| `data.configuration.behavior.fields_required` | string[] | Required form fields |
| `data.configuration.integration` | object | Integration settings |
| `data.configuration.integration.callback_url` | string | URL for completion callbacks |
| `data.configuration.integration.webhook_url` | string | URL for webhook notifications |
| `data.created_at` | timestamp | Creation timestamp |
| `data.updated_at` | timestamp | Last update timestamp |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
