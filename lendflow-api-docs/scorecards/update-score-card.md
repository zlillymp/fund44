# Update Score Card

## Endpoint Details

**Endpoint Name:** Update Score Card

**Description:** Update a score card for a specific application.

**HTTP Method:** PUT

**URL Path:** `/api/v2/applications/{application_id}/score_card`

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

## Request Body

**Content-Type:** application/json

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| scorecard_id | string | Yes | The ID of the scorecard. |
| points | number | Yes | Must be at least 0. Must not be greater than 2147483647. |

### Body Example

```json
{
  "points": 1
}
```

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object | The updated score card object. |

### Response Fields

The data object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the score card. |
| status | string/null | The status of the score card. |
| points | integer/null | The points value. |
| weighted_points | integer/null | The weighted points value. |
| categories | string/null | The categories associated with the card. |
| score_card_id | string | The ID of the scorecard. |
| score_card_group_result_id | string/null | The ID of the score card group result. |
| created_at | string/null | Timestamp when created. |
| finished_at | string/null | Timestamp when finished. |
| failed_at | string/null | Timestamp when failed. |
| knocked_sum_at | string/null | Timestamp for knockout status. |

### Response Example

```json
{
  "data": {
    "id": null,
    "status": null,
    "points": null,
    "weighted_points": null,
    "categories": null,
    "score_card_id": "e7a0f9f9-c8e7-6d2f-8d52-f1be46fd23d4",
    "score_card_group_result_id": null,
    "created_at": null,
    "finished_at": null,
    "failed_at": null,
    "knocked_sum_at": null
  }
}
```

## cURL Example

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/score_card \
  --header 'Authorization: Bearer {TOKEN}' \
  --header 'Content-Type: application/json' \
  --data '{
    "points": 1
  }'
```
