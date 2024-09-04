# Score Management Module


## API Endpoints

### 1. Update User Score

- **URL**: `/api/v1/scores/update`
- **Method**: `POST`
- **Description**: Updates the score of a user upon completion of an action.
- **Request Headers**:
  - `Authorization`: Bearer token for authentication
- **Request Payload**:
  ```json
  {
    "user_id": "string",
    "score_increase": "integer"
  }




## Scoreboard API Module

The Score Management Module is responsible for managing user scores within the application. This module handles score updates triggered by user actions, maintains a live scoreboard, and ensures security to prevent unauthorized score manipulations.

### Features

- **Score Update API**: Allows users to update their scores securely after completing an action.
- **Live Scoreboard**: Provides real-time updates of the top 10 user scores.
- **Security Measures**: Ensures that only authorized requests can update user scores.

### Endpoints da API

1. **POST /scores/update**
    * **Description:** This endpoint receives a POST request containing data to update the user's score.
    * **Request Body:**
        * **user_id (required, string):** The unique identifier of the user whose score needs to be updated.
        * **points (required, integer):** The number of points to be added to the user's score.
    * **Response:**
        * **200 OK:** Upon successful update, returns a JSON object with the following structure:
            * **message (string):**  Success message (e.g., "Score updated successfully").
            * **score (integer):** The updated total score of the user.
            * **rank (integer):** The updated ranking of the user on the leaderboard (1 being the highest).
        * **401 Unauthorized:** If the request does not have proper authorization.
        * **400 Bad Request:**  If the request body is missing required fields or contains invalid data types..

### Authentication

The API requires valid user credentials for score updates. This can be implemented in various ways (e.g., JWT tokens) depending on your application's overall authentication scheme. 
Details of the authentication are outside the scope of this module. 
However, the module expects the request to be authorized and extracts the user ID from the credentials for verification.

### Leaderboard Management
The module maintains an internal data structure (e.g., a sorted list) to store the top 10 user scores. Upon receiving a score update request:

* It retrieves the current score of the user based on the provided user ID.
* It adds the requested points to the user's score.
* It updates the user's position within the top 10 scores (if applicable).
* If the updated score surpasses a lower-ranked user on the leaderboard, the lower-ranked user * is removed, and the updated user is inserted into the appropriate position.



#### Deployment

To deploy the Score Management Module, follow these steps:

1. **Clone the Repository**

   Start by cloning the repository to your local machine:
   ```bash
   git clone https://github.com/your-repo/score-management-module.git
   cd score-management-module

2. **Install Dependencies** 
npm install

3. **Setup Envrionment Variables**
cp .env.example .env

4. **Run the Service**
npm start
