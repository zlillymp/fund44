# Retrieve All Application Files

## Endpoint Description

Retrieve all application files (documents) for a specific application.

## Request

### HTTP Method & Path
```
GET /api/v2/applications/{application_id}/files
```

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| application_id | string | Yes | The ID of the application |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| document_types | integer[] | No | Filter by document types |

**Document Type Values:**
- 1: Tax return
- 2: AP (Accounts Payable)
- 3: Financial statement
- 4: Manually Uploaded Bank Statement
- 5: Offer Slip
- 6: Contract
- 8: Inquiries
- 9: Fraud
- 11: Signed
- 12: Application Slip
- 13: Verification Doc
- 14: Raw CFA Data
- 15: XLSX CFA Data
- 16: Tax Exemption
- 17: Insurance Certificate
- 21: Funding
- 22: Recovered Document
- 24: Risk Inform Report
- 29: ISO
- 26: Adverse Media Report

Example: `[16]`

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
  --url 'https://api.lendflow.com/api/v2/applications/{application_id}/files?document_types=16' \
  --header 'Authorization: Bearer <token>'
```

## Response

### Success Response (200)

**Content-Type**: `application/json`

```json
{
  "data": [
    {
      "id": null,
      "alias_type": "image/png",
      "original_name": "a4856ce5-8acb-13c1-b921-f6251f719ca",
      "file_url": "",
      "file_type": null,
      "type": 5,
      "file_size": 6308637,
      "created_at": null,
      "updated_at": null,
      "product_id": null
    },
    {
      "id": null,
      "alias_type": "image/png",
      "original_name": "a236a8e-3bde-5fe7-bbde-124aa8971dc",
      "file_url": "",
      "file_type": null,
      "type": 5,
      "file_size": 6357656,
      "created_at": null,
      "updated_at": null,
      "product_id": null
    }
  ]
}
```

**Response Fields:**
- **data** (object[]): Array of file objects
  - **id** (string | null): Unique file identifier
  - **alias_type** (string): MIME type of the file (e.g., "image/png")
  - **original_name** (string): Original filename
  - **file_url** (string): URL to access the file
  - **file_type** (string | null): Additional file type information
  - **type** (number): Document type code
  - **file_size** (number): File size in bytes
  - **created_at** (string | null): Creation timestamp
  - **updated_at** (string | null): Last update timestamp
  - **product_id** (string | null): Associated product ID

## Related Endpoints

- [Upload Application Files](./upload-application-files.md)
- [Download a File](./download-a-file.md)
- [Update file details](./update-file-details.md)
