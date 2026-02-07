# Run Specific or All Score Cards Against the Application

## Endpoint Details

**Endpoint Name:** Run specific, or all, Score Cards against the application

**Description:** Execute specific or all score cards against a given application.

**HTTP Method:** POST

**URL Path:** `/api/v2/applications/{application_id}/score_card/execute`

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
| score_card_ids | array | No | Array of specific score card IDs to execute. If empty or omitted, all score cards will be executed. |

### Body Example

```json
{
  "score_card_ids": []
}
```

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object | Response data object. |

### Response Example

```json
{
  "data": {}
}
```

## cURL Example

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/score_card/execute \
  --header 'Authorization: Bearer {TOKEN}' \
  --header 'Content-Type: application/json' \
  --data '{
    "score_card_ids": []
  }'
```
