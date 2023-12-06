// components/OtpVerification.js
import React, { useState } from 'react';

const OtpVerification = ({ phoneNumber }) => {
  const [otp, setOtp] = useState('');

  const verifyOtp = async () => {
    // Simulate an asynchronous request to the server for OTP verification
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful OTP verification response
        resolve({ success: true });
      }, 1000); // Simulate a delay of 1 second
    });
  };

  const resendOtp = async () => {
    // Simulate an asynchronous request to the server for OTP resend
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful OTP resend response
        resolve({ success: true });
      }, 1000); // Simulate a delay of 1 second
    });
  };

  const handleVerify = async () => {
    try {
      // Simulate OTP verification
      const response = await verifyOtp();

      // Assuming the server returns success
      if (response.success) {
        alert('OTP Verified successfully!');
        // Handle success, e.g., redirect to the next page
      } else {
        // Handle OTP verification failure
        alert('OTP verification failed');
      }
    } catch (error) {
      // Handle other errors, e.g., network issues
      console.error('An error occurred during OTP verification', error);
    }
  };

  const handleResend = async () => {
    try {
      // Simulate OTP resend
      const response = await resendOtp();

      // Assuming the server returns success
      if (response.success) {
        alert('OTP Resent!');
        // Handle success, e.g., update UI
      } else {
        // Handle OTP resend failure
        alert('OTP resend failed');
      }
    } catch (error) {
      // Handle other errors, e.g., network issues
      console.error('An error occurred during OTP resend', error);
    }
  };

  return (
    <div>
      <p>Enter OTP sent to {phoneNumber}</p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};

export default OtpVerification;
