# Stips API Documentation

## Overview

Stipulations (STIPs) are requirements or conditions that must be satisfied in the lending process. This API section provides endpoints to manage and retrieve stipulations for applications and offers.

## Endpoints

### 1. Update Application Stips
- **Method:** PUT
- **Path:** `/api/v2/applications/{application_id}/stips`
- **Description:** Update stipulations for a specific application.
- **Documentation:** [Update Application Stips](./update-application-stips.md)

### 2. Get Required Stips for Single Application
- **Method:** GET
- **Path:** `/api/v2/applications/{application_id}/required`
- **Description:** Retrieve the required stipulations for a specific application.
- **Documentation:** [Get Required Stips for Single Application](./get-required-stips-for-single-application.md)

### 3. Get Required Stips for Single Offer
- **Method:** GET
- **Path:** `/api/v2/offers/{offer_id}/required`
- **Description:** Retrieve the required stipulations for a specific offer.
- **Documentation:** [Get Required Stips for Single Offer](./get-required-stips-for-single-offer.md)

## Authentication

All Stips API endpoints require authentication using Bearer tokens. Include your API key in the Authorization header:

```
Authorization: Bearer {YOUR_TOKEN}
```

To obtain an API key, register on the Lendflow client portal.

## Common Response Schema

Stips endpoints typically return responses with the following structure:

```json
{
  "data": [
    {
      "id": 1,
      "stip_id": 1,
      "name": "Stipulation Name",
      "description": "Description of the stipulation",
      "count": 1,
      "file_type": null,
      "files": [],
      "is_finished": false
    }
  ]
}
```

## Status Codes

- **200 OK:** Request successful
- **400 Bad Request:** Invalid parameters
- **401 Unauthorized:** Missing or invalid authentication token
- **404 Not Found:** Resource not found
- **500 Internal Server Error:** Server error

## Rate Limiting

Refer to general API documentation for rate limiting policies.
