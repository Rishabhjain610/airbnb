import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/AuthContext.jsx";
import UserContext from "./Context/UserContext.jsx";
import ListingContext from "./Context/ListingContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ListingContext>
          <UserContext>
            <App />
          </UserContext>
        </ListingContext>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
