# Get Available Lenders

## Endpoint Information

**Description:** Retrieve a list of all available lenders in the Lendflow network

**HTTP Method:** `GET`

**URL Path:** `/api/v2/lenders`

## Request

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Default: 1 |
| `per_page` | integer | No | Number of results per page. Default: 15 |
| `search` | string | No | Search lenders by name or ID |
| `status` | string | No | Filter by lender status (active, inactive) |

### cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/lenders \
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
      "id": "lender_1",
      "name": "Lender One",
      "description": "Premium lending partner",
      "status": "active",
      "contact_email": "contact@lender1.com",
      "contact_phone": "+1-555-0123",
      "website": "https://www.lender1.com",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-12-01T00:00:00Z"
    },
    {
      "id": "lender_2",
      "name": "Lender Two",
      "description": "Alternative lending solutions",
      "status": "active",
      "contact_email": "contact@lender2.com",
      "contact_phone": "+1-555-0124",
      "website": "https://www.lender2.com",
      "created_at": "2023-02-01T00:00:00Z",
      "updated_at": "2023-12-01T00:00:00Z"
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
    "per_page": 15,
    "to": 2,
    "total": 2
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object[] | Array of lender objects |
| `data[].id` | string | Unique identifier for the lender |
| `data[].name` | string | Name of the lender |
| `data[].description` | string | Description of the lender |
| `data[].status` | string | Current status (active, inactive) |
| `data[].contact_email` | string | Primary contact email |
| `data[].contact_phone` | string | Primary contact phone number |
| `data[].website` | string | Lender website URL |
| `data[].created_at` | timestamp | Creation timestamp |
| `data[].updated_at` | timestamp | Last update timestamp |
| `links` | object | Pagination links |
| `meta` | object | Pagination metadata |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
