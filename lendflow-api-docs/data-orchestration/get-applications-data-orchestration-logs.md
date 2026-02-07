# Get Application's Data Orchestration Logs

## Endpoint Details

**Endpoint Name:** Get Application's Data Orchestration Logs

**Description:** Fetch the latest data orchestration logs for the given application.

**HTTP Method:** GET

**URL Path:** `/api/v2/applications/{application_id}/data_orch`

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
| data | object[] | Array of data orchestration log objects. |

### Response Fields

Each data orchestration log object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the log. |
| outcome | string/null | The outcome of the data orchestration run. |
| internal_error | string/null | Any internal error messages. |
| status | integer | The status code of the operation. |
| created_at | string/null | Timestamp when the log was created. |
| started_at | string/null | Timestamp when the data orchestration started. |
| finished_at | string/null | Timestamp when the data orchestration finished. |
| master_status | string/null | The master status of the operation. |

### Response Example

```json
{
  "data": [
    {
      "id": null,
      "outcome": null,
      "internal_error": null,
      "status": 1,
      "created_at": null,
      "started_at": null,
      "finished_at": null,
      "master_status": null
    },
    {
      "id": null,
      "outcome": null,
      "internal_error": null,
      "status": 1,
      "created_at": null,
      "started_at": null,
      "finished_at": null,
      "master_status": null
    }
  ]
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/data_orch \
  --header 'Authorization: Bearer {TOKEN}'
```
