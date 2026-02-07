# Download a File

## Endpoint Description

Download a specific file associated with an application. The response is the binary file content.

## Request

### HTTP Method & Path
```
GET /api/v2/applications/{application_id}/files/{file_id}
```

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| application_id | string | Yes | The ID of the application |
| file_id | integer | Yes | The ID of the file to download |

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
  --url 'https://api.lendflow.com/api/v2/applications/{application_id}/files/{file_id}' \
  --header 'Authorization: Bearer <token>' \
  --output downloaded-file
```

## Response

### Success Response (200)

**Content-Type**: `application/octet-stream`

The response is the binary file content. The actual file data will be returned as a stream.

**Headers:**
- `Content-Type`: application/octet-stream
- `Content-Disposition`: Contains the filename and indicates the response should be downloaded

## Related Endpoints

- [Retrieve All Application Files](./retrieve-all-application-files.md)
- [Upload Application Files](./upload-application-files.md)
- [Download a zip file containing all documents for an application](./download-a-zip-file.md)
- [Update file details](./update-file-details.md)
