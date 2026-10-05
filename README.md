# Spring Boot Login API

A simple Spring Boot REST API that accepts username and password from a frontend (HTML form + JavaScript) and returns a greeting. Built as a hands-on exercise to understand how data flows from frontend to backend using `@RequestBody` and DTOs.

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Web
- **Frontend:** HTML, JavaScript (fetch API)
- **Data Format:** JSON

## Project Structure

```
├── src/main/java/com/rajesh/
│   ├── controller/
│   │   └── Login.java          # REST controller
│   └── dto/
│       └── LoginDTO.java       # Data Transfer Object
└── frontend/
    └── login.html              # HTML form with JavaScript
```

## How It Works

1. User enters username and password in the HTML form
2. JavaScript intercepts the form submit, converts the data into JSON
3. `fetch()` sends a POST request to `http://localhost:8080/rajesh/login` with `Content-Type: application/json`
4. Spring Boot receives the JSON, Jackson maps it to `LoginDTO` using the DTO's setter methods
5. Controller reads the values with getters and returns a greeting

## Endpoint

| Method | URL | Request Body | Response |
|--------|-----|--------------|----------|
| POST | `/rajesh/login` | `{"userName":"raj","passWord":"1234"}` | `Helloraj` |

## How to Run

### Backend
```bash
mvn spring-boot:run
```
App runs on `http://localhost:8080`

### Frontend
Open `frontend/login.html` in your browser.

## Testing with Postman

```
POST http://localhost:8080/rajesh/login
Headers: Content-Type: application/json
Body (raw JSON):
{
    "userName": "raj",
    "passWord": "1234"
}
```

## Key Concepts Learned

- Difference between `@RequestParam` (form-encoded data) and `@RequestBody` (JSON)
- How Jackson deserializes JSON into Java objects using setters
- Why HTML forms send `application/x-www-form-urlencoded` by default
- How to use JavaScript `fetch()` to send JSON from the frontend
- CORS handling with `@CrossOrigin` for local development

## Author

**Rajesh Sohani**
- GitHub: [@rajeshsohani53](https://github.com/rajeshsohani53)
- LinkedIn: [Rajesh Sohani](https://linkedin.com/in/rajesh-sohani-355a9a250)
