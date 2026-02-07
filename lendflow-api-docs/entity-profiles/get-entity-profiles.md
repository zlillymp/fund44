# Get Entity Profiles

## Endpoint Information

**Description:** Retrieve a list of entity profiles from the system

**HTTP Method:** `GET`

**URL Path:** `/api/v2/entity-profiles`

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
| `search` | string | No | Search entity profiles by name, email, or identifier |
| `type` | string | No | Filter by entity type (individual, business) |
| `status` | string | No | Filter by entity status (active, inactive) |

### cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/entity-profiles \
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
      "id": "entity_1",
      "type": "individual",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@example.com",
      "phone": "+1-555-0100",
      "ssn": "***-**-1234",
      "date_of_birth": "1980-01-01",
      "status": "active",
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-12-01T00:00:00Z"
    },
    {
      "id": "entity_2",
      "type": "business",
      "business_name": "Acme Corp",
      "ein": "12-3456789",
      "email": "info@acmecorp.com",
      "phone": "+1-555-0101",
      "status": "active",
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
| `data` | object[] | Array of entity profile objects |
| `data[].id` | string | Unique identifier for the entity |
| `data[].type` | string | Entity type (individual or business) |
| `data[].first_name` | string | First name (for individuals) |
| `data[].last_name` | string | Last name (for individuals) |
| `data[].business_name` | string | Business name (for businesses) |
| `data[].email` | string | Email address |
| `data[].phone` | string | Phone number |
| `data[].ssn` | string | Social security number (masked) |
| `data[].ein` | string | Employer identification number |
| `data[].status` | string | Entity status (active, inactive) |
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
