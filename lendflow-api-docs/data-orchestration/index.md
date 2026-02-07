# Data Orchestration API Documentation

## Overview

Data Orchestration provides a way to manage and execute data processing workflows for applications. This API section allows you to retrieve logs, manage orchestration templates, and execute data orchestration processes.

## Endpoints

### 1. Get Application's Data Orchestration Logs
- **Method:** GET
- **Path:** `/api/v2/applications/{application_id}/data_orch`
- **Description:** Fetch the latest data orchestration logs for a given application.
- **Documentation:** [Get Application's Data Orchestration Logs](./get-applications-data-orchestration-logs.md)

### 2. Get a Data Orchestration Log for an Application
- **Method:** GET
- **Path:** `/api/v2/applications/{application_id}/data_orch/{log_id}`
- **Description:** Retrieve a specific data orchestration log for a given application using the log ID.
- **Documentation:** [Get a Data Orchestration Log for an Application](./get-a-data-orchestration-log-for-an-application.md)

### 3. Available Data Orchestration Templates
- **Method:** GET
- **Path:** `/api/v2/data_orchestration/templates`
- **Description:** Lists published data orchestration templates available for use.
- **Documentation:** [Available Data Orchestration Templates](./available-data-orchestration-templates.md)

### 4. Run Data Orchestration for an Application
- **Method:** POST
- **Path:** `/api/v2/data_orchestration/execute`
- **Description:** Run data orchestration given a specific template ID and application ID.
- **Documentation:** [Run Data Orchestration for an Application](./run-data-orchestration-for-an-application.md)

### 5. Restart Data Orchestration as Pass Outcome
- **Method:** PUT
- **Path:** `/api/v2/data_orchestration/{log_id}/continue_pass`
- **Description:** Restart a data orchestration process and mark it as a pass outcome.
- **Documentation:** [Restart Data Orchestration as Pass Outcome](./restart-data-orchestration-as-pass-outcome.md)

## Authentication

All Data Orchestration API endpoints require authentication using Bearer tokens. Include your API key in the Authorization header:

```
Authorization: Bearer {YOUR_TOKEN}
```

To obtain an API key, register on the Lendflow client portal.

## Common Response Schema

Data Orchestration logs typically return responses with the following structure:

```json
{
  "data": {
    "id": null,
    "outcome": null,
    "internal_error": null,
    "status": 1,
    "created_at": null,
    "started_at": null,
    "finished_at": null,
    "master_status": null
  }
}
```

## Status Codes

- **200 OK:** Request successful
- **202 Accepted:** Request accepted for processing
- **400 Bad Request:** Invalid parameters
- **401 Unauthorized:** Missing or invalid authentication token
- **404 Not Found:** Resource not found
- **422 Unprocessable Entity:** Validation error
- **500 Internal Server Error:** Server error

## Rate Limiting

Refer to general API documentation for rate limiting policies.
