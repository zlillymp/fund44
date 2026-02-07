# Retrieve Score Card Group Results by Application

## Endpoint Details

**Endpoint Name:** Retrieve Score Card Group results by application

**Description:** Retrieve score card group results for a specific application.

**HTTP Method:** GET

**URL Path:** `/api/v2/applications/{application_id}/score_card_group/results`

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
| application_id | string | Yes | The ID of the application. |

## Request

This is a GET request with no body parameters.

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object[] | Array of score card group result objects. |

### Response Fields

Each score card group result object contains details about group-level scoring results.

### Response Example

```json
{
  "data": []
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/score_card_group/results \
  --header 'Authorization: Bearer {TOKEN}'
```
