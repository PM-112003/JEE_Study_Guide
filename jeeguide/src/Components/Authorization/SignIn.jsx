import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { signin } from "../../api"; // Importing the signin function

export default function SignIn() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(location.state?.message || ""); // <-- Add this state to handle errors
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
            <div className="bg-slate-950 h-screen w-screen flex flex-col items-center text-white">
                {/* heading */}
                <div className="mt-32 text-center text-sky-blue border-2 border-slate-600 rounded-xl p-5 md:w-[35%] sm:w-[60%] w-[80%]">
                    {/* sign in */}
                    <div className="text-sky-500 text-5xl font-bold">Sign In</div>
                    
                    <br />

                    {/* the form */}
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username"  className="text-black ml-2 rounded-xl p-2" name="username" value={formData.username} placeholder="Username" onChange={handleChange} required /> <br /> <br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" className="text-black ml-2 rounded-xl p-2" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required /> <br /> <br />
                        <button type="submit" className="border-[1px] p-2 rounded-xl w-[30%] border-slate-600 shadow-sm shadow-sky-400 hover:shadow-md hover:shadow-sky-400">Sign In</button>
                        {error && <p className="text-[10px] text-red-500">{error}</p>} {/* Display error message if login fails */}
                    </form> 

                    <br />
                    <div>No account, then create one <a href="/signup" className="underline text-sky-400">here</a></div>
                </div>
            </div>
        </>
    );
}


