# Get Bearer Token

## Overview

This endpoint allows users to obtain a Bearer Token based on provided login credentials. The Bearer Token is required for authentication in all other API endpoints.

## Endpoint Details

**HTTP Method:** `POST`

**URL Path:** `/api/v1/auth/login`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v1/auth/login`

## Request Body

**Content-Type:** `application/json`

### Body Parameters

#### email

- **Type:** `string`
- **Required:** Yes
- **Description:** Valid email address for the user account.
- **Validation:** Must be a valid email address format.
- **Example:** `"gbailey@example.net"`

#### password

- **Type:** `string`
- **Required:** Yes
- **Description:** Password for the user account.
- **Example:** `"Asdf1234!?"`

## Request Example

### cURL

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v1/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "gbailey@example.net",
  "password": "Asdf1234!?"
}'
```

## Response

### Success Response

**Status Code:** `200 OK`

**Content-Type:** `application/json`

```json
{
  "access_token": "YOUR_BEARER_TOKEN",
  "token_type": "bearer",
  "expires_in": 7200
}
```

### Response Fields

#### access_token

- **Type:** `string`
- **Description:** The Bearer Token to be used for authentication in subsequent API requests.
- **Usage:** Include this token in the Authorization header as `Authorization: Bearer {access_token}`
- **Example:** `"YOUR_BEARER_TOKEN"`

#### token_type

- **Type:** `string`
- **Description:** The type of token returned (always "bearer" for this endpoint).
- **Example:** `"bearer"`

#### expires_in

- **Type:** `integer`
- **Description:** The number of seconds until the token expires. Default is 7200 seconds (2 hours).
- **Example:** `7200`

### Error Response

**Status Code:** `422 Unprocessable Entity`

Returned when invalid credentials are provided (incorrect email or password).

## Token Usage

Once obtained, use the Bearer Token in all subsequent API requests:

```
Authorization: Bearer YOUR_BEARER_TOKEN
```

## Token Expiration

- Tokens expire after the time specified in `expires_in` (typically 2 hours).
- When a token expires, you must obtain a new one by calling this endpoint again.
- Alternatively, you can use the Refresh Access Token endpoint to extend the token validity.

## Security Considerations

- Never share your Bearer Token with others
- Store tokens securely and do not expose them in client-side code
- Always use HTTPS when transmitting credentials
- Regularly refresh or rotate tokens for security
- If a token is compromised, immediately generate a new one by logging in again

## Rate Limiting

Authentication requests may be subject to rate limiting. If you receive too many failed attempts, you may be temporarily locked out.

## Related Endpoints

- [Get User Details](get-user-details.md) - Retrieve authenticated user information
- [Refresh Access Token](refresh-access-token.md) - Extend token validity without re-authenticating
