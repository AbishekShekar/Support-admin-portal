import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CustomerDetails from "./pages/CustomerDetails";
import Dashboard from "./pages/Dashboard";
import Requests from "./pages/Requests";
import Renewals from "./pages/Renewals";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <BrowserRouter>

      <div className={darkMode ? "dark" : ""}>

        <div
          className="
            min-h-screen
            bg-gray-100
            text-black
            dark:bg-slate-900
            dark:text-white
          "
        >
        <div className="flex w-full min-h-screen">

            <Sidebar darkMode={darkMode} />

            <div className="flex-1 p-8 w-full">

              <Routes>

                <Route
                  path="/"
                  element={
                    <Dashboard darkMode={darkMode} />
                  }
                />

                <Route
                  path="/requests"
                  element={
                    <Requests darkMode={darkMode} />
                  }
                />

                <Route
                  path="/renewals"
                  element={
                    <Renewals darkMode={darkMode} />
                  }
                />

                <Route
                  path="/customers"
                  element={
                    <Customers darkMode={darkMode} />
                  }
                />

                <Route
                  path="/settings"
                  element={
                    <Settings
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                    />
                  }
                />

                <Route
                  path="*"
                  element={
                    <h1 className="text-4xl p-8">
                      Page Not Found
                    </h1>
                  }
                />
                <Route
                  path="/navbar"
                  element={
                    <Navbar 
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                    />
                  }
                />
                <Route
                  path="/customers/:id"
                   element={
                  <CustomerDetails 
                  darkMode={darkMode} 
                  setDarkMode={setDarkMode}
                  />
  }
/>

              </Routes>

            </div>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;