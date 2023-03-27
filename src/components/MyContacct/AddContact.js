import React, { useState } from "react";
import "./AddContact.css";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const contacts = useSelector((state) => state);
  const contactDispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(contacts);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === number && number
    );
    if (checkEmail) {
      return toast.error("Email Already Exist");
    }
    if (checkNumber) {
      return toast.error("Number Already Exist");
    }
    if (!name || !email || !number) {
      return toast.warning("Please Fill all the fields");
    }

    const contactData = {
      id: contacts[contacts.length - 1].id + 1,
      name: name,
      email: email,
      number: number,
    };
    contactDispatch({ type: "ADD_DATA", payload: contactData });
    toast.success("Contact Added Successfully");
    navigate("/");
  };
  return (
    <div>
      <h2>Add Contact</h2>
      <Card>
        <div className="add_form">
          <form onSubmit={submitHandler}>
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <div>
              <input type="submit" value="Add Contact" className="btn_submit" />
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
export default AddContact;
