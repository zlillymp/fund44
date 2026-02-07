# Restart Data Orchestration as Pass Outcome

## Endpoint Details

**Endpoint Name:** Restart Data Orchestration as Pass Outcome

**Description:** Restart a data orchestration process and mark it as a pass outcome.

**HTTP Method:** PUT

**URL Path:** `/api/v2/data_orchestration/{log_id}/continue_pass`

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
| log_id | integer | Yes | The ID of the log. |

## Request Body

**Content-Type:** application/json

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| application_id | string | Yes | The ID of an existing record in the applications table. |
| comment | string | No | An optional comment string. |

### Body Example

```json
{
  "application_id": "architecto",
  "comment": "architecto"
}
```

## Response

**Status Code:** 202 or 422

**Content-Type:** application/json

The response is of type object.

### Response Example

```json
{}
```

## cURL Example

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/data_orchestration/{log_id}/continue_pass \
  --header 'Authorization: Bearer {TOKEN}' \
  --header 'Content-Type: application/json' \
  --data '{
    "application_id": "architecto",
    "comment": "architecto"
  }'
```

## Status Codes

- **202 Accepted:** The request has been accepted for processing.
- **422 Unprocessable Entity:** Validation error or invalid request data.
