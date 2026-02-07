# Get Required Stips for Single Offer

## Endpoint Details

**Endpoint Name:** Get required stips for single offer

**Description:** Retrieve the required stipulations (STIPs) for a specific offer.

**HTTP Method:** GET

**URL Path:** `/api/v2/offers/{offer_id}/required`

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
| offer_id | string | Yes | The ID of the offer. |

## Request

This is a GET request with no body parameters.

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object[] | Array of required stipulation objects for the offer. |

### Response Fields

Each stipulation object in the data array contains:

| Field | Type | Description |
|-------|------|-------------|
| id | integer | The ID of the stipulation requirement. |
| stip_id | integer | The ID of the stip. |
| name | string | The name of the stipulation. |
| description | string | The description of the stipulation. |
| count | integer | The count of items related to this stipulation. |
| file_type | string/null | The type of files required, if any. |
| files | array | Array of files associated with this stipulation. |
| is_finished | boolean | Whether this stipulation has been completed. |

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
curl --request GET \
  --url https://api.lendflow.com/api/v2/offers/{offer_id}/required \
  --header 'Authorization: Bearer {TOKEN}'
```
