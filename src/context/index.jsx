import { createContext } from "react";

//* hada howa sella bin ghatkon data li mhtajha
export const Mycontext = createContext();

//* livreur li ghaydi lina data l ga3 l components o l pages
export const MyProvider = ({ children }) => {
  const userData = {
    user: "sara",
    age: 20,
    city: "casa",
  };
  const all = { userData};

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};
