import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Search";
import CreateContact from "./CreateContact";
import ContactDetails from "./ContactDetails";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:contactId" element={
          <ErrorBoundary>
        <ContactDetails />
        </ErrorBoundary>
        } />
        <Route path="/create" element={<CreateContact />} />
      </Routes>
    </>
  );
}

export default App;
