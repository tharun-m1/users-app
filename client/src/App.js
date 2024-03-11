import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import OTP from "./pages/OTP/OTP";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </>
  );
}

export default App;
