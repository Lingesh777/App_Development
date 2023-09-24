import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import { Admin } from "./Admin/Admin";
import { TopBar } from "./Bar/TopBar";
import { SideBar } from "./Bar/SideBar";
import { ViewProduct } from "./Admin/ViewProduct";
import { AddProducts } from "./Admin/AddProducts";
import { UpdateProducts } from "./Admin/UpdateProducts";
import { Reports } from "./Admin/Reports";
import { Contacts } from "./Admin/Contacts";
import { Landing } from "./Landing/Landing";
import { Contactus } from "./Navbar/Contactus";
import Privacypolicy from "./Navbar/Privacypolicy";
import Faq from "./Navbar/Faq";
import Aboutus from './Navbar/Aboutus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/about' element={<Aboutus/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/privacy' element={<Privacypolicy/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
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
