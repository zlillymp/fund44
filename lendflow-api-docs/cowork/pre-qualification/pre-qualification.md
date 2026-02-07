# Pre-Qualification

## Endpoint Description

This endpoint allows registered users with historical financial data to run a Pre-Qualification through the Lendflow system.

## Request

### HTTP Method & Path
```
POST /api/v1/prequalification
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
  "data": [
    {
      "statement_date": "2021-06-19T15:01:23+0000",
      "statement_amount": 12123.12
    },
    {
      "statement_date": "2021-05-19T15:01:23+0000",
      "statement_amount": 12123.12
    },
    {
      "statement_date": "2021-04-19T15:01:23+0000",
      "statement_amount": 12123.12
    }
  ]
}
```

**Parameter Details:**
- **data** (object[]): A collection of at least 3 months of bank statement data
  - **statement_date** (string): Date of the statement
  - **statement_amount** (number): Amount from the statement

## cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v1/prequalification \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "data": [
      {
        "statement_date": "2021-06-19T15:01:23+0000",
        "statement_amount": 12123.12
      },
      {
        "statement_date": "2021-05-19T15:01:23+0000",
        "statement_amount": 12123.12
      },
      {
        "statement_date": "2021-04-19T15:01:23+0000",
        "statement_amount": 12123.12
      }
    ]
  }'
```

## Response

### Success Response (200)

**Content-Type**: `application/json`

```json
{
  "code": 200,
  "data": {
    "issue_date": "2021-01-04T11:23:26Z",
    "prequalification_total": 25000
  }
}
```

**Response Fields:**
- **code** (number): HTTP status code
- **data** (object): Response data
  - **issue_date** (string): Date the pre-qualification was issued
  - **prequalification_total** (number): Total pre-qualification amount

## Related Endpoints

- [Create a Pre-Qualification](./create-a-pre-qualification.md)
- [Save Application Funds](./save-application-funds.md)
- [Monthly Revenues](./monthly-revenues.md)
