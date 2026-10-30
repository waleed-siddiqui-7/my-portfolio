import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import AdminLOGIN from "./pages/Adminlogin2";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={<Portfolio onAdminClick={() => navigate("/login")} />}
      />

      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <div className="min-h-screen grid place-items-center bg-[#080d18] p-4">
              <div className="w-full max-w-sm">
                <AdminLOGIN
                  onLogin={() => {
                    setIsLoggedIn(true);
                    navigate("/dashboard");
                  }}
                />
              </div>
            </div>
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <Dashboard
              onLogout={() => {
                setIsLoggedIn(false);
                navigate("/");
              }}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;