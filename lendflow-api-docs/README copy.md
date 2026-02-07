# Lendflow API Documentation

This directory contains extracted documentation for the Lendflow API, organized by sections.

## Structure

```
lendflow-api-docs/
├── README.md (this file)
├── pre-qualification/
│   ├── index.md
│   ├── pre-qualification.md
│   ├── create-a-pre-qualification.md
│   ├── save-application-funds.md
│   └── monthly-revenues.md
└── documents/
    ├── index.md
    ├── retrieve-all-application-files.md
    ├── upload-application-files.md
    ├── categorize-and-upload-multiple-application-files.md
    ├── update-file-details.md
    ├── download-a-file.md
    └── download-a-zip-file.md
```

## Pre-Qualification API

The Pre-Qualification section contains 4 endpoints for managing pre-qualifications:

1. **Pre-Qualification** (POST `/api/v1/prequalification`) - Run a pre-qualification with historical financial data
2. **Create a Pre-Qualification** (POST `/api/v2/prequalification`) - Create a new pre-qualification record
3. **Save Application Funds** (PUT `/api/v2/applications/{application_id}/fund`) - Save fund usage information
4. **Monthly Revenues** (GET `/api/v2/monthly_revenues`) - Get available monthly revenue categories

Start here: [Pre-Qualification API Index](./pre-qualification/index.md)

## Documents API

The Documents section contains 6 endpoints for managing application files:

1. **Retrieve All Application Files** (GET `/api/v2/applications/{application_id}/files`) - Get all files for an application
2. **Upload Application Files** (POST `/api/v2/applications/{application_id}/files`) - Upload files
3. **Categorize and Upload Multiple Application Files** (POST `/api/v2/applications/{application_id}/files/multi`) - Upload multiple files
4. **Update file details** (PUT `/api/v2/applications/{application_id}/files/{id}`) - Update file metadata
5. **Download a File** (GET `/api/v2/applications/{application_id}/files/{file_id}`) - Download a single file
6. **Download a zip file** (GET `/api/v2/applications/{application_id}/files/zip`) - Download all files as ZIP

Start here: [Documents API Index](./documents/index.md)

## Authentication

All endpoints require Bearer token authentication:

```
Authorization: Bearer <token>
```

## Quick Links

- [Pre-Qualification API](./pre-qualification/index.md)
- [Documents API](./documents/index.md)

## Documentation Format

Each endpoint documentation includes:

- **Endpoint Description**: What the endpoint does
- **HTTP Method & Path**: The request method and URL path
- **Path Parameters**: Required path parameters
- **Query Parameters**: Optional query parameters (if applicable)
- **Authorization**: Authentication requirements
- **Request Body**: Request payload structure
- **cURL Example**: Complete cURL command example
- **Response**: Success response format and schema
- **Related Endpoints**: Links to related endpoints

## Notes

- All documentation was extracted from the Lendflow API reference at https://docs.lendflow.com/api-reference
- Documentation includes endpoint descriptions, request/response schemas, and code examples
- Response examples show the structure but may contain placeholder/example data
- For the most up-to-date information, always refer to the official Lendflow documentation
