# Categorize and Upload Multiple Application Files

## Endpoint Description

Upload and categorize multiple files for an application in a single request. This endpoint allows you to upload multiple files with their associated file types.

## Request

### HTTP Method & Path
```
POST /api/v2/applications/{application_id}/files/multi
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
- **files[]** (file[], binary, required): Array of files to upload

**Each file should include:**
- File name with the file_type prefix (e.g., `files[]=@example-file` with form parameter `files.item.file='example-file'`)

Example structure:
```
--form 'files[]=@file1'
--form 'files.item.file='example-file'
```

## cURL Example

```bash
curl --request POST \
  --url 'https://api.lendflow.com/api/v2/applications/{application_id}/files/multi' \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: multipart/form-data' \
  --form 'files[]=@example-file1' \
  --form 'files[]=@example-file2'
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
      "original_name": "9ff6f7f6-1bb3-3525-bbaa-5912889fa8",
      "file_url": "",
      "file_type": null,
      "type": 5,
      "file_size": 4914654,
      "created_at": null,
      "updated_at": null,
      "product_id": null
    },
    {
      "id": null,
      "alias_type": "image/png",
      "original_name": "9a965663-0370-3767-89e6-c7a9d228cd9",
      "file_url": "",
      "file_type": null,
      "type": 5,
      "file_size": 2466835,
      "created_at": null,
      "updated_at": null,
      "product_id": null
    }
  ]
}
```

**Response Fields:**
- **data** (object[]): Array of uploaded file information
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
- [Retrieve All Application Files](./retrieve-all-application-files.md)
- [Update file details](./update-file-details.md)
