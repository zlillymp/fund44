# List All Score Cards

## Endpoint Details

**Endpoint Name:** List all Score Cards

**Description:** Retrieve a list of all available score cards.

**HTTP Method:** GET

**URL Path:** `/api/v2/score_cards`

## Authorization

**Authorization Type:** Bearer Token (Required)

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key on the client portal in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer {YOUR_TOKEN}
```

You must replace `{YOUR_TOKEN}` with your personal API key.

## Path Parameters

None

## Query Parameters

None

## Request

This is a GET request with no parameters.

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object[] | Array of score card objects. |

### Response Fields

Each score card object contains score card metadata.

### Response Example

```json
{
  "data": []
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/score_cards \
  --header 'Authorization: Bearer {TOKEN}'
```
