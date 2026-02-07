# Monthly Revenues

## Endpoint Description

This endpoint allows users to retrieve all the available monthly revenue options/categories from the Lendflow system.

## Request

### HTTP Method & Path
```
GET /api/v2/monthly_revenues
```

### Authorization
**Required**: Bearer Token
```
Authorization: Bearer <token>
```

Lendflow uses API Bearer Tokens to permit access to our API. You can register for a new Lendflow API key on our client portal in less than 60 seconds. The Bearer Token needs to be included in all API requests made to the API Service in the following form:

```
Authorization: Bearer {YOUR_TOKEN}
```

Replace `{YOUR_TOKEN}` with your personal API key.

## cURL Example

```bash
curl --request GET \
  --url https://api.lendflow.com/api/v2/monthly_revenues \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

**Content-Type**: `application/json`

```json
{
  "data": [
    {
      "key": null,
      "range": null
    },
    {
      "key": null,
      "range": null
    }
  ]
}
```

**Response Fields:**
- **data** (object[]): Array of monthly revenue options
  - **key** (string | null): Internal identifier for the revenue range
  - **range** (string | null): Display-friendly representation of the revenue range

## Notes

This is a read-only endpoint that returns the available options for monthly revenue categories that can be used when creating or updating pre-qualifications. The key values returned should be used in other endpoints when specifying monthly average revenue.

## Related Endpoints

- [Pre-Qualification](./pre-qualification.md)
- [Create a Pre-Qualification](./create-a-pre-qualification.md)
- [Save Application Funds](./save-application-funds.md)
