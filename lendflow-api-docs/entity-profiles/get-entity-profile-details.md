# Get Entity Profile Details

## Endpoint Information

**Description:** Retrieve detailed information about a specific entity profile

**HTTP Method:** `GET`

**URL Path:** `/api/v2/entity-profiles/{entity_id}`

## Request

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `entity_id` | string | Yes | The ID of the entity profile to retrieve. |

### Headers

| Header | Type | Required | Description |
|--------|------|----------|-------------|
| `Authorization` | string | Yes | Bearer token for API authentication. Format: `Authorization: Bearer [YOUR_TOKEN]` |

### cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/entity-profiles/{entity_id} \
  --header 'Authorization: Bearer <token>'
```

## Response

### Status Code: 200

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": "entity_1",
    "type": "individual",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "+1-555-0100",
    "ssn": "***-**-1234",
    "date_of_birth": "1980-01-01",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "postal_code": "10001",
      "country": "US"
    },
    "status": "active",
    "attributes": [],
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-12-01T00:00:00Z"
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | The entity profile object |
| `data.id` | string | Unique identifier for the entity |
| `data.type` | string | Entity type (individual or business) |
| `data.first_name` | string | First name (for individuals) |
| `data.last_name` | string | Last name (for individuals) |
| `data.email` | string | Email address |
| `data.phone` | string | Phone number |
| `data.ssn` | string | Social security number (masked) |
| `data.date_of_birth` | date | Date of birth |
| `data.address` | object | Address information |
| `data.address.street` | string | Street address |
| `data.address.city` | string | City |
| `data.address.state` | string | State/Province |
| `data.address.postal_code` | string | Postal/ZIP code |
| `data.address.country` | string | Country code |
| `data.status` | string | Entity status (active, inactive) |
| `data.attributes` | object[] | Custom attributes associated with the entity |
| `data.created_at` | timestamp | Creation timestamp |
| `data.updated_at` | timestamp | Last update timestamp |

## Authorization

Lendflow uses API Bearer Tokens to permit access to the API. You can register for a new Lendflow API key in the [client portal](https://app.lendflow.com/login) in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer [YOUR_TOKEN]
```

You must replace `[YOUR_TOKEN]` with your personal API key.
