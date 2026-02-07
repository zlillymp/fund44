# Available Data Orchestration Templates

## Endpoint Details

**Endpoint Name:** Available Data Orchestration Templates

**Description:** Lists published data orchestration templates available for use.

**HTTP Method:** GET

**URL Path:** `/api/v2/data_orchestration/templates`

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
| data | object[] | Array of available data orchestration template objects. |

### Response Fields

Each template object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the template. |
| short_id | string/null | A shortened ID of the template. |
| name | string | The name of the template (e.g., "Aut.", "Fst.", "Est."). |
| description | string | Description of the template. |
| workflow | array | Array indicating the workflow of the template (e.g., ["funding"]). |
| trigger | string/null | The trigger for the template. |
| created_at | string/null | Timestamp when the template was created. |
| updated_at | string/null | Timestamp when the template was last updated. |
| deleted_at | string/null | Timestamp when the template was deleted (if applicable). |
| status | integer | The status of the template. |

### Response Example

```json
{
  "data": [
    {
      "id": null,
      "short_id": null,
      "name": "Aut.",
      "description": "Qui commodi incidunt iure odit. Et modi ipsam nostrum.",
      "workflow": ["funding"],
      "trigger": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null,
      "status": 2
    },
    {
      "id": null,
      "short_id": null,
      "name": "Fst.",
      "description": "Odio veritatis excepturi doloribus delectus fugit qui.",
      "workflow": ["funding"],
      "trigger": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null,
      "status": 2
    },
    {
      "id": null,
      "short_id": null,
      "name": "Est.",
      "description": "Odio veritatis excepturi doloribus delectus fugit qui.",
      "workflow": ["funding"],
      "trigger": null,
      "created_at": null,
      "updated_at": null,
      "deleted_at": null,
      "status": 2
    }
  ]
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/data_orchestration/templates \
  --header 'Authorization: Bearer {TOKEN}'
```
