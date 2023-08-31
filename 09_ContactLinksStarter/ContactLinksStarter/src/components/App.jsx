import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Search";
import CreateContact from "./CreateContact";
import ContactDetails from "./ContactDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:contactId" element={<ContactDetails />} />
        <Route path="/create" element={<CreateContact />} />
      </Routes>
    </>
  );
}

export default App;
