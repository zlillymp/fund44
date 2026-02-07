# Refresh Access Token

## Overview

This endpoint creates a fresh token for the user. The API enforces a 2-hour expiration on tokens for security purposes. This endpoint allows you to obtain a new token without requiring the user to log in again, as long as the current token is still valid. When refreshing a token, the IAT (Issued At) claim is retained from the original token.

## Endpoint Details

**HTTP Method:** `POST`

**URL Path:** `/api/v1/auth/refresh`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v1/auth/refresh`

## Authorization

**Type:** Bearer Token

**Location:** Header

**Required:** Yes

**Format:** `Authorization: Bearer [YOUR_TOKEN]`

Lendflow uses API Bearer Tokens to permit access to our API. The token being refreshed must still be valid (not yet expired). You can register for a new Lendflow API token from the client portal at https://app.lendflow.com/login. You must replace [YOUR_TOKEN] with your personal API key.

## Request Example

### cURL

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v1/auth/refresh \
  --header 'Authorization: Bearer <token>'
```

## Response

**Status Code:** `200 OK`

**Content-Type:** `application/json`

### Response Schema

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
- **Description:** The new Bearer Token to use for subsequent API requests.
- **Usage:** Include this token in the Authorization header as `Authorization: Bearer {access_token}`
- **Example:** `"YOUR_BEARER_TOKEN"`

#### token_type

- **Type:** `string`
- **Description:** The type of token returned (always "bearer" for this endpoint).
- **Example:** `"bearer"`

#### expires_in

- **Type:** `integer`
- **Description:** The number of seconds until the new token expires. Default is 7200 seconds (2 hours).
- **Example:** `7200`

## Token Refresh Behavior

- **IAT Retention**: When refreshing a token, the IAT (Issued At) claim from the original token is retained in the new token
- **Expiration**: All refreshed tokens have a 2-hour (7200 seconds) validity period
- **Single Refresh**: You can only refresh a token while it is still valid; expired tokens cannot be refreshed
- **New Authentication**: If a token has expired, you must obtain a new token using the Get Bearer Token endpoint with your credentials

## Usage Recommendations

1. **Proactive Refresh**: Refresh tokens before they expire to maintain uninterrupted access
2. **Token Lifecycle**: Monitor the `expires_in` value and schedule refreshes accordingly
3. **Error Handling**: If a token refresh returns a 401 Unauthorized, the token has expired and you must re-authenticate
4. **Background Refresh**: For long-running applications, implement a background process to refresh tokens before expiration

## Error Responses

- **401 Unauthorized**: The provided token is invalid or has expired. Re-authenticate using Get Bearer Token.
- **400 Bad Request**: The request is malformed or missing the Authorization header.

## Security Considerations

- Never share your Bearer Token with others
- Store refreshed tokens securely
- Always use HTTPS when transmitting tokens
- Implement token refresh logic before expiration to avoid interruptions
- Use the new token immediately after refresh; the old token may still be valid until its expiration

## Rate Limiting

Token refresh requests may be subject to rate limiting. If you receive too many refresh requests in a short period, you may be temporarily rate-limited.

## Related Endpoints

- [Get Bearer Token](get-bearer-token.md) - Obtain a new token with credentials
- [Get User Details](get-user-details.md) - Retrieve authenticated user information
