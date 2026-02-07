# Data Providers API Endpoints

This section contains endpoints for external data provider integration and availability checks.

## Base URL
```
https://api.lendflow.com/api/v2
```

## Authentication
All requests require Bearer token authentication:
```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Service Availability

| Endpoint | HTTP Method | Path | Description |
|----------|------------|------|-------------|
| Experian Service Availability | GET | `/service_availability/experian` | Check if Lendflow's Experian service integration is available |

## Experian Service Availability

### Request
```bash
curl -X GET https://api.lendflow.com/api/v2/service_availability/experian \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json'
```

### Response (200 - Success)
```json
{
  "data": {
    "experian_available": true,
    "message": "Experian is currently available."
  }
}
```

### Response (503 - Unavailable)
```json
{
  "data": {
    "experian_available": false,
    "message": "Experian is currently unavailable."
  }
}
```

## Use Cases

### Check Before Making Experian Calls
Use this endpoint to verify that Experian services are available before making enrichment or verification calls that depend on Experian data.

```bash
# Check service availability
curl -X GET https://api.lendflow.com/api/v2/service_availability/experian \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json'

# If available, proceed with Experian enrichment calls
```

## Error Handling
Standard HTTP status codes are used:
- `200`: Service is available
- `503`: Service is temporarily unavailable
- `401`: Unauthorized
- `500`: Internal Server Error

## Rate Limiting
Check response headers for rate limit information.

---

For detailed endpoint documentation, see individual endpoint files in this directory.
