# Get User Details

## Overview

This endpoint allows a user to retrieve their personal information from the Lendflow system.

## Endpoint Details

**HTTP Method:** `GET`

**URL Path:** `/api/v1/auth/me`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v1/auth/me`

## Authorization

**Type:** Bearer Token

**Location:** Header

**Required:** Yes

**Format:** `Authorization: Bearer [YOUR_TOKEN]`

Lendflow uses API Bearer Tokens to permit access to our API. You can register for a new Lendflow API token from the client portal at https://app.lendflow.com/login. You must replace [YOUR_TOKEN] with your personal API key.

## Request Example

### cURL

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v1/auth/me \
  --header 'Authorization: Bearer <token>'
```

## Response

**Status Code:** `200 OK`

**Content-Type:** `application/json`

### Response Schema

```json
{
  "data": {
    "id": null,
    "first_name": "Morgan",
    "last_name": "Hirthe",
    "email": "704326c868c6d-85fb-3170-87f4-2bdcd8769991@example.com",
    "pending_email": null,
    "widget_token": null,
    "created_at": null,
    "phone": "+1714-123-4567",
    "website": null,
    "stripe_customer_id": null,
    "billing_name": "Morgan Hirthe",
    "address": "123 Main Street",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90001",
    "country": "US",
    "is_admin": false,
    "credit_balance": 0,
    "company_name": "Example Company"
  }
}
```

## Response Fields

### data

- **Type:** `object`
- **Description:** User information object containing personal and account details.

**Nested Fields:**

#### id

- **Type:** `string | null`
- **Description:** Unique identifier for the user.

#### first_name

- **Type:** `string`
- **Description:** User's first name.
- **Example:** `"Morgan"`

#### last_name

- **Type:** `string`
- **Description:** User's last name.
- **Example:** `"Hirthe"`

#### email

- **Type:** `string`
- **Description:** User's primary email address.
- **Example:** `"user@example.com"`

#### pending_email

- **Type:** `string | null`
- **Description:** Email address pending verification if user has requested an email change.

#### widget_token

- **Type:** `string | null`
- **Description:** Token for embedded widget access if applicable.

#### created_at

- **Type:** `string | null`
- **Description:** Timestamp when the account was created.

#### phone

- **Type:** `string | null`
- **Description:** User's phone number.
- **Example:** `"+1714-123-4567"`

#### website

- **Type:** `string | null`
- **Description:** User's website URL if provided.

#### stripe_customer_id

- **Type:** `string | null`
- **Description:** Stripe customer ID associated with the user account.

#### billing_name

- **Type:** `string`
- **Description:** Name to use for billing purposes.
- **Example:** `"Morgan Hirthe"`

#### address

- **Type:** `string`
- **Description:** Street address for billing.
- **Example:** `"123 Main Street"`

#### city

- **Type:** `string`
- **Description:** City for billing address.
- **Example:** `"Los Angeles"`

#### state

- **Type:** `string`
- **Description:** State or province for billing address.
- **Example:** `"CA"`

#### zip

- **Type:** `string`
- **Description:** ZIP or postal code for billing address.
- **Example:** `"90001"`

#### country

- **Type:** `string`
- **Description:** Country code for billing address.
- **Example:** `"US"`

#### is_admin

- **Type:** `boolean`
- **Description:** Whether the user has administrative privileges.
- **Example:** `false`

#### credit_balance

- **Type:** `number`
- **Description:** Current credit balance in the user's account.
- **Example:** `0`

#### company_name

- **Type:** `string`
- **Description:** Name of the company associated with the user account.
- **Example:** `"Example Company"`

## Usage Notes

- This endpoint requires valid authentication with an active Bearer Token
- The returned data reflects the current state of the user's profile
- Some fields may be null if not provided during account setup
- To update user information, use the appropriate update endpoint if available

## Related Endpoints

- [Get Bearer Token](get-bearer-token.md) - Obtain authentication token
- [Refresh Access Token](refresh-access-token.md) - Extend token validity
