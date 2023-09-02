import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Search";
import CreateContact from "./CreateContact";
import ContactDetails from "./ContactDetails";
import ErrorBoundary from "./ErrorBoundary";
import { UserProvider } from "../context/UserContext.js";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path="/:contactId"
            element={
              <ErrorBoundary>
                <ContactDetails />
              </ErrorBoundary>
            }
          />
          <Route path="/create" element={<CreateContact />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
