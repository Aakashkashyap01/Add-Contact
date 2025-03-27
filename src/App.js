import React, { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid"; 

function App() {
  const localStorageKey = "contact";
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey)) || []
  });
  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(contacts))
  },[contacts])

  const addContact = (data) => {
    setContacts((prevContacts) => [...prevContacts, { id: uuidv4(), data }]);
  };

  const removeContact = (id) => {
    const updatedList = contacts.filter((val) => val.id !== id);
    setContacts(updatedList);
  };

  return (
    <div>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  );
}

export default App;
