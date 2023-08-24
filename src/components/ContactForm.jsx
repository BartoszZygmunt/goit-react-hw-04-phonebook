import React, { Component } from 'react';
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

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.props.onAddContact(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </Label>
        <Label>
          Phone Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
