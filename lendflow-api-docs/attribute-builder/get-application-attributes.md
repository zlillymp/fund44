# Get Application Attributes

## Endpoint Information

**Description:** Retrieve attributes for a specific application

**HTTP Method:** `GET`

**URL Path:** `/api/v2/applications/{application_id}/attributes`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `application_id` | string | Yes | The ID of the application. |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |

### cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/attributes \
  --header 'Authorization: Bearer <token>'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": [
    {
      "id": null,
      "value": null,
      "source": null,
      "error": null,
      "application_id": null,
      "attribute": null,
      "updated_at": null,
      "created_at": null
    }
  ],
  "links": {
    "first": "/?page=1",
    "last": "/?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "/?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "/",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object[] | Array of attribute objects for the application |
| `data[].id` | string/null | Attribute ID |
| `data[].value` | null | Attribute value |
| `data[].source` | null | Source of the attribute |
| `data[].error` | null | Any error associated with the attribute |
| `data[].application_id` | string/null | Associated application ID |
| `data[].attribute` | string/null | Attribute name/type |
| `data[].updated_at` | timestamp/null | Last update timestamp |
| `data[].created_at` | timestamp/null | Creation timestamp |
| `links` | object | Pagination links |
| `links.first` | string | Link to first page |
| `links.last` | string | Link to last page |
| `links.prev` | string/null | Link to previous page |
| `links.next` | string/null | Link to next page |
| `meta` | object | Pagination metadata |
| `meta.current_page` | integer | Current page number |
| `meta.from` | integer | Starting result number |
| `meta.last_page` | integer | Last page number |
| `meta.per_page` | integer | Results per page |
| `meta.to` | integer | Ending result number |
| `meta.total` | integer | Total number of results |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
