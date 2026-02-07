# Download a zip file containing all documents for an application

## Endpoint Description

Download all documents/files associated with an application as a single ZIP file.

## Request

### HTTP Method & Path
```
GET /api/v2/applications/{application_id}/files/zip
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

## cURL Example

```bash
curl --request GET \
  --url 'https://api.lendflow.com/api/v2/applications/{application_id}/files/zip' \
  --header 'Authorization: Bearer <token>' \
  --output application-files.zip
```

## Response

### Success Response (200)

**Content-Type**: `application/zip`

The response is a ZIP file containing all documents associated with the application. The actual file data will be returned as a stream ready for download.

**Headers:**
- `Content-Type`: application/zip
- `Content-Disposition`: Indicates the response should be downloaded as a ZIP file

## Notes

This endpoint is useful when you need to retrieve all documents for an application at once, rather than downloading them individually. The ZIP file will contain all files associated with the application organized with their original filenames.

## Related Endpoints

- [Retrieve All Application Files](./retrieve-all-application-files.md)
- [Download a File](./download-a-file.md)
- [Upload Application Files](./upload-application-files.md)
