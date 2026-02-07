# Retrieve Score Card Results by Application

## Endpoint Details

**Endpoint Name:** Retrieve Score Card results by application

**Description:** Retrieve score card results for a specific application.

**HTTP Method:** GET

**URL Path:** `/api/v2/applications/{application_id}/score_card/results`

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
| data | object[] | Array of score card result objects. |

### Response Fields

Each score card result object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the result. |
| status | string/null | The status of the result. |
| points | integer/null | The points value. |
| weighted_points | integer/null | The weighted points value. |
| categories | string/null | The categories. |
| score_card_id | string/null | The ID of the scorecard. |
| score_card_group_result_id | string/null | The ID of the score card group result. |
| created_at | string/null | Timestamp when created. |
| finished_at | string/null | Timestamp when finished. |
| failed_at | string/null | Timestamp when failed. |
| knocked_sum_at | string/null | Timestamp for knockout status. |

### Response Example

```json
{
  "data": []
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/score_card/results \
  --header 'Authorization: Bearer {TOKEN}'
```
