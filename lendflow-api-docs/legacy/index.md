# Legacy API Endpoints

This section contains legacy API endpoints that are maintained for backward compatibility.

## Base URL
```
https://api.lendflow.com/api/v2
```

## Authentication
All requests require Bearer token authentication:
```
Authorization: Bearer [YOUR_TOKEN]
```

## Endpoints

### Application Management (Legacy)

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Retrieve Applications (Legacy) | GET | Get list of applications (legacy version) |
| Retrieve Applications | GET | Get list of applications |
| Retrieve Single Application | GET | Get a single application |
| Retrieve Single Application Details | GET | Get detailed information for a single application |
| Apply for Capital | POST | Submit capital application |
| Apply for Capital (Legacy) | POST | Submit capital application (legacy version) |
| Apply for Business Credit | POST | Submit business credit application |
| Enrich Business Credit Application | POST | Enrich business credit application with additional data |
| Create Application With Plaid | POST | Create application with Plaid data |

### Plaid Data Operations

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Fetch the Latest Plaid Transactions for the Passed-in Application | GET | Get latest Plaid bank transactions |
| Fetch the Applications Bank Account Data Stored from Plaid | GET | Get stored bank account data from Plaid |
| Fetch the Latest Plaid Asset Report for the Passed-in Application | GET | Get latest Plaid asset report |

### Offers Management (Legacy)

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Get All Offers (Legacy) | GET | Get all offers (legacy version) |
| Get All Offers | GET | Get all offers |

### Business Information

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Pull Application Commercial Data | GET | Extract commercial data from application |
| Finish Application Processing | POST | Mark application as finished processing |

### Officer Management

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Add Company Officer | POST | Add a company officer to application |
| Update Company Officer | PUT | Update company officer details |

### Debt Management

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Add Debt | POST | Add debt information to application |
| Update Debt | PUT | Update debt details |

### Debtor Management

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Add Debtor | POST | Add debtor to application |
| Update Debtor | PUT | Update debtor information |

### Address Management

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Save Business Address | POST | Save business address |
| Save Personal Address | POST | Save personal address |
| Save PIIs | POST | Save personally identifiable information |

### Document Verification

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Create Document Verification | POST | Create document verification request |

### Email Customization

| Endpoint | HTTP Method | Description |
|----------|------------|-------------|
| Create Email Customization | POST | Create custom email template |
| Retrieve Email Customizations | GET | Get all email customizations |
| Retrieve Single Email Customization | GET | Get specific email customization |
| Update Email Customization | PUT | Update email customization |
| Delete Email Customization | DELETE | Delete email customization |
| Upload Email Customization Image | POST | Upload image for email customization |
| Delete Header Image Email Customization | DELETE | Delete email header image |
| Delete Logo Email Customization | DELETE | Delete email logo |

## Common Parameters

### Path Parameters
- `application_id`: Unique identifier for the application (string, required)
- `officer_id`: Unique identifier for officer (string, optional)
- `debt_id`: Unique identifier for debt (string, optional)
- `debtor_id`: Unique identifier for debtor (string, optional)
- `customization_id`: Unique identifier for customization (string, optional)

### Authentication
All endpoints require Bearer token in the header:
```
Authorization: Bearer [YOUR_TOKEN]
```

## Response Format
All responses follow this format:
```json
{
  "data": {
    // Response data
  },
  "status": 200
}
```

## Deprecation Notice
These legacy endpoints are maintained for backward compatibility. New implementations should use the endpoints in other sections where available.

## Error Handling
Standard HTTP status codes are used:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

---

For detailed endpoint documentation, see individual endpoint files in this directory.
