import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./PageLayout";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Profile from "./Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<PageLayout><Home /></PageLayout>} />
      <Route path="/profile/:nick" element={<PageLayout><Profile /></PageLayout>} />
      <Route path="/detail/:twitId" element={<PageLayout>Twit detail</PageLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
