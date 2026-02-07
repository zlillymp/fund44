# Create a Pre-Qualification

## Endpoint Description

Create a new pre-qualification record with business information and financial criteria.

## Request

### HTTP Method & Path
```
POST /api/v2/prequalification
```

### Authorization
**Required**: Bearer Token
```
Authorization: Bearer <token>
```

Lendflow uses API Bearer Tokens to permit access to our API. You can register for a new Lendflow API key on our client portal in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer {YOUR_TOKEN}
```

Replace `{YOUR_TOKEN}` with your personal API key.

### Request Body

**Content-Type**: `application/json`

```json
{
  "time_in_business": "1 - 2 Years",
  "monthly_avg_revenue": "9 - 4000",
  "credit_score": "469 or below",
  "requested_amount": 1000,
  "currency": "USD",
  "application_id": 1
}
```

**Parameter Details:**
- **time_in_business** (string, required): Time the business has been in operation
  - Valid values: "1 - 2 Years", "10 Years", "2 - 5 Years", "3 - 5 Months", "5 - 10 Years", "6 - 12 Months", etc.
  - Note: Values represent ranges. N/A for businesses less than 3 months old.

- **monthly_avg_revenue** (string, required): Average monthly revenue range
  - Valid ranges: "0 - 4000", "10000001+", "100001 - 150000", "14001 - 20000", "15001 - 25000", "20001 - 30000", "250001 - 500000", "30001 - 50000", "4001 - 8000", "500001 - 1000000", "50001 - 100000", "8001 - 14000"
  - Example: "9 - 4000"

- **credit_score** (string, required): Credit score range
  - Valid ranges: "449 or below", "450 - 499", "500 - 549", "550 - 599", "600 - 649", "650 - 719", "720 or above", "N/A", "Unsure"
  - Example: "469 or below"

- **requested_amount** (number, required): The amount requested
  - Example: 1000

- **currency** (string, required): Currency code
  - Default: "USD"

- **application_id** (integer): ID of the associated application

## cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/prequalification \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "time_in_business": "1 - 2 Years",
    "monthly_avg_revenue": "9 - 4000",
    "credit_score": "469 or below",
    "requested_amount": 1000,
    "currency": "USD",
    "application_id": 1
  }'
```

## Response

### Success Response (200)

**Content-Type**: `application/json`

```json
{
  "data": {
    "prequalification_amount_min": 10000,
    "prequalification_amount_max": 25000,
    "prequalification_id": "bfc83181-d6a7-3b02-9bb8-fb5267a",
    "time_in_business": "time_in_business_2",
    "monthly_avg_revenue": "monthly_avg_revenue_5",
    "credit_score": "credit_score_2",
    "requested_amount": 3675589.82,
    "currency": "usd"
  }
}
```

**Response Fields:**
- **data** (object): Response data
  - **prequalification_amount_min** (number): Minimum prequalification amount
  - **prequalification_amount_max** (number): Maximum prequalification amount
  - **prequalification_id** (string): Unique prequalification identifier
  - **time_in_business** (string): Business tenure category
  - **monthly_avg_revenue** (string): Monthly revenue category
  - **credit_score** (string): Credit score category
  - **requested_amount** (number): Requested loan amount
  - **currency** (string): Currency code in lowercase

## Related Endpoints

- [Pre-Qualification](./pre-qualification.md)
- [Save Application Funds](./save-application-funds.md)
- [Monthly Revenues](./monthly-revenues.md)
