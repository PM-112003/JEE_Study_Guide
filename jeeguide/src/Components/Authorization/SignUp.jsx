import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { signup } from "../../api"; // Importing the signin function

export default function SignUp() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState(""); // <-- Add this state to handle errors
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous error
        setLoading(true);
        try {
            await signup(formData); // Call API function
            navigate("/content"); // Redirect to homepage after successful login
        } catch (error) {
            console.error("Signup failed", error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "Signup failed. Please try again.");
        } finally {
            setLoading(false); // Hide loading message after response
        }
    };

    return (
        <>
            <div className="bg-slate-950 h-screen w-screen flex flex-col items-center text-white">
                {/* heading */}
                <div className="mt-32 text-center text-sky-blue border-2 border-slate-600 rounded-xl p-5 md:w-[35%] sm:w-[60%] w-[80%]">
                    {/* sign in */}
                    <div className="text-sky-500 md:text-5xl sm:text-3xl text-2xl font-bold">Create your account</div>
                    
                    <br />

                    {/* the form */}
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username"  className="text-black ml-2 rounded-xl p-2" name="username" value={formData.username} placeholder="Username" onChange={handleChange} required /> <br /> <br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" className="text-black ml-2 rounded-xl p-2" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required /> <br /> <br />
                        <label htmlFor="email">Email address: </label>
                        <input type="email" id="email" className="text-black ml-2 rounded-xl p-2" name="email" value={formData.email} placeholder="Your email" onChange={handleChange} required /> <br /> <br />
                        <button type="submit" className="border-[1px] p-2 rounded-xl w-[30%] border-slate-600 shadow-sm shadow-sky-400 hover:shadow-md hover:shadow-sky-400">Sign Up</button>
                        {loading && <p className="text-[14px] text-sky-500 mt-4">Signing you up...</p>}
                        {error && <p className="text-[10px] text-red-500">{error}</p>} {/* Display error message if login fails */}
                    </form> 
                </div>
            </div>
        </>
    );
}


