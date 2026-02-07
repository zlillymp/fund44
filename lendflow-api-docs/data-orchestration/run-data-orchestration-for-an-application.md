# Run Data Orchestration for an Application

## Endpoint Details

**Endpoint Name:** Run Data Orchestration for an Application

**Description:** Run data orchestration given a specific template ID and application ID.

**HTTP Method:** POST

**URL Path:** `/api/v2/data_orchestration/execute`

## Authorization

**Authorization Type:** Bearer Token (Required)

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key on the client portal in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer {YOUR_TOKEN}
```

You must replace `{YOUR_TOKEN}` with your personal API key.

## Path Parameters

None

## Request Body

**Content-Type:** application/json

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| template_id | string | Yes | The ID of an existing record in the data_orchestration_templates table. |
| application_id | string | Yes | The ID of an existing record in the applications table. |

### Body Example

```json
{
  "template_id": "architecto",
  "application_id": "architecto"
}
```

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object | The response data object containing orchestration execution details. |

### Response Fields

The response data object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the execution. |
| outcome | string/null | The outcome of the execution. |
| internal_error | string/null | Any internal error messages. |
| status | integer | The status code of the operation. |
| created_at | string/null | Timestamp when the execution was created. |
| started_at | string/null | Timestamp when the execution started. |
| finished_at | string/null | Timestamp when the execution finished. |
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
curl --request POST \
  --url https://api.lendflow.com/api/v2/data_orchestration/execute \
  --header 'Authorization: Bearer {TOKEN}' \
  --header 'Content-Type: application/json' \
  --data '{
    "template_id": "architecto",
    "application_id": "architecto"
  }'
```
