import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
  align-items: baseline;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #0073e6;
  color: white;
  border: none;
  cursor: pointer;
`;

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = formData;

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    onAddContact(newContact);

    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Phone Number
        <Input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
