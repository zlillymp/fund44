# Upload Application Files

## Endpoint Description

Upload one or more files/documents for an application using multipart form data.

## Request

### HTTP Method & Path
```
POST /api/v2/applications/{application_id}/files
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

**Content-Type**: `multipart/form-data`

**Parameters:**
- **file_type** (enum string, required): The type of file being uploaded

**Available file_type options:**
- adverse_media_report
- application_stip
- bank_statements
- bank_statements_4
- bank_statements_8
- bank_statements_12
- bank_statements_2
- bank_statements_1
- bank_statements_7
- bank_statements_6
- bank_statements_3
- bank_statements_9
- bank_statements_10
- bop_report
- call_recording
- contract
- contract_template
- debt_schedule
- drivers_license_back
- drivers_license_front
- email_footer_image
- email_header_image
- email_logo
- financial_document_2
- financial_document_8
- financial_document_4
- financial_document_3
- financial_document_1
- financial_document_10
- financial_document_11
- financial_document_12
- financial_document_5
- financial_document_7
- financial_document_9
- funder_logo
- fundera_other_document
- funding_invoice
- funding_invoice_purchase_order
- funding_ira_form_sae_ein
- funding_payoff_balance_letter
- funding_proof_of_ownership
- funding_voided_check
- id_document
- inquiries
- insurance_certificate
- irs_application
- widget_logo
- offer_slip
- other
- payroll_report
- payroll_report_1
- payroll_report_2
- payroll_report_3
- raised_statement
- raw_cfa_data
- recovered_document
- risk_inform_report
- signed_doc
- tax_exemption
- insurance_certificate
- verification_doc
- xlsx_cfa_data

**Additional Parameters (form fields):**
- **file_typesrb_report** (optional)
- **files** (file, binary): The file(s) to upload
- **offer_stip_id** (optional)
- **application_stip_id** (optional)
- **owner_id** (optional)
- **product_id** (optional)

## cURL Example

```bash
curl --request POST \
  --url 'https://api.lendflow.com/api/v2/applications/{application_id}/files' \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: multipart/form-data' \
  --form 'file_type=tax_exemption' \
  --form 'files=@example-file'
```

## Response

### Success Response (200)

**Content-Type**: `application/json`

```json
{
  "data": {
    "id": null,
    "mime_type": "image/png",
    "original_name": "a4856ce5-8acb-13c1-b921-f6251f719ca8",
    "file_url": "",
    "file_type": null,
    "type": 5,
    "file_size": 6468437,
    "created_at": null,
    "updated_at": null,
    "product_id": null
  }
}
```

**Response Fields:**
- **data** (object): Uploaded file information
  - **id** (string | null): Unique file identifier
  - **mime_type** (string): MIME type of the file (e.g., "image/png")
  - **original_name** (string): Original filename
  - **file_url** (string): URL to access the file
  - **file_type** (string | null): Additional file type information
  - **type** (number): Document type code
  - **file_size** (number): File size in bytes
  - **created_at** (string | null): Creation timestamp
  - **updated_at** (string | null): Last update timestamp
  - **product_id** (string | null): Associated product ID

## Related Endpoints

- [Retrieve All Application Files](./retrieve-all-application-files.md)
- [Update file details](./update-file-details.md)
- [Download a File](./download-a-file.md)
