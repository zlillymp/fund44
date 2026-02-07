# Save Application Funds

## Endpoint Description

Save information about the intended use of funds for an application.

## Request

### HTTP Method & Path
```
PUT /api/v2/applications/{application_id}/fund
```

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| application_id | string | Yes | The ID of the application |

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

### Request Body

**Content-Type**: `application/json`

```json
{
  "use_of_fund": "Expand business",
  "funds_needed_time": "1 - 2 weeks",
  "docusign_placeholder_id": null,
  "contract_template_id": null
}
```

**Parameter Details:**
- **use_of_fund** (string, required): The intended use of the funds
  - Valid values: "Expand business", "Import goods", "Improve cash flow", "Other", "Pay taxes", "Payroll", "Promote business", "Purchase a vehicle", "Purchase equipment", "Purchase inventory", "Purchase real estate", "Remodel"
  - The key references an existing record in the use_of_funds table

- **funds_needed_time** (string, required): Timeline for when funds are needed
  - Valid values: "1 - 2 weeks", "31 - 90 days", "Immediately", "I'm not sure", "Longer than 90 days"
  - The key references an existing record in the funds_needed_times table

- **docusign_placeholder_id** (string, optional): The ID of an existing record in the docusign_placeholders table

- **contract_template_id** (string, optional): The ID of a contract template

## cURL Example

```bash
curl --request PUT \
  --url https://api.lendflow.com/api/v2/applications/{application_id}/fund \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "use_of_fund": "Expand business",
    "funds_needed_time": "1 - 2 weeks",
    "docusign_placeholder_id": null,
    "contract_template_id": null
  }'
```

## Response

### Success Response (200)

**Content-Type**: `application/json`

```json
{
  "docusign_link": "https://example/link",
  "valid_time_token": "token"
}
```

**Response Fields:**
- **docusign_link** (string): URL for DocuSign document signing
- **valid_time_token** (string): Time-limited token for the DocuSign link

## Related Endpoints

- [Pre-Qualification](./pre-qualification.md)
- [Create a Pre-Qualification](./create-a-pre-qualification.md)
- [Monthly Revenues](./monthly-revenues.md)
