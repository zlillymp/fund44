# Offers API Endpoints

This section contains all API endpoints for managing offers in the Lendflow system.

## Endpoints Overview

### 1. Create an Offer
- **HTTP Method:** `POST`
- **URL Path:** `/api/v2/workflow/applications/{application_id}/offers`
- **Description:** Create a new offer for an application. Only available to self-funding clients.
- **File:** `create-an-offer.md`

### 2. Confirm an Offer
- **HTTP Method:** `PUT`
- **URL Path:** `/api/v2/offers/{offer_id}/confirm`
- **Description:** Confirm an offer for an application.
- **File:** `confirm-an-offer.md`

### 3. Application Offers
- **HTTP Method:** `GET`
- **URL Path:** `/api/v2/applications/{application_id}/offers`
- **Description:** Retrieve a paginated list of all offers for a single application.
- **File:** `application-offers.md`

### 4. Decline Current Offers
- **HTTP Method:** `POST`
- **URL Path:** `/api/v2/applications/{application_id}/decline-offers`
- **Description:** Allow an applicant to decline all current offers for an application. Sends notification email to lender with feedback.
- **File:** `decline-current-offers.md`

### 5. Update Offer
- **HTTP Method:** `PUT`
- **URL Path:** `/api/v2/offers/{offer_id}`
- **Description:** Update an existing offer with new terms and parameters such as facility amounts, rates, and fees.
- **File:** `update-offer.md`

### 6. Update Offer Status
- **HTTP Method:** `PUT`
- **URL Path:** `/api/v2/offers/{offer_id}/status`
- **Description:** Update the status of an existing offer (e.g., pending, confirmed, declined, funded).
- **File:** `update-offer-status.md`

## Common Parameters

### Authorization
All endpoints require Bearer Token authentication in the Authorization header:
```
Authorization: Bearer [YOUR_TOKEN]
```

### Base URL
All endpoints use the following base URL:
```
https://api.lendflow.com
```

## Authentication

Lendflow uses API Bearer Tokens to authenticate requests. You can obtain a token from the Lendflow client portal at https://app.lendflow.com/login.

For detailed information about authentication, see the Authentication section.

## Response Format

All endpoints return JSON responses with a consistent structure:

```json
{
  "data": { /* offer object or array of offers */ },
  "links": { /* pagination links */ },
  "meta": { /* pagination metadata */ }
}
```

For specific response structures, refer to the individual endpoint documentation.

## Common Offer Object Structure

Most endpoints return offer objects with the following structure:

```json
{
  "id": "offer_id",
  "application_id": "application_id",
  "status": "pending|confirmed|declined|funded|expired",
  "status_date": "2024-01-01T00:00:00Z",
  "status_updated_via_borrower_platform": boolean,
  "mca_track_id": "track_id",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z",
  "funded_date": "2024-01-01",
  "client_url": "https://example.com",
  "is_shared": boolean,
  "is_legacy": boolean,
  "details": {
    "offer": {
      "base_rate": number,
      "term_length": number,
      "total_initial_payment": number,
      "number_of_payments": number,
      "funded_amount": number,
      "closing": null
    },
    "offer_template": {
      "id": "template_id",
      "name": "ARLOC",
      "product": "arloc",
      "is_enabled": boolean,
      "is_default": boolean,
      "is_fallback": boolean
    }
  }
}
```

## Common Offer Parameters

When creating or updating offers, you may use the following parameters:

- **product_id** (string): ID of an existing product
- **offer_template_id** (string): ID of an existing offer template
- **max_facility_amount** (number): Maximum available facility amount
- **advance_rate** (number): Advance rate percentage
- **30_day_discount_rate** (number): Discount rate for 30-day terms
- **10_day_discount_rate_after_initial_30_days** (number): Discount rate for 10-day terms after 30 days
- **expense_deposit** (number): Deposit amount for expenses
- **origination_fee** (number): Origination fee amount
- **renewal** (number): Renewal fee or percentage
- **term** (number): Loan term in days or months
- **expires_at** (string): Offer expiration date (ISO 8601)
- **client_url** (string): Custom client URL

## Error Handling

All endpoints follow standard HTTP status codes for responses:

- **200 OK:** Successful GET or PUT request
- **201 Created:** Successful POST request (if applicable)
- **204 No Content:** Successful request with no response body
- **400 Bad Request:** Invalid request parameters
- **403 Forbidden:** Insufficient permissions
- **404 Not Found:** Resource not found
- **500 Internal Server Error:** Server error

## Rate Limiting

The Lendflow API may implement rate limiting. Check response headers for rate limit information.

## API Guides

For comprehensive guides on using the Offers API, visit:
- [API Documentation](https://docs.lendflow.com/api-reference/offers/create-an-offer)
- [API Guides](https://docs.lendflow.com/api-docs/docs/introduction)
