# Scorecards API Documentation

## Overview

Score cards are used to evaluate and score applications based on defined criteria. This API section provides endpoints to manage, retrieve, and execute score cards and score card groups against applications.

## Endpoints

### 1. Update Score Card
- **Method:** PUT
- **Path:** `/api/v2/applications/{application_id}/score_card`
- **Description:** Update a score card for a specific application.
- **Documentation:** [Update Score Card](./update-score-card.md)

### 2. Retrieve Score Card Results by Application
- **Method:** GET
- **Path:** `/api/v2/applications/{application_id}/score_card/results`
- **Description:** Retrieve score card results for a specific application.
- **Documentation:** [Retrieve Score Card Results by Application](./retrieve-score-card-results-by-application.md)

### 3. Retrieve Score Card Group Results by Application
- **Method:** GET
- **Path:** `/api/v2/applications/{application_id}/score_card_group/results`
- **Description:** Retrieve score card group results for a specific application.
- **Documentation:** [Retrieve Score Card Group Results by Application](./retrieve-score-card-group-results-by-application.md)

### 4. Run Specific or All Score Cards Against the Application
- **Method:** POST
- **Path:** `/api/v2/applications/{application_id}/score_card/execute`
- **Description:** Execute specific or all score cards against a given application.
- **Documentation:** [Run Specific or All Score Cards Against the Application](./run-specific-or-all-score-cards-against-the-application.md)

### 5. Run Specific or All Score Card Groups Against the Application
- **Method:** POST
- **Path:** `/api/v2/applications/{application_id}/score_card_group/execute`
- **Description:** Execute specific or all score card groups against a given application.
- **Documentation:** [Run Specific or All Score Card Groups Against the Application](./run-specific-or-all-score-card-groups-against-the-application.md)

### 6. List All Score Cards
- **Method:** GET
- **Path:** `/api/v2/score_cards`
- **Description:** Retrieve a list of all available score cards.
- **Documentation:** [List All Score Cards](./list-all-score-cards.md)

### 7. Get Specific Score Card Details
- **Method:** GET
- **Path:** `/api/v2/score_cards/{score_card_id}`
- **Description:** Retrieve detailed information about a specific score card.
- **Documentation:** [Get Specific Score Card Details](./get-specific-score-card-details.md)

## Authentication

All Scorecards API endpoints require authentication using Bearer tokens. Include your API key in the Authorization header:

```
Authorization: Bearer {YOUR_TOKEN}
```

To obtain an API key, register on the Lendflow client portal.

## Score Card Execution

To execute score cards, you can:

1. Execute all available score cards by passing an empty array or omitting the IDs parameter
2. Execute specific score cards by providing their IDs in the request body

## Status Codes

- **200 OK:** Request successful
- **400 Bad Request:** Invalid parameters
- **401 Unauthorized:** Missing or invalid authentication token
- **404 Not Found:** Resource not found
- **500 Internal Server Error:** Server error

## Rate Limiting

Refer to general API documentation for rate limiting policies.
