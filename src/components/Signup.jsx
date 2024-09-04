import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from './Config';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const { username, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({});

        // Check for password match
        if (password !== confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match' });
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/register/`, {
                'username': username,
                'email': email,
                'password': password,
            });

            if (response.status === 201) {
                setSuccessMessage('Registration successful! Please log in.');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            }
        } catch (error) {
            console.log('Error details:', error); // Log the full error details
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            } else {
                setErrors({ general: 'An error occurred. Please try again.' });
            }
        }
    };

    return (
        <div>
            <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen mt-36">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errors.general && <p className="text-red-500">{errors.general}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.username && <p className="text-red-500">{errors.username}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="text-sm rounded-lg block w-full p-2.5 placeholder:text-black"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an Account
                            </button>
                            <p className="text-sm font-medium text-white dark:text-white">
                                Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
