import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


//* hada howa sella bin ghatkon data li mhtajha
export const Mycontext = createContext();

//* livreur li ghaydi lina data l ga3 l components o l pages
export const MyProvider = ({ children }) => {
  const navigateTo = useNavigate()

  const [users, setUsers] = useState([{username: 'Sara Chafik Idrissi', email: 'user1@demo.com', password: '1234'}])
  const [books, setBooks] = useState([ ])
  const [activeUser, setActiveUser] = useState(users[0])
    const [opendModal, setOpenModal] = useState(false);
  console.log(books);  

  
  // const userData = {
  //   user: "sara",
  //   age: 20,
  //   city: "casa",
  // };
  const all = { navigateTo, users, setUsers, activeUser, setActiveUser, books, setBooks, opendModal, setOpenModal};

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};
