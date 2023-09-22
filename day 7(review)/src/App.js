import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import { Navbar } from "./Navbar/Navbar";
import { Admin } from "./Admin/Admin";
import { TopBar } from "./Bar/TopBar";
import { SideBar } from "./Bar/SideBar";
import { ViewProduct } from "./Admin/ViewProduct";
import { AddProducts } from "./Admin/AddProducts";
import { UpdateProducts } from "./Admin/UpdateProducts";
import { Reports } from "./Admin/Reports";
import { Contacts } from "./Admin/Contacts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/admin/:email" element={<Admin/>}></Route>
          <Route path='/topbar' element={<TopBar/>}></Route>
          <Route path='/sidebar' element={<SideBar/>}></Route>
          <Route path='/viewproduct' element={<ViewProduct/>}></Route>
          <Route path='/addproduct' element={<AddProducts/>}></Route>
          <Route path='/updateproduct' element={<UpdateProducts/>}></Route>
          <Route path='/report' element={<Reports/>}></Route>
          <Route path='/contact' element={<Contacts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
