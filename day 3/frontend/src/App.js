import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
