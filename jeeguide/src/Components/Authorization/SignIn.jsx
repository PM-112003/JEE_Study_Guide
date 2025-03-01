import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { signin } from "../../api"; // Importing the signin function

export default function SignIn() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(""); // <-- Add this state to handle errors
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous error
        try {
            await signin(formData); // Call API function
            navigate("/content"); // Redirect to homepage after successful login
        } catch (error) {
            console.error("Login failed", error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <>
            <div className="signin-container">
                <h2>Sign In</h2>
                {error && <p className="error">{error}</p>} {/* Display error message if login fails */}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} required /> <br />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required /> <br />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </>
    );
}
