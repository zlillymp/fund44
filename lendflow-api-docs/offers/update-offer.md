# Update Offer

## Overview

Update an existing offer with new terms and parameters. This endpoint allows modification of offer details such as facility amounts, rates, fees, and other offer-specific parameters.

## Endpoint Details

**HTTP Method:** `PUT`

**URL Path:** `/api/v2/offers/{offer_id}`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v2/offers/{offer_id}`

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
- **Description:** The ID of the offer to update.

## Request Body

**Content-Type:** `application/json`

### Body Parameters

#### max_facility_amount

- **Type:** `number`
- **Required:** No
- **Description:** Maximum available facility amount.

#### advance_rate

- **Type:** `number`
- **Required:** No
- **Description:** Advance rate percentage.

#### 30_day_discount_rate

- **Type:** `number`
- **Required:** No
- **Description:** Discount rate for 30-day payment terms.

#### 10_day_discount_rate_after_initial_30_days

- **Type:** `number`
- **Required:** No
- **Description:** Discount rate for 10-day payment terms after initial 30-day period.

#### expense_deposit

- **Type:** `number`
- **Required:** No
- **Description:** Deposit amount for expenses.

#### origination_fee

- **Type:** `number`
- **Required:** No
- **Description:** Origination fee amount.

#### renewal

- **Type:** `number`
- **Required:** No
- **Description:** Renewal fee or percentage.

#### term

- **Type:** `number`
- **Required:** No
- **Description:** Loan term in days or months.

#### expires_at

- **Type:** `string`
- **Required:** No
- **Description:** Offer expiration date (ISO 8601 format).
- **Example:** `"2025-01-01"`

#### client_url

- **Type:** `string | null`
- **Required:** No
- **Description:** Custom client URL for the offer.

## Request Example

### cURL

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/offers/{offer_id} \
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
  "term": 30,
  "expires_at": "2025-01-01"
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
    "status": "updated",
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
- **Description:** The updated offer object.

**Nested Fields:**
- `id`: Offer ID
- `application_id`: Associated application ID
- `status`: Current offer status
- `status_date`: Timestamp of last status update
- `status_updated_via_borrower_platform`: Boolean flag for platform updates
- `mca_track_id`: MCA tracking ID
- `created_at`: Offer creation timestamp
- `updated_at`: Last update timestamp
- `funded_date`: Funding date if applicable
- `client_url`: Custom client URL
- `is_shared`: Boolean indicating if shared
- `is_legacy`: Boolean indicating if legacy offer
- `details`: Detailed offer information including terms and template data
