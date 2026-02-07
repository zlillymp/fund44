# Pre-Qualification API Reference

The Pre-Qualification endpoints allow you to create pre-qualifications for applicants and manage their financial information. These endpoints enable registered users with historical financial data to run pre-qualifications through the Lendflow system.

## Endpoints

### 1. Pre-Qualification
Run a pre-qualification with historical financial data.

- **Method**: `POST`
- **Path**: `/api/v1/prequalification`
- **Description**: Allows registered users with historical financial data to run a Pre-Qualification through the Lendflow system.

[View Full Documentation](./pre-qualification.md)

---

### 2. Create a Pre-Qualification
Create a new pre-qualification record.

- **Method**: `POST`
- **Path**: `/api/v2/prequalification`
- **Description**: Create a new pre-qualification record with business information and financial criteria (time in business, monthly revenue, credit score, and requested amount).

[View Full Documentation](./create-a-pre-qualification.md)

---

### 3. Save Application Funds
Save information about the intended use of funds.

- **Method**: `PUT`
- **Path**: `/api/v2/applications/{application_id}/fund`
- **Description**: Save information about the intended use of funds for an application.

[View Full Documentation](./save-application-funds.md)

---

### 4. Monthly Revenues
Retrieve available monthly revenue categories.

- **Method**: `GET`
- **Path**: `/api/v2/monthly_revenues`
- **Description**: Retrieve all the available monthly revenue options/categories from the Lendflow system. Use the returned keys when creating pre-qualifications.

[View Full Documentation](./monthly-revenues.md)

---

## Authentication

All Pre-Qualification endpoints require Bearer token authentication:

```
Authorization: Bearer <token>
```

You can register for a new Lendflow API key on the client portal in less than 60 seconds.

## Quick Start

1. **Create a pre-qualification** using the Create a Pre-Qualification endpoint with business metrics
2. **Get monthly revenue options** using the Monthly Revenues endpoint
3. **Save fund usage information** using the Save Application Funds endpoint
4. **Run pre-qualification** with historical data using the Pre-Qualification endpoint

## Related Sections

- [Documents API](../documents/index.md)
- [Authentication](../authentication/)
- [Offers API](../offers/)
