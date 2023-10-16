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
import Terms from "./Navbar/Terms";
import { UserHome } from "./User/UserHome";
import { SideBarUser } from "./Bar/SidebarUser";
import { UserViewprod } from "./User/UserViewprod";
import { Cart } from "./User/Cart";
import { Purchased } from "./User/Purchased";
import { UserOrder } from "./User/UserOrder";
import { UserReview } from "./User/UserReview";
import { Userauth } from "./User/Userauth";
import { Adminauth } from "./Admin/Adminauth";
import { States } from "./States";
import { Viewreview } from "./Admin/Viewreview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <States>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/about' element={<Aboutus/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/privacy' element={<Privacypolicy/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/terms' element={<Terms/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path='/topbar' element={<TopBar/>}></Route>
          <Route path='/sidebar' element={<SideBar/>}></Route>
          <Route path='/user/sidebar' element={<SideBarUser/>}></Route>
          <Route path='/viewreview' element={<Viewreview/>}></Route>


          <Route element={<Adminauth/>}>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/viewproduct' element={<ViewProduct/>}></Route>
          <Route path='/addproduct' element={<AddProducts/>}></Route>
          <Route path='/updateproduct/:id' element={<UpdateProducts/>}></Route>
          <Route path='/report' element={<Reports/>}></Route>
          <Route path='/contact' element={<Contacts/>}></Route>
          </Route>

          <Route element={<Userauth/>}>
          <Route path='/user' element={<UserHome/>}></Route>
          <Route path='/user/viewproduct' element={<UserViewprod/>}></Route>
          <Route path='/user/cart' element={<Cart/>}></Route>
          <Route path='/user/purchase' element={<Purchased/>}></Route>
          <Route path='/user/order' element={<UserOrder/>}></Route>
          <Route path='/user/review' element={<UserReview/>}></Route>
          </Route>
        </Routes>
          </States>
      </BrowserRouter>
    </div>
  );
}

export default App;
