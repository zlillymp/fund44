# Get Specific Score Card Details

## Endpoint Details

**Endpoint Name:** Get specific Score Card details

**Description:** Retrieve detailed information about a specific score card.

**HTTP Method:** GET

**URL Path:** `/api/v2/score_cards/{score_card_id}`

## Authorization

**Authorization Type:** Bearer Token (Required)

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key on the client portal in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer {YOUR_TOKEN}
```

You must replace `{YOUR_TOKEN}` with your personal API key.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| score_card_id | string | Yes | The ID of the score card. |

## Request

This is a GET request with no body parameters.

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object | The score card details object. |

### Response Fields

The score card object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string | The ID of the score card. |
| name | string | The name of the score card. |
| description | string | The description of the score card. |

### Response Example

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string"
  }
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/score_cards/{score_card_id} \
  --header 'Authorization: Bearer {TOKEN}'
```
