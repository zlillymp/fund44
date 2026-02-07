# List Offer Templates

## Endpoint Details

**Endpoint Name:** List Offer Templates

**Description:** Retrieve a list of all available offer templates.

**HTTP Method:** GET

**URL Path:** `/api/v2/offer_templates`

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
| data | object | A collection of offer templates. |

### Response Fields

The data object contains offer template entries:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the template. |
| name | string | The name of the template (e.g., "Clara [cmhn V""). |
| description | string | Description of the template. |
| product | string | The product type associated with the template. |
| is_enabled | boolean | Whether the template is enabled. |
| is_default | boolean | Whether this is the default template. |
| is_fallback | boolean | Whether this is a fallback template. |
| founder_id | string | The ID of the founder. |
| created_at | string/null | Timestamp when created. |
| updated_at | string/null | Timestamp when last updated. |

### Response Example

```json
{
  "data": {
    "id": null,
    "name": "Clara [cmhn V",
    "description": "Incidunt iste odlit et et modi ipsa.",
    "product": "arlac",
    "is_enabled": true,
    "is_default": false,
    "is_fallback": false,
    "founder_id": "06272f3d-56e4-cfde-aSSc-b03fa608ceH1",
    "created_at": null,
    "updated_at": null
  }
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/offer_templates \
  --header 'Authorization: Bearer {TOKEN}'
```
