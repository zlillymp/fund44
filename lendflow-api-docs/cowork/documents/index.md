# Documents API Reference

The Documents endpoints allow you to manage application files and documents. These endpoints enable you to upload, retrieve, categorize, and download files associated with applications.

## Endpoints

### 1. Retrieve All Application Files
Get all files/documents for a specific application.

- **Method**: `GET`
- **Path**: `/api/v2/applications/{application_id}/files`
- **Description**: Retrieve all application files for a specific application. Supports filtering by document types.

[View Full Documentation](./retrieve-all-application-files.md)

---

### 2. Upload Application Files
Upload one or more files for an application.

- **Method**: `POST`
- **Path**: `/api/v2/applications/{application_id}/files`
- **Description**: Upload one or more files/documents for an application using multipart form data with categorization by file type.

[View Full Documentation](./upload-application-files.md)

---

### 3. Categorize and Upload Multiple Application Files
Upload and categorize multiple files at once.

- **Method**: `POST`
- **Path**: `/api/v2/applications/{application_id}/files/multi`
- **Description**: Upload and categorize multiple files for an application in a single request.

[View Full Documentation](./categorize-and-upload-multiple-application-files.md)

---

### 4. Update file details
Update the metadata or category of an existing file.

- **Method**: `PUT`
- **Path**: `/api/v2/applications/{application_id}/files/{id}`
- **Description**: Update the details/metadata of an existing file associated with an application, including reclassifying the file type.

[View Full Documentation](./update-file-details.md)

---

### 5. Download a File
Download a specific file.

- **Method**: `GET`
- **Path**: `/api/v2/applications/{application_id}/files/{file_id}`
- **Description**: Download a specific file associated with an application as a binary stream.

[View Full Documentation](./download-a-file.md)

---

### 6. Download a zip file containing all documents for an application
Download all files as a ZIP archive.

- **Method**: `GET`
- **Path**: `/api/v2/applications/{application_id}/files/zip`
- **Description**: Download all documents/files associated with an application as a single ZIP file.

[View Full Documentation](./download-a-zip-file.md)

---

## Supported Document Types

The Documents API supports a wide variety of document types including:

- Tax returns
- Bank statements (multiple months)
- Financial statements
- Offer slips
- Contracts
- Payroll reports
- Insurance certificates
- And many more...

For a complete list of supported document types, see the [Retrieve All Application Files](./retrieve-all-application-files.md) documentation.

## Authentication

All Documents endpoints require Bearer token authentication:

```
Authorization: Bearer <token>
```

You can register for a new Lendflow API key on the client portal in less than 60 seconds.

## Common Workflows

### Upload and Categorize Documents
1. **Upload files** using the Upload Application Files endpoint with proper file_type categorization
2. **Verify upload** using the Retrieve All Application Files endpoint
3. **Update categorization** if needed using the Update file details endpoint

### Batch File Operations
1. **Upload multiple files** using the Categorize and Upload Multiple Application Files endpoint
2. **Download all files** using the Download a zip file endpoint
3. **Update individual files** as needed using the Update file details endpoint

### Document Retrieval
1. **List all files** for an application using Retrieve All Application Files
2. **Filter by type** to find specific document categories
3. **Download individual files** or the complete ZIP archive

## Related Sections

- [Pre-Qualification API](../pre-qualification/index.md)
- [Authentication](../authentication/)
- [Applications API](../applications/)
