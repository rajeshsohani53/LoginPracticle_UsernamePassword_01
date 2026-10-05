import { useState } from 'react';

function Login() {

    // Step A: State for each input field
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Step B: State to hold the backend's response message
    const [response, setResponse] = useState("");

    // Step C: Function that runs when the form is submitted
    const handleSubmit = async (event) => {
        event.preventDefault();   // stop browser's default form submission

        // Build the JSON object - field names must match your DTO
        const loginData = {
            userName: username,
            passWord: password
        };

        try {
            const res = await fetch("http://localhost:8080/rajesh/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            });

            const text = await res.text();
            setResponse(text);

        } catch (error) {
            setResponse("Error: " + error.message);
        }
    };

    // Step D: The JSX that gets rendered
    return (
        <div>
            <h2>Hii Rajesh - React + Spring Boot Login</h2>

            <form onSubmit={handleSubmit}>
                <label>UserName : </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br /><br />

                <label>Password : </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />

                <button type="submit">Submit</button>
            </form>

            <h3>{response}</h3>
        </div>
    );
}

export default Login;