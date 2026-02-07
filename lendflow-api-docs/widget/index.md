# Widget API Documentation

The Lendflow Widget section provides embeddable application forms and components for integrating Lendflow into your platform.

## Base URL
```
https://api.lendflow.com/api/v2
```

## Authentication
All requests require Bearer token authentication:
```
Authorization: Bearer [YOUR_TOKEN]
```

## Overview

The Widget API allows you to embed Lendflow application forms directly into your website or application. This enables seamless integration of the application process without requiring users to navigate to a separate Lendflow domain.

## Implementation Methods

### 1. Embedded iFrame

Embed a complete application form as an iFrame:

```html
<iframe
  src="https://app.lendflow.com/applications/new?client_id=YOUR_CLIENT_ID&workflow_id=YOUR_WORKFLOW_ID"
  width="100%"
  height="600"
  frameborder="0"
  style="border: none; border-radius: 4px;"
></iframe>
```

### 2. Redirect URL

Direct users to the Lendflow application portal:

```
https://app.lendflow.com/applications/new?client_id=YOUR_CLIENT_ID&workflow_id=YOUR_WORKFLOW_ID
```

### 3. JavaScript Integration

Integrate using JavaScript for more control:

```javascript
<script src="https://cdn.lendflow.com/widget.js"></script>
<script>
  Lendflow.init({
    clientId: 'YOUR_CLIENT_ID',
    containerId: 'lendflow-widget'
  });
</script>

<div id="lendflow-widget"></div>
```

## Widget Configuration

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_id` | string | Yes | Your Lendflow client ID |
| `workflow_id` | string | Yes | The workflow template ID |
| `application_id` | string | No | Pre-fill with existing application |
| `redirect_url` | string | No | URL to redirect after completion |
| `prefill` | object | No | Pre-fill application fields |

### Example with Pre-fill

```javascript
const prefillData = {
  business_name: "Acme Corp",
  email: "contact@acme.com",
  phone: "555-1234"
};

const query = new URLSearchParams({
  client_id: 'YOUR_CLIENT_ID',
  workflow_id: 'YOUR_WORKFLOW_ID',
  prefill: JSON.stringify(prefillData)
});

window.location = `https://app.lendflow.com/applications/new?${query}`;
```

## Events and Callbacks

### Event Listeners

```javascript
window.addEventListener('lendflow-application-created', (event) => {
  const applicationId = event.detail.applicationId;
  console.log('Application created:', applicationId);
});

window.addEventListener('lendflow-application-submitted', (event) => {
  const applicationId = event.detail.applicationId;
  console.log('Application submitted:', applicationId);
});

window.addEventListener('lendflow-form-error', (event) => {
  const error = event.detail.error;
  console.error('Form error:', error);
});
```

## Styling and Customization

### CSS Customization

```css
/* Container styling */
.lendflow-widget {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Form field styling */
.lendflow-field {
  margin-bottom: 16px;
}

.lendflow-field input,
.lendflow-field select,
.lendflow-field textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

/* Button styling */
.lendflow-button {
  background-color: #10b981;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.lendflow-button:hover {
  background-color: #059669;
}
```

## Security Considerations

### CORS Configuration
Ensure your domain is whitelisted in Lendflow settings:
1. Log into your Lendflow dashboard
2. Navigate to Settings > API & Integrations
3. Add your domain to the CORS whitelist

### Data Security
- All data is transmitted over HTTPS
- Use Content Security Policy (CSP) headers
- Validate and sanitize all user input
- Never expose API keys in client-side code

### Example CSP Header

```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
    script-src 'self' https://cdn.lendflow.com;
    style-src 'self' https://cdn.lendflow.com;
    iframe-src https://app.lendflow.com;">
```

## Responsive Design

The widget automatically adapts to mobile and desktop devices.

### Mobile Optimization

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<iframe
  src="https://app.lendflow.com/applications/new?client_id=YOUR_CLIENT_ID&workflow_id=YOUR_WORKFLOW_ID"
  width="100%"
  height="auto"
  frameborder="0"
  style="border: none; border-radius: 4px; min-height: 600px;"
></iframe>
```

## API Endpoints for Widget Management

### Get Widget Configuration

```bash
GET /api/v2/widgets/{widget_id}
Authorization: Bearer <token>
```

Response:
```json
{
  "data": {
    "id": "widget_123",
    "client_id": "client_456",
    "workflow_id": "workflow_789",
    "title": "Apply for Capital",
    "description": "Quick capital application",
    "styling": {
      "primary_color": "#10b981",
      "font_family": "sans-serif"
    },
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

## Response Handling

### Success Response

```json
{
  "data": {
    "applicationId": "app_12345",
    "status": "submitted",
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "status": 200
}
```

### Error Response

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Required fields missing",
    "fields": [
      {
        "name": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

## Testing

### Development Mode

Enable development mode for testing:

```javascript
Lendflow.init({
  clientId: 'YOUR_CLIENT_ID',
  containerId: 'lendflow-widget',
  debug: true,
  env: 'sandbox'
});
```

### Test Applications

Use test data in development:
- Email: `test@example.com`
- Phone: `555-0000-0000`

## Troubleshooting

### Common Issues

#### iFrame not loading
- Verify client_id and workflow_id are correct
- Check CORS settings in dashboard
- Ensure domain is whitelisted

#### Events not firing
- Check browser console for errors
- Verify event listeners are attached correctly
- Check that application submission completed successfully

#### Styling not applying
- Clear browser cache
- Check CSS specificity conflicts
- Verify stylesheet is loaded before widget

## Best Practices

1. **Always use HTTPS** - Ensure your site uses HTTPS
2. **Handle errors gracefully** - Implement error handling for user feedback
3. **Mobile-first** - Test on mobile devices
4. **Accessibility** - Ensure widget is accessible to all users
5. **Performance** - Lazy load widget if below the fold
6. **Security** - Never expose API keys or sensitive data

## Example Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apply for Capital</title>
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'self';
      script-src 'self' https://cdn.lendflow.com;
      frame-src https://app.lendflow.com;">
</head>
<body>
  <div class="container">
    <h1>Apply for Capital</h1>
    <p>Complete our quick application form below.</p>

    <iframe
      id="lendflow-widget"
      src="https://app.lendflow.com/applications/new?client_id=YOUR_CLIENT_ID&workflow_id=YOUR_WORKFLOW_ID"
      width="100%"
      height="600"
      frameborder="0"
      style="border: none; border-radius: 4px;"
    ></iframe>
  </div>

  <script>
    window.addEventListener('lendflow-application-submitted', (event) => {
      console.log('Application submitted:', event.detail);
      alert('Thank you for submitting your application!');
    });
  </script>
</body>
</html>
```

---

For more information, visit the [Lendflow Documentation](https://docs.lendflow.com).
