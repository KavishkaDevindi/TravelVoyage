# TravelVoyage – API Testing with Postman

## Overview

This project contains API testing work performed for the **TravelVoyage** web application using **Postman**.

The testing focused on REST API functionality, authentication, authorization, CRUD operations, request/response validation, HTTP status codes, and error handling.

This project demonstrates practical experience in **manual API testing and debugging**, with a focus on identifying API issues and verifying expected behavior.

## Testing Tool

* **Postman** – API development 
* **REST APIs**
* **Node.js**
* **Express.js**
* **Prisma ORM**
* **MySQL**

## API Endpoints Tested

### Authentication

| Method | Endpoint             | Purpose                                       |
| ------ | -------------------- | --------------------------------------------- |
| POST   | `/api/auth/login`    | Authenticate a user                           |
| POST   | `/api/auth/register` | Register a new user                           |
| GET    | `/api/auth/me`       | Retrieve the authenticated user's information |

### Bookings

| Method | Endpoint            | Purpose           |
| ------ | ------------------- | ----------------- |
| POST   | `/api/bookings`     | Create a booking  |
| GET    | `/api/bookings`     | Retrieve bookings |
| DELETE | `/api/bookings/:id` | Delete a booking  |

### Tours

| Method | Endpoint     | Purpose        |
| ------ | ------------ | -------------- |
| POST   | `/api/tours` | Create a tour  |
| GET    | `/api/tours` | Retrieve tours |

## Postman Collection Structure

TravelVoyage
│
├── Auth
│   ├── POST Login
│   ├── POST Register
│   └── GET User
│
├── Bookings
│   ├── POST Booking
│   ├── GET All Booking
│   └── DELETE Delete Booking
│
└── Tours
    ├── POST Tour
    └── GET Tour

## Testing Areas

### 1. Authentication Testing

The authentication APIs were tested to verify:

* User registration
* User login
* Login with valid credentials
* Authentication token generation
* Retrieving the authenticated user
* Access to protected endpoints

### 2. Authorization Testing

Authorization was tested for protected API endpoints.

Test scenarios included:

* Request with valid authentication
* Request without authentication
* User authorization
* Admin authorization
* Admin-only operations
* Forbidden access

For example, an unauthorized user attempting an admin-only operation was verified to receive a:


403 Forbidden

This helped verify that access control was being enforced correctly.

### 3. Booking API Testing

The following booking operations were tested:

**Create Booking**

POST /api/bookings

Validated:

* Required booking information
* User authentication
* Request body data
* Date values
* Numeric values
* Successful booking creation
* Response status and data

**Get Bookings**

GET /api/bookings

Validated:

* Authenticated access
* Retrieved booking data
* User information
* Response structure
* HTTP status code

**Delete Booking**

DELETE /api/bookings/:id

Validated:

* Booking ID handling
* Authentication
* Admin authorization
* Successful deletion
* Invalid/unauthorized access

### 4. Tour API Testing

The following tour operations were tested:

**Create Tour**

POST /api/tours

Validated:

* Required fields
* Request body
* Numeric values
* Rating values
* Successful tour creation
* Response data

**Get Tours**

GET /api/tours

Validated:

* Successful retrieval
* Response data
* HTTP status code
* API response structure

## Positive Testing

Examples of positive test scenarios:

* Register a user with valid information
* Login with valid credentials
* Retrieve the authenticated user
* Create a booking with valid information
* Retrieve bookings
* Create a tour with valid information
* Retrieve tours
* Delete an authorized booking

Expected responses were compared with the actual API responses.

## Negative Testing

Negative testing was performed to verify how the API handles invalid or unauthorized requests.

Examples include:

* Invalid login credentials
* Missing authentication
* Invalid authentication
* Unauthorized user attempting admin operations
* Invalid resource IDs
* Missing required request fields
* Incorrect data types
* Invalid request data

Unexpected API errors were investigated and the affected requests were retested after corrections.

## API Validation

During testing, the following areas were checked:

* HTTP methods
* Request URLs
* Request headers
* Authorization
* Request body
* Response body
* HTTP status codes
* Response data
* Error messages
* Authentication behavior
* Authorization behavior
* Resource IDs
* Data types

## HTTP Methods Tested

| Method | Usage              |
| ------ | ------------------ |
| GET    | Retrieve resources |
| POST   | Create resources   |
| DELETE | Delete resources   |

## HTTP Status Codes Observed

| Status Code | Meaning                              |
| ----------- | ------------------------------------ |
| 200         | Request successful                   |
| 201         | Resource successfully created        |
| 403         | Forbidden / insufficient permissions |
| 404         | Resource not found                   |
| 500         | Internal server error                |

## API Issues Identified During Testing

During API testing, several implementation issues were identified and investigated.

Examples included:

* Incorrect data types being passed to Prisma
* Missing required request fields
* Invalid or missing request body values
* Authentication and authorization issues
* Incorrect resource ID handling
* API requests using incorrect HTTP methods or URLs

These issues were investigated by reviewing API responses, server errors, controller logic, routes, and database requirements.

After fixes were applied, the affected endpoints were retested to verify the changes.

## Testing Process

The following manual API testing workflow was followed:

Identify API Endpoint
        ↓
Configure Postman Request
        ↓
Set Headers / Authorization
        ↓
Provide Test Data
        ↓
Send Request
        ↓
Check HTTP Status Code
        ↓
Validate Response Body
        ↓
Check Expected vs Actual Result
        ↓
Investigate Defects
        ↓
Retest After Fix

## Skills Demonstrated

Through this API testing work, I practiced:

* Manual API Testing
* REST API Testing
* Postman
* Positive Testing
* Negative Testing
* Authentication Testing
* Authorization Testing
* CRUD API Testing
* Request/Response Validation
* HTTP Status Code Validation
* Error Investigation
* API Debugging
* Defect Identification
* Retesting
* Basic Database/API Integration Testing

## Postman Collection

The Postman collection included in this folder contains the API requests used during testing.

**Collection:** `TravelVoyage.postman_collection.json`


## Conclusion

The TravelVoyage API testing work provided practical experience in manually testing REST APIs using Postman.

The testing covered authentication, authorization, bookings, and tours, with emphasis on functional validation, negative testing, error investigation, and retesting.

This project demonstrates my practical understanding of **software testing fundamentals and API testing** as I continue developing my career in **Quality Assurance and Software Testing**.
