# Update Application Stips

## Endpoint Details

**Endpoint Name:** Update Application Stips

**Description:** Update stipulations (STIPs) for a specific application in the Lendflow system.

**HTTP Method:** PUT

**URL Path:** `/api/v2/applications/{application_id}/stips`

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
| stips | object[] | Yes | Array of stipulation objects to update. |

### Body Example

```json
{
  "stips": []
}
```

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object[] | Array of stipulation objects returned from the update. |

### Response Example

```json
{
  "data": [
    {
      "id": 1,
      "stip_id": 1,
      "name": "UCS docs",
      "description": "",
      "count": 2,
      "file_type": null,
      "files": [],
      "is_finished": false
    },
    {
      "id": 1,
      "stip_id": 1,
      "name": "UCS docs",
      "description": "",
      "count": 2,
      "file_type": null,
      "files": [],
      "is_finished": false
    }
  ]
}
```

## cURL Example

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/stips \
  --header 'Authorization: Bearer {TOKEN}' \
  --header 'Content-Type: application/json' \
  --data '{
    "stips": null
  }'
```
