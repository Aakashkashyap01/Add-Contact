import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactList = (props) => {
  const {contacts, removeContact} = props
  console.log(contacts);
  const contactList = contacts.map((contact, index) => (
    <div key={index} className="contacts">
      <div style={{ marginLeft: "2px", fontSize: "20px" }}>
        {contact.data.name}
      </div>
      <div className="email">{contact.data.email}</div>
      <span onClick={()=>removeContact(contact.id)}>
        <DeleteIcon/>
      </span>
    </div>
  ));
  return (
    <div>
      <div className="contact-header">Contact List</div>
      <div>{contactList}</div>
    </div>
  );
};

export default ContactList;
