# Confirm an Offer

## Overview

This endpoint allows you to confirm an offer for an application.

## Endpoint Details

**HTTP Method:** `PUT`

**URL Path:** `/api/v2/offers/{offer_id}/confirm`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v2/offers/{offer_id}/confirm`

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

This endpoint may accept optional body parameters for updating offer details when confirming. Refer to the Create an Offer endpoint for available body parameters.

## Request Example

### cURL

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/offers/{offer_id}/confirm \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "max_facility_amount": 5000,
  "advance_rate": 8,
  "30_day_discount_rate": 7.5,
  "10_day_discount_rate_after_initial_30_days": 8.75,
  "expense_deposit": 350,
  "origination_fee": 120,
  "renewal": 10,
  "term": 30
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
- **Description:** The confirmed offer object.

**Nested Fields:**
- `id`: Offer ID
- `application_id`: The associated application ID
- `status`: Current status of the offer (e.g., "confirmed")
- `status_date`: Timestamp when status was updated
- `status_updated_via_borrower_platform`: Boolean indicating if status was updated via borrower platform
- `mca_track_id`: MCA tracking ID (if applicable)
- `created_at`: Timestamp when offer was created
- `updated_at`: Timestamp when offer was last updated
- `funded_date`: Date when offer was funded
- `client_url`: Custom URL for the client
- `is_shared`: Boolean indicating if offer is shared
- `is_legacy`: Boolean indicating if this is a legacy offer
- `details`: Object containing detailed offer information
