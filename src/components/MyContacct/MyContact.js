import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../UI/Card";
import "./MyContact.css";
const MyContact = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const contactDeleteHandler = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
    toast.success("Contact Deleted Successfully!!");
  };
  return (
    <div>
      {contacts.length !== 0 ? (
        <Card>
          <h2>Welcome to My Contact</h2>
          <table className="center">
            <thead>
              <tr>
                <th>Sl_No.</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link className="edit" to={`/edit/${contact.id}`}>
                      Edit
                    </Link>
                    <button
                      className="delete"
                      onClick={() => contactDeleteHandler(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <h2>No Contact Found</h2>
      )}
    </div>
  );
};
export default MyContact;
