# Apply for Capital

## Endpoint Details

**Description:** Submit a capital application. This legacy endpoint allows businesses to apply for capital funding.

**HTTP Method:** POST

**URL Path:** `/api/v2/applications/apply-for-capital`

**Status:** Legacy endpoint - use Workflow Management endpoints for new implementations.

## Request

### Request Body (JSON)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_id` | string | Yes | Client identifier |
| `business_name` | string | Yes | Legal business name |
| `business_type` | string | Yes | Type of business (sole_proprietor, llc, corporation, partnership, etc.) |
| `years_in_business` | integer | No | Number of years business has been operating |
| `email` | string | Yes | Business email address |
| `phone` | string | Yes | Business phone number |
| `monthly_revenue` | number | No | Average monthly revenue |
| `annual_revenue` | number | No | Annual revenue |
| `credit_score` | integer | No | Business credit score |
| `owner_first_name` | string | No | Owner first name |
| `owner_last_name` | string | No | Owner last name |
| `owner_ssn` | string | No | Owner SSN (last 4 digits only) |
| `requested_amount` | number | No | Amount of capital requested |
| `business_address` | object | No | Business address details |
| `business_address.street` | string | No | Street address |
| `business_address.city` | string | No | City |
| `business_address.state` | string | No | State/Province |
| `business_address.zip` | string | No | ZIP/Postal code |
| `business_address.country` | string | No | Country |
| `documents` | array | No | Array of document IDs |

### Authentication

```
Authorization: Bearer [YOUR_TOKEN]
Content-Type: application/json
```

### Example Request

```bash
curl --request POST \
  --url https://api.lendflow.com/api/v2/applications/apply-for-capital \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
    "client_id": "client_123",
    "business_name": "Acme Corporation",
    "business_type": "corporation",
    "years_in_business": 5,
    "email": "contact@acme.com",
    "phone": "+1-555-123-4567",
    "monthly_revenue": 50000,
    "annual_revenue": 600000,
    "credit_score": 720,
    "owner_first_name": "John",
    "owner_last_name": "Doe",
    "requested_amount": 100000,
    "business_address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001",
      "country": "USA"
    }
  }'
```

### JavaScript Example

```javascript
const submitCapitalApplication = async (applicationData) => {
  const response = await fetch(
    'https://api.lendflow.com/api/v2/applications/apply-for-capital',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${YOUR_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(applicationData)
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// Usage
const appData = {
  client_id: 'client_123',
  business_name: 'Acme Corp',
  business_type: 'corporation',
  email: 'contact@acme.com',
  phone: '+1-555-123-4567',
  monthly_revenue: 50000,
  requested_amount: 100000
};

submitCapitalApplication(appData)
  .then(data => {
    console.log('Application submitted:', data.data);
    console.log('Application ID:', data.data.id);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Response

### Response Schema (201 - Created)

```json
{
  "data": {
    "id": "app_98765",
    "client_id": "client_123",
    "status": "pending",
    "business_name": "Acme Corporation",
    "business_type": "corporation",
    "email": "contact@acme.com",
    "phone": "+1-555-123-4567",
    "monthly_revenue": 50000,
    "annual_revenue": 600000,
    "credit_score": 720,
    "requested_amount": 100000,
    "created_at": "2024-01-15T10:30:00Z",
    "application_url": "https://app.lendflow.com/applications/app_98765",
    "status_url": "https://api.lendflow.com/api/v2/applications/app_98765",
    "next_steps": [
      "Review documents",
      "Credit analysis",
      "Underwriting review"
    ]
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique application ID |
| `client_id` | string | Client identifier |
| `status` | string | Current application status (pending) |
| `business_name` | string | Business name |
| `created_at` | string | Creation timestamp (ISO 8601) |
| `application_url` | string | URL to view application in dashboard |
| `status_url` | string | API endpoint to check application status |
| `next_steps` | array | Recommended next steps |

## Error Responses

### 400 - Invalid Input

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      },
      {
        "field": "business_type",
        "message": "business_type is required"
      }
    ]
  }
}
```

### 401 - Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing authentication token"
  }
}
```

