# Create an Offer

## Overview

This endpoint - only available to self-funding clients - will create a new offer for the application.

## Endpoint Details

**HTTP Method:** `POST`

**URL Path:** `/api/v2/workflow/applications/{application_id}/offers`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v2/workflow/applications/{application_id}/offers`

## Authorization

**Type:** Bearer Token

**Location:** Header

**Required:** Yes

**Format:** `Authorization: Bearer [YOUR_TOKEN]`

Lendflow uses API Bearer Tokens to permit access to our API. You can register for a new Lendflow API token from the client portal at https://app.lendflow.com/login. You must replace [YOUR_TOKEN] with your personal API key.

## Path Parameters

### application_id

- **Type:** `string`
- **Required:** Yes
- **Description:** The ID of the application.

## Request Body

**Content-Type:** `application/json`

### Body Parameters

#### product_id

- **Type:** `string`
- **Required:** Conditional (required when `offer_template_id` is not present)
- **Description:** The ID of an existing record in the products table.

#### offer_template_id

- **Type:** `string`
- **Required:** Conditional (required when `product_id` is not present)
- **Description:** The ID of an existing record in the offer_templates table.

#### stips

- **Type:** `object[]`
- **Required:** No
- **Description:** Array of stipulation objects.

#### client_url

- **Type:** `string | null`
- **Required:** No
- **Description:** Must be a valid URL. Must not be greater than 2083 characters.
- **Example:** `http://www.bailey.biz/quos-velit-et-fugiat-sunt-nihil-accusantium-harum.html`

## Request Example

### cURL

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/workflow/applications/{application_id}/offers \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "product_id": 1,
  "expires_at": "2025-01-01",
  "max_facility_amount": 5000,
  "advance_rate": 8,
  "30_day_discount_rate": 7.5,
  "10_day_discount_rate_after_initial_30_days": 8.75,
  "expense_deposit": 350,
  "origination_fee": 120,
  "renewal": 10,
  "term": 30,
  "offer_generated_date": "2023-11-01",
  "offer_expiration_date": "2024-01-01"
}'
```

## Response

**Status Code:** `200`

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": null,
    "application_id": "ef0caf72-f583-4c8a-9667-15c33c5b61a2",
    "status": null,
    "status_date": null,
    "status_updated_via_borrower_platform": false,
    "mca_track_id": null,
    "created_at": null,
    "updated_at": null,
    "funded_date": null,
    "client_url": null,
    "is_shared": false,
    "is_legacy": true,
    "details": {
      "id": null,
      "offer_id": null,
      "offer": {
        "base_rate": null,
        "term_length": null,
        "total_initial_payment": null,
        "number_of_payments": null,
        "funded_amount": null,
        "closing": null,
        "created_at": null,
        "updated_at": null
      },
      "offer_template_id": "01958b10-0d3c-73d4-99a1-148aece7409d",
      "offer_template": {
        "id": "01958b10-0d3c-73d4-99a1-148aece7409d",
        "name": "ARLOC",
        "description": null,
        "product": "arloc",
        "is_enabled": true,
        "is_default": true,
        "is_fallback": true,
        "funder_id": null,
        "client_id": null,
        "created_at": "2025-03-12T15:53:59.000000Z",
        "updated_at": "2025-07-03T19:56:42.000000Z",
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
- **Description:** The created offer object containing offer details and template information.

**Nested Fields:**
- `id`: Offer ID (may be null)
- `application_id`: The application ID for this offer
- `status`: Current status of the offer
- `status_date`: Date when status was last updated
- `status_updated_via_borrower_platform`: Boolean indicating if status was updated via borrower platform
- `mca_track_id`: MCA tracking ID (if applicable)
- `created_at`: Timestamp when offer was created
- `updated_at`: Timestamp when offer was last updated
- `funded_date`: Date when offer was funded
- `client_url`: Custom URL for the client
- `is_shared`: Boolean indicating if offer is shared
- `is_legacy`: Boolean indicating if this is a legacy offer
- `details`: Object containing detailed offer information including offer terms, template information, and closing details
