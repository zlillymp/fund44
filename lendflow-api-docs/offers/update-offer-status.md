# Update Offer Status

## Overview

Update the status of an existing offer. This endpoint allows you to change the status of an offer (e.g., pending, confirmed, declined, funded).

## Endpoint Details

**HTTP Method:** `PUT`

**URL Path:** `/api/v2/offers/{offer_id}/status`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v2/offers/{offer_id}/status`

## Authorization

**Type:** Bearer Token

**Location:** Header

**Required:** Yes

**Format:** `Authorization: Bearer [YOUR_TOKEN]`

Lendflow uses API Bearer Tokens to permit access to our API. You can register for a new Lendflow API token from the client portal at https://app.lendflow.com/login. You must replace [YOUR_TOKEN] with your personal API key.

## Path Parameters

### offer_id

- **Type:** `string`
- **Required:** Yes
- **Description:** The ID of the offer.

## Request Body

**Content-Type:** `application/json`

### Body Parameters

#### status

- **Type:** `string`
- **Required:** Yes
- **Description:** The new status for the offer.
- **Possible Values:** `pending`, `confirmed`, `declined`, `funded`, `expired`, etc.
- **Example:** `"confirmed"`

#### status_date

- **Type:** `string`
- **Required:** No
- **Description:** The date when the status change occurred (ISO 8601 format).
- **Example:** `"2024-01-01T00:00:00Z"`

## Request Example

### cURL

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/offers/{offer_id}/status \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "status": "confirmed",
  "status_date": "2024-01-01T00:00:00Z"
}'
```

## Response

**Status Code:** `200`

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": "offer_id",
    "application_id": "application_id",
    "status": "confirmed",
    "status_date": "2024-01-01T00:00:00.000000Z",
    "status_updated_via_borrower_platform": false,
    "mca_track_id": null,
    "created_at": "2024-01-01T00:00:00.000000Z",
    "updated_at": "2024-01-01T00:00:00.000000Z",
    "funded_date": null,
    "client_url": null,
    "is_shared": false,
    "is_legacy": false,
    "details": {
      "id": "details_id",
      "offer_id": "offer_id",
      "offer": {
        "base_rate": 12.5,
        "term_length": 30,
        "total_initial_payment": 5000,
        "number_of_payments": 12,
        "funded_amount": 5000,
        "closing": null,
        "created_at": "2024-01-01T00:00:00.000000Z",
        "updated_at": "2024-01-01T00:00:00.000000Z"
      },
      "offer_template_id": "template_id",
      "offer_template": {
        "id": "template_id",
        "name": "ARLOC",
        "description": null,
        "product": "arloc",
        "is_enabled": true,
        "is_default": true,
        "is_fallback": true,
        "funder_id": null,
        "client_id": null,
        "created_at": "2024-01-01T00:00:00.000000Z",
        "updated_at": "2024-01-01T00:00:00.000000Z",
        "offer_details": [],
        "closing_details": [],
        "has_closing_details": false
      }
    }
  }
}
```

## Response Fields

### data

- **Type:** `object`
- **Description:** The updated offer object with new status.

**Nested Fields:**
- `id`: Offer ID
- `application_id`: Associated application ID
- `status`: The new offer status
- `status_date`: When the status was updated
- `status_updated_via_borrower_platform`: Boolean indicating if update came from borrower platform
- `mca_track_id`: MCA tracking ID
- `created_at`: Offer creation timestamp
- `updated_at`: Last update timestamp
- `funded_date`: Funding date if applicable
- `client_url`: Custom client URL
- `is_shared`: Boolean indicating if shared
- `is_legacy`: Boolean indicating if legacy offer
- `details`: Detailed offer information

## Status Transitions

Common offer status transitions:
- `pending` → `confirmed`: Offer accepted by applicant
- `pending` → `declined`: Offer rejected by applicant
- `confirmed` → `funded`: Offer has been funded
- `pending` → `expired`: Offer expiration date has passed
