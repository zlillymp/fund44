# Lender Network API

The Lender Network API provides access to the Lendflow lender network, enabling you to manage and retrieve lender information and availability.

## Overview

The Lender Network API allows you to:

- Retrieve available lenders in the Lendflow network
- Query lender capabilities and requirements
- Check lender availability for specific loan products
- Access lender terms and conditions

## Base URL

```
https://api.lendflow.com/api/v2
```

## Authentication

All Lender Network API endpoints require Bearer token authentication. Include your token in the Authorization header:

```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Lender Information

- Get Available Lenders - Retrieve list of all available lenders in the network
- Get Lender Details - Retrieve detailed information about a specific lender
- Get Lender Products - Get the loan products offered by a specific lender
- Get Lender Requirements - Get the requirements and eligibility criteria for a lender

## Quick Start

### Retrieve Available Lenders

Get a list of all available lenders in the network:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/lenders \
  --header 'Authorization: Bearer <token>'
```

## Common Parameters

### Authorization Header

**Type:** string
**Required:** Yes

The Bearer token for API authentication. Register for a new API key at the [client portal](https://app.lendflow.com/login).

## Response Format

All API responses are returned in JSON format. Successful responses (2xx status codes) include a `data` field containing the requested information.

```json
{
  "data": { ... }
}
```

## Error Handling

Errors are returned with appropriate HTTP status codes and include error details in the response body.

## Rate Limiting

Please contact Lendflow support for information about rate limiting policies.

## Support

For API support and questions, please contact Lendflow through the [client portal](https://app.lendflow.com/login) or visit the support section of the documentation.
