// components/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ setPhoneNumber }) => {
  const { register, handleSubmit } = useForm();

  const simulateServerRequest = async () => {
    // Simulate an asynchronous request to the server
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful response
        resolve({ success: true });
      }, 1000); // Simulate a delay of 1 second
    });
  };

  const onSubmit = async (data) => {
    try {
      // Simulate sending OTP to the server
      const response = await simulateServerRequest();

      // Assuming the server returns success
      if (response.success) {
        setPhoneNumber(data.phoneNumber);
        // Redirect to OTP verification page or perform other actions
      } else {
        // Handle error from the server
        console.error('Server request failed');
      }
    } catch (error) {
      // Handle other errors, e.g., network issues
      console.error('An error occurred', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Phone Number:
        <input {...register('phoneNumber', { required: true })} />
      </label>
      <button type="submit">Send OTP</button>
    </form>
  );
};

export default Login;
