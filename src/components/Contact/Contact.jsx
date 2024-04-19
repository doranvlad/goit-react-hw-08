import s from "./Contact.module.css";
import { IoMdPerson, IoMdCall } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handledeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <span>
            <IoMdPerson />
          </span>
          {contact.name}
        </p>
        <p>
          <span>
            <IoMdCall />
          </span>
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => {
          handledeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
