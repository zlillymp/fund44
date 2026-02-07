# Offer Templates API Documentation

## Overview

Offer Templates define the structure and rules for loan offers. This API section provides endpoints to retrieve and manage offer templates that are used to create and process offers for applications.

## Endpoints

### 1. List Offer Templates
- **Method:** GET
- **Path:** `/api/v2/offer_templates`
- **Description:** Retrieve a list of all available offer templates.
- **Documentation:** [List Offer Templates](./list-offer-templates.md)

### 2. Show an Offer Template
- **Method:** GET
- **Path:** `/api/v2/offer_templates/{id}`
- **Description:** Retrieve detailed information about a specific offer template by its ID.
- **Documentation:** [Show an Offer Template](./show-an-offer-template.md)

## Authentication

All Offer Templates API endpoints require authentication using Bearer tokens. Include your API key in the Authorization header:

```
Authorization: Bearer {YOUR_TOKEN}
```

To obtain an API key, register on the Lendflow client portal.

## Template Structure

Offer templates include the following properties:

- **id**: Unique identifier for the template
- **name**: Display name of the template
- **description**: Detailed description of the template
- **product**: Product type associated with the template
- **is_enabled**: Whether the template is currently enabled
- **is_default**: Whether this is the default template
- **is_fallback**: Whether this is a fallback template
- **founder_id**: ID of the template creator
- **created_at**: Creation timestamp
- **updated_at**: Last update timestamp

## Use Cases

1. **List all templates** - Retrieve all available templates to display to users or for system configuration
2. **Get template details** - Retrieve specific template information for creating or processing offers

## Status Codes

- **200 OK:** Request successful
- **400 Bad Request:** Invalid parameters
- **401 Unauthorized:** Missing or invalid authentication token
- **404 Not Found:** Template not found
- **500 Internal Server Error:** Server error

## Rate Limiting

Refer to general API documentation for rate limiting policies.
