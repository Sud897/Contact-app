import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../UI/Card";
import "./EditContact.css";
const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const contactDispatch = useDispatch();

  const navigate = useNavigate();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  // console.log(currentContact);
  const submitHandler = (event) => {
    event.preventDefault();
    const checkEmail = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === number && number
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
      id: parseInt(id),
      name: name,
      email: email,
      number: number,
    };
    contactDispatch({ type: "EDIT_DATA", payload: contactData });
    toast.success("Contact Edited Successfully");
    navigate("/");
  };
  return (
    <div>
      <h2>Edit Contact {id}</h2>
      {currentContact ? (
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
                <input
                  type="submit"
                  value="Add Contact"
                  className="btn_submit"
                />
                <Link to="/" className="cancel">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </Card>
      ) : (
        <h2>Contact with id:{id} not found</h2>
      )}
    </div>
  );
};
export default EditContact;
