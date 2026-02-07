# Authentication API Endpoints

This section contains all API endpoints for managing authentication and authorization in the Lendflow system.

## Endpoints Overview

### 1. Get Bearer Token
- **HTTP Method:** `POST`
- **URL Path:** `/api/v1/auth/login`
- **Description:** Obtain a Bearer Token based on provided login credentials (email and password). This token is required for authentication in all other API endpoints.
- **File:** `get-bearer-token.md`

### 2. Get User Details
- **HTTP Method:** `GET`
- **URL Path:** `/api/v1/auth/me`
- **Description:** Retrieve the authenticated user's personal information and account details.
- **File:** `get-user-details.md`

### 3. Refresh Access Token
- **HTTP Method:** `POST`
- **URL Path:** `/api/v1/auth/refresh`
- **Description:** Create a fresh token for the user. Tokens expire after 2 hours. This endpoint allows obtaining a new token without re-authenticating as long as the current token is still valid.
- **File:** `refresh-access-token.md`

## Common Authentication Information

### Authorization

All Lendflow API endpoints (except Get Bearer Token) require Bearer Token authentication in the Authorization header:

```
Authorization: Bearer [YOUR_TOKEN]
```

### Base URL

All endpoints use the following base URL:

```
https://api.lendflow.com
```

### Token Lifecycle

1. **Obtaining a Token**: Use the Get Bearer Token endpoint with your email and password
2. **Using a Token**: Include it in the Authorization header for all API requests
3. **Token Expiration**: Tokens expire after 2 hours (7200 seconds)
4. **Refreshing a Token**: Use the Refresh Access Token endpoint before expiration
5. **Re-authentication**: If a token expires, use Get Bearer Token again

### Token Expiration and Refresh

- **Token Validity**: 2 hours (7200 seconds)
- **Refresh Strategy**: Proactively refresh tokens before expiration
- **Expired Token Behavior**: Cannot be refreshed; must re-authenticate with credentials
- **Active Token Refresh**: Can only refresh tokens that haven't expired yet

## Getting Started with Authentication

### Step 1: Obtain a Bearer Token

Send a POST request to the Get Bearer Token endpoint with your credentials:

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v1/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
  "email": "your-email@example.com",
  "password": "your-password"
}'
```

Response:
```json
{
  "access_token": "YOUR_BEARER_TOKEN",
  "token_type": "bearer",
  "expires_in": 7200
}
```

### Step 2: Use the Bearer Token

Include the token in the Authorization header for all subsequent requests:

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v1/auth/me \
  --header 'Authorization: Bearer YOUR_BEARER_TOKEN'
```

### Step 3: Refresh Before Expiration

Before 2 hours elapse, refresh the token:

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v1/auth/refresh \
  --header 'Authorization: Bearer YOUR_BEARER_TOKEN'
```

## Response Format

All authentication endpoints return JSON responses with consistent formatting:

### Successful Token Response

```json
{
  "access_token": "token_string",
  "token_type": "bearer",
  "expires_in": 7200
}
```

### User Details Response

```json
{
  "data": {
    "id": "user_id",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "+1-555-123-4567",
    "company_name": "Example Corp",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "US",
    "is_admin": false,
    "credit_balance": 100
  }
}
```

## Security Best Practices

1. **Credential Storage**: Never hardcode credentials in your application
2. **Token Security**: Keep Bearer Tokens confidential and never share them
3. **HTTPS Only**: Always use HTTPS when transmitting credentials or tokens
4. **Token Rotation**: Regularly refresh or rotate tokens for enhanced security
5. **Secure Storage**: Store tokens securely in protected memory or secure storage
6. **Rate Limiting**: Respect rate limits on authentication endpoints
7. **Error Handling**: Don't expose detailed error messages containing sensitive information

## Troubleshooting

### Invalid Credentials
- **Error**: 422 Unprocessable Entity
- **Solution**: Verify email and password are correct

### Token Expired
- **Error**: 401 Unauthorized
- **Solution**: Use Get Bearer Token endpoint to obtain a new token with your credentials

### Token Refresh Failed
- **Error**: 401 Unauthorized when calling Refresh Access Token
- **Solution**: The token has already expired; use Get Bearer Token to re-authenticate

### Too Many Login Attempts
- **Error**: 429 Too Many Requests
- **Solution**: Wait a few minutes before retrying authentication

## API Documentation Links

- [Lendflow API Documentation](https://docs.lendflow.com/api-reference/authentication/get-bearer-token)
- [API Guides](https://docs.lendflow.com/api-docs/docs/introduction)
- [Client Portal](https://app.lendflow.com/login)

## Support

For additional help with authentication, visit:
- Official Documentation: https://docs.lendflow.com
- Support Contact: https://www.lendflow.com/contact-us
