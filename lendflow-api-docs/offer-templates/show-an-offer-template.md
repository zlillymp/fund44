# Show an Offer Template

## Endpoint Details

**Endpoint Name:** Show an Offer Template

**Description:** Retrieve detailed information about a specific offer template by its ID.

**HTTP Method:** GET

**URL Path:** `/api/v2/offer_templates/{id}`

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
| id | string | Yes | The ID of the offer template. |

## Request

This is a GET request with no body parameters.

## Response

**Status Code:** 200

**Content-Type:** application/json

| Field | Type | Description |
|-------|------|-------------|
| data | object | The offer template details object. |

### Response Fields

The data object contains:

| Field | Type | Description |
|-------|------|-------------|
| id | string/null | The ID of the template. |
| name | string | The name of the template. |
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
    "founder_id": "8ba0f9eb-1c9f-4d27-aaeb-5cdf6b649a4",
    "created_at": null,
    "updated_at": null
  }
}
```

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/offer_templates/{id} \
  --header 'Authorization: Bearer {TOKEN}'
```
