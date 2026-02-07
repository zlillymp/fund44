# Application Widget API

The Application Widget API provides access to embedded widgets that allow seamless integration of Lendflow's application collection interface into your application.

## Overview

The Application Widget API allows you to:

- Create and manage embedded widgets
- Configure widget appearance and behavior
- Retrieve widget configuration
- Track widget usage and metrics
- Handle widget events and callbacks

## Base URL

```
https://api.lendflow.com/api/v2
```

## Authentication

All Application Widget API endpoints require Bearer token authentication. Include your token in the Authorization header:

```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Widget Management

- Get Widget Configuration - Retrieve widget configuration settings
- Create Widget Instance - Create a new widget instance
- Update Widget Configuration - Update widget settings
- List Widget Instances - Get all widget instances

### Widget Embedding

- Get Widget Embed Code - Get the HTML/JavaScript embed code for a widget
- Get Widget Script - Get the widget script URL for inclusion in your page

## Quick Start

### Get Widget Configuration

Retrieve configuration for a specific widget:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/widgets/{widget_id} \
  --header 'Authorization: Bearer <token>'
```

### Create a Widget Instance

Create a new widget instance for embedding:

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/widgets \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "My Widget",
    "type": "application_form",
    "configuration": {}
  }'
```

## Common Parameters

### Authorization Header

**Type:** string
**Required:** Yes

The Bearer token for API authentication. Register for a new API key at the [client portal](https://app.lendflow.com/login).

### Path Parameters

- `widget_id` - The ID of the widget

## Widget Configuration

Widgets can be configured with various options including:

- **Appearance**: Colors, fonts, logos, branding
- **Behavior**: Auto-submit, field requirements, validation rules
- **Integration**: Callback URLs, webhook endpoints
- **Data**: Pre-filled fields, application data

## Response Format

All API responses are returned in JSON format. Successful responses (2xx status codes) include a `data` field containing the requested information.

```json
{
  "data": { ... }
}
```

## Widget Embedding

To embed a widget in your website, include the widget script in your HTML:

```html
<div id="lendflow-widget"></div>
<script src="https://widget.lendflow.com/embed.js"></script>
<script>
  LendflowWidget.embed({
    widgetId: 'your_widget_id',
    containerId: 'lendflow-widget',
    onComplete: function(applicationId) {
      console.log('Application submitted:', applicationId);
    }
  });
</script>
```

## Error Handling

Errors are returned with appropriate HTTP status codes and include error details in the response body.

## Support

For API support and questions, please contact Lendflow through the [client portal](https://app.lendflow.com/login) or visit the support section of the documentation.
