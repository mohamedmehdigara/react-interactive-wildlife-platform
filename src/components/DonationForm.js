// components/DonationForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  /* Styles for donation form */
`;

const Input = styled.input`
  /* Styles for input fields */
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  /* Styles for submit button */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  /* Styles for error message */
  color: red;
`;

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Simple validation
    if (!formData.amount || !formData.name || !formData.email) {
      setError('All fields are required');
      return;
    }
    // Handle form submission
    console.log('Form submitted with data:', formData);
    // Reset form
    setFormData({
      amount: '',
      name: '',
      email: ''
    });
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="number" 
        name="amount" 
        placeholder="Enter donation amount" 
        value={formData.amount} 
        onChange={handleChange} 
      />
      <Input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <Input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Donate Now</Button>
    </Form>
  );
};

export default DonationForm;
