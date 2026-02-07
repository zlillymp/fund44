# Get a Data Orchestration Log for an Application

## Endpoint Details

**Endpoint Name:** Get a Data Orchestration Log for an Application

**Description:** Retrieve a specific data orchestration log for a given application using the log ID.

**HTTP Method:** GET

**URL Path:** `/api/v2/applications/{application_id}/data_orch/{log_id}`

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
| log_id | integer | Yes | The ID of the log. |

## Request

This is a GET request with no body parameters.

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object | The data orchestration log object. |

### Response Fields

The data orchestration log object contains:

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
  "data": {
    "id": null,
    "outcome": null,
    "internal_error": null,
    "status": 1,
    "created_at": null,
    "started_at": null,
    "finished_at": null,
    "master_status": null
  }
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/data_orch/{log_id} \
  --header 'Authorization: Bearer {TOKEN}'
```
