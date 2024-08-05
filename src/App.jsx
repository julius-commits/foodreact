import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./food.css";
import Parent from "./Parent";
import Landing from "./pages/landing";
export const UserContext = React.createContext();
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <UserContext.Provider value={{ name: "Ahmed" }} d>
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </UserContext.Provider>
    </>
  );
}

export default App;
