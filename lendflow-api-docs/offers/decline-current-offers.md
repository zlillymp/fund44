# Decline Current Offers

## Overview

An applicant can decline all current offers for the application. This will send an email notification to the lender including the applicant's feedback regarding the offer decline.

## Endpoint Details

**HTTP Method:** `POST`

**URL Path:** `/api/v2/applications/{application_id}/decline-offers`

**Base URL:** `https://api.lendflow.com`

**Full URL:** `https://api.lendflow.com/api/v2/applications/{application_id}/decline-offers`

## Authorization

**Type:** Bearer Token

**Location:** Header

**Required:** Yes

**Format:** `Authorization: Bearer [YOUR_TOKEN]`

Lendflow uses API Bearer Tokens to permit access to our API. You can register for a new Lendflow API token from the client portal at https://app.lendflow.com/login. You must replace [YOUR_TOKEN] with your personal API key.

## Path Parameters

### application_id

- **Type:** `string`
- **Required:** Yes
- **Description:** The ID of the application.

## Request Body

**Content-Type:** `application/json`

### Body Parameters

#### feedback

- **Type:** `string`
- **Required:** Yes
- **Description:** Feedback from the applicant regarding why they are declining the offers.
- **Example:** `"Here is some example feedback."`

## Request Example

### cURL

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/decline-offers \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "feedback": "Here is some example feedback."
}'
```

## Response

**Status Code:** `204 No Content`

**Description:** Feedback was received and processed successfully.

### Response Example

```
HTTP/1.1 204 No Content
```

When successful, this endpoint returns an HTTP 204 No Content response with no body. The decline has been recorded and the lender has been notified via email.

## Notes

- This endpoint marks all current offers as declined for the application
- An email notification is automatically sent to the lender with the applicant's feedback
- The feedback field is required to provide context for the decline
- A 403 Forbidden response may be returned if the user does not have permission to decline offers or if offers have already been declined
