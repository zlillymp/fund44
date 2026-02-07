# Lendflow API Documentation - Extraction Complete

## Summary

Successfully extracted and documented all API endpoints for four major sections of the Lendflow API:

### STIPS API (3 endpoints)
Located at: `/sessions/intelligent-great-planck/mnt/Lendflow/lendflow-api-docs/stips/`

- **update-application-stips.md** - PUT endpoint to update stipulations
- **get-required-stips-for-single-application.md** - GET endpoint to retrieve required stips
- **get-required-stips-for-single-offer.md** - GET endpoint to retrieve stips for offers
- **index.md** - Section overview and guide

### DATA ORCHESTRATION API (5 endpoints)
Located at: `/sessions/intelligent-great-planck/mnt/Lendflow/lendflow-api-docs/data-orchestration/`

- **get-applications-data-orchestration-logs.md** - GET endpoint for orchestration logs
- **get-a-data-orchestration-log-for-an-application.md** - GET endpoint for specific log
- **available-data-orchestration-templates.md** - GET endpoint for templates
- **run-data-orchestration-for-an-application.md** - POST endpoint to execute orchestration
- **restart-data-orchestration-as-pass-outcome.md** - PUT endpoint to restart with pass outcome
- **index.md** - Section overview and guide

### SCORECARDS API (7 endpoints)
Located at: `/sessions/intelligent-great-planck/mnt/Lendflow/lendflow-api-docs/scorecards/`

- **update-score-card.md** - PUT endpoint to update score cards
- **retrieve-score-card-results-by-application.md** - GET endpoint for score card results
- **retrieve-score-card-group-results-by-application.md** - GET endpoint for group results
- **run-specific-or-all-score-cards-against-the-application.md** - POST endpoint to execute
- **run-specific-or-all-score-card-groups-against-the-application.md** - POST endpoint for groups
- **list-all-score-cards.md** - GET endpoint to list all cards
- **get-specific-score-card-details.md** - GET endpoint for specific card details
- **index.md** - Section overview and guide

### OFFER TEMPLATES API (2 endpoints)
Located at: `/sessions/intelligent-great-planck/mnt/Lendflow/lendflow-api-docs/offer-templates/`

- **list-offer-templates.md** - GET endpoint to list all templates
- **show-an-offer-template.md** - GET endpoint for specific template details
- **index.md** - Section overview and guide

## Documentation Format

Each endpoint documentation includes:

1. **Endpoint Details**: Name, description, HTTP method, URL path
2. **Authorization**: Bearer token requirements and format
3. **Path Parameters**: All path variables with types and descriptions
4. **Request Body**: Request parameters, types, and examples
5. **Response Schema**: Status codes, response fields, and JSON examples
6. **cURL Examples**: Ready-to-use command examples for testing

## Total Files Created

- **21 Documentation Files** (17 endpoints + 4 index files)
- **4 Sections** fully documented
- **17 API Endpoints** with complete specifications

## File Location Structure

```
/sessions/intelligent-great-planck/mnt/Lendflow/lendflow-api-docs/
├── stips/
│   ├── index.md
│   ├── update-application-stips.md
│   ├── get-required-stips-for-single-application.md
│   └── get-required-stips-for-single-offer.md
├── data-orchestration/
│   ├── index.md
│   ├── get-applications-data-orchestration-logs.md
│   ├── get-a-data-orchestration-log-for-an-application.md
│   ├── available-data-orchestration-templates.md
│   ├── run-data-orchestration-for-an-application.md
│   └── restart-data-orchestration-as-pass-outcome.md
├── scorecards/
│   ├── index.md
│   ├── update-score-card.md
│   ├── retrieve-score-card-results-by-application.md
│   ├── retrieve-score-card-group-results-by-application.md
│   ├── run-specific-or-all-score-cards-against-the-application.md
│   ├── run-specific-or-all-score-card-groups-against-the-application.md
│   ├── list-all-score-cards.md
│   └── get-specific-score-card-details.md
└── offer-templates/
    ├── index.md
    ├── list-offer-templates.md
    └── show-an-offer-template.md
```

## Extraction Details

- **Method**: Browser-based navigation of docs.lendflow.com
- **Date Extracted**: January 28, 2026
- **Total Documentation Size**: ~45KB
- **Format**: Markdown (.md) files
- **Authentication**: Bearer Token (all endpoints)

## Quick Links

- [STIPS Section](./stips/index.md)
- [Data Orchestration Section](./data-orchestration/index.md)
- [Scorecards Section](./scorecards/index.md)
- [Offer Templates Section](./offer-templates/index.md)

---

**Status**: ✓ EXTRACTION COMPLETE
