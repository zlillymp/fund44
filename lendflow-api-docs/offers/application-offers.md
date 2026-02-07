# Application Offers

## Overview

A paginated list of offers for a single application. The example responses detail the set of attributes returned for each offer, including offer details and templates.

## Endpoint Details

**HTTP Method:** `GET`

**URL Path:** `/api/v2/applications/{application_id}/offers`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v2/applications/{application_id}/offers`

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

## Query Parameters

Pagination and filtering parameters may be available. Refer to the API documentation for specific query parameters supported.

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/offers \
  --header 'Authorization: Bearer <token>'
```

## Response

**Status Code:** `200`

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": [
    {
      "id": null,
      "application_id": "0c0c3b20-0161-4d16-8614-9fa226904c7f",
      "status": null,
      "status_date": null,
      "status_updated_via_borrower_platform": false,
      "start_date": null,
      "end_date": null,
      "client_url": null,
      "product": "totam",
      "funding_data": [],
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
          "created_at": "2025-03-12T15:53:59.000000Z",
          "updated_at": "2025-07-03T19:56:42.000000Z"
        }
      }
    },
    {
      "id": null,
      "application_id": "76eb8463-ea69-4f92-bba6-1ee55106cd93",
      "status": null,
      "status_date": null,
      "status_updated_via_borrower_platform": false,
      "start_date": null,
      "end_date": null,
      "client_url": null,
      "product": "nemo",
      "funding_data": [],
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
          "created_at": "2025-03-12T15:53:59.000000Z",
          "updated_at": "2025-07-03T19:56:42.000000Z"
        }
      }
    }
  ],
  "links": {
    "first": "page_url",
    "last": "page_url",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 15,
    "to": 2,
    "total": 2
  }
}
```

## Response Fields

### data

- **Type:** `object[]`
- **Description:** Array of offer objects for the application.

**Nested Fields (per offer):**
- `id`: Offer ID
- `application_id`: Associated application ID
- `status`: Current offer status
- `status_date`: Date status was last updated
- `status_updated_via_borrower_platform`: Boolean indicating platform update source
- `start_date`: Offer start date
- `end_date`: Offer end date
- `client_url`: Custom client URL
- `product`: Product type
- `funding_data`: Array of funding information
- `is_legacy`: Boolean indicating if legacy offer
- `details`: Object containing detailed offer and template information

### links

- **Type:** `object`
- **Description:** Pagination links including first, last, prev, and next.

### meta

- **Type:** `object`
- **Description:** Pagination metadata including current page, total count, and per-page count.

**Nested Fields:**
- `current_page`: Current page number
- `from`: Index of first item on current page
- `last_page`: Last available page number
- `per_page`: Number of items per page
- `to`: Index of last item on current page
- `total`: Total number of offers
