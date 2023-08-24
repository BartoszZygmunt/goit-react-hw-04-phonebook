import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff3b3b;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <DeleteButton onClick={() => onDeleteContact(contact.id)}>
          Delete
        </DeleteButton>
      </ListItem>
    ))}
  </List>
);

export default ContactList;
