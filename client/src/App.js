import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import OTP from "./pages/OTP/OTP";
import Users from "./pages/Users/Users";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