### 422 - Duplicate Application

```json
{
  "error": {
    "code": "DUPLICATE_APPLICATION",
    "message": "An application with this email already exists",
    "existing_application_id": "app_12345"
  }
}
```

## Business Types

| Type | Description |
|------|-------------|
| `sole_proprietor` | Sole proprietorship |
| `partnership` | General partnership |
| `llc` | Limited liability company |
| `s_corp` | S corporation |
| `c_corp` | C corporation |
| `corporation` | Standard corporation |
| `nonprofit` | Nonprofit organization |
| `trust` | Trust entity |
| `other` | Other business type |

## Use Cases

### Submit Basic Capital Application
```javascript
const application = {
  client_id: 'client_123',
  business_name: 'Tech Startup Inc',
  business_type: 'llc',
  email: 'founder@techstartup.com',
  phone: '+1-555-999-8888',
  requested_amount: 250000
};
```

### Submit Complete Application
```javascript
const application = {
  client_id: 'client_123',
  business_name: 'Established Business LLC',
  business_type: 'llc',
  years_in_business: 10,
  email: 'admin@business.com',
  phone: '+1-555-123-4567',
  monthly_revenue: 75000,
  annual_revenue: 900000,
  credit_score: 750,
  owner_first_name: 'Jane',
  owner_last_name: 'Smith',
  requested_amount: 150000,
  business_address: {
    street: '456 Oak Ave',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    country: 'USA'
  }
};
```

## Response Headers

```
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/v2/applications/app_98765
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
X-RateLimit-Reset: 1640995200
```

## Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 201 | Created | Application submitted successfully |
| 400 | Bad Request | Invalid request data |
| 401 | Unauthorized | Missing or invalid authentication |
| 422 | Unprocessable Entity | Duplicate or incomplete application |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

## Rate Limit

- **Limit:** 1000 requests per hour
- **Window:** 1 hour
- **Status:** Check X-RateLimit-* headers

## Validation Rules

- `business_name`: 2-255 characters
- `email`: Valid email format
- `phone`: Valid phone number format
- `monthly_revenue`: Must be >= 0
- `credit_score`: 300-850 range
- `requested_amount`: Must be > 0
- `years_in_business`: Must be >= 0

## Related Endpoints

- [Retrieve Applications](/api-reference/legacy/retrieve-applications)
- [Apply for Business Credit](/api-reference/legacy/apply-for-business-credit)
- [Retrieve Single Application](/api-reference/legacy/retrieve-single-application)

## Migration Guide

**Deprecated:** This endpoint is legacy. For new implementations, use:
- [Workflow Management - Submit New Application](/api-reference/workflow-management/submit-a-new-application-using-a-specified-workflow-template)

## Webhooks

Application submission triggers:
- `application.created`
- `application.submitted`

## Best Practices

1. **Validate input** - Verify data before submission
2. **Handle async processing** - Application may take time to process
3. **Store application ID** - Save the returned application ID
4. **Check status regularly** - Use status endpoint to monitor progress
5. **Provide accurate data** - Incorrect information may delay processing
6. **Include optional fields** - More data helps with faster approval

## Error Handling Example

```javascript
try {
  const result = await submitCapitalApplication(appData);
  const applicationId = result.data.id;
  console.log('Application submitted:', applicationId);

  // Store application ID for later reference
  localStorage.setItem('applicationId', applicationId);
} catch (error) {
  if (error.response?.status === 422) {
    console.error('Duplicate application:', error.response.data.error);
  } else if (error.response?.status === 400) {
    console.error('Validation error:', error.response.data.error.details);
  } else {
    console.error('Submission failed:', error.message);
  }
}
```

---

Last updated: 2024-01-15

**Note:** This is a legacy endpoint. New integrations should use Workflow Management endpoints.
