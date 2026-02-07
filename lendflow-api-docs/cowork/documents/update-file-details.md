# Update file details

## Endpoint Description

Update the details/metadata of an existing file associated with an application.

## Request

### HTTP Method & Path
```
PUT /api/v2/applications/{application_id}/files/{id}
```

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| application_id | string | Yes | The ID of the application |
| id | integer | Yes | The ID of the file |

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
  "type": "architects"
}
```

**Parameter Details:**
- **type** (enum string | null): The new file type classification

**Available file type options:**
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
- bank_statements_11
- bank_statements_13
- bop_report
- bpr_report
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
- verification_doc
- xlsx_cfa_data
- architects

## cURL Example

```bash
curl --request PUT \
  --url 'https://api.lendflow.com/api/v2/applications/{application_id}/files/{id}' \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "type": "architects"
  }'
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
    "file_size": 6588427,
    "type": 5,
    "created_at": null,
    "updated_at": null,
    "exstatus": null,
    "offer_stip_id": null,
    "application_stip_id": null,
    "stip_name": null
  }
}
```

**Response Fields:**
- **data** (object): Updated file information
  - **id** (string | null): Unique file identifier
  - **mime_type** (string): MIME type of the file (e.g., "image/png")
  - **original_name** (string): Original filename
  - **file_url** (string): URL to access the file
  - **file_type** (string | null): Additional file type information
  - **file_size** (number): File size in bytes
  - **type** (number): Document type code
  - **created_at** (string | null): Creation timestamp
  - **updated_at** (string | null): Last update timestamp
  - **exstatus** (string | null): External status
  - **offer_stip_id** (string | null): Associated offer stipulation ID
  - **application_stip_id** (string | null): Associated application stipulation ID
  - **stip_name** (string | null): Stipulation name

## Related Endpoints

- [Retrieve All Application Files](./retrieve-all-application-files.md)
- [Upload Application Files](./upload-application-files.md)
- [Download a File](./download-a-file.md)
