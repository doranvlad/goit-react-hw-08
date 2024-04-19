import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {
  selectIsError,
  selectIsLoading,
  selectFilteredContacts,
} from "../../redux/contacts/slice";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      {loading && !error && <b>Request in progress...</b>}
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
