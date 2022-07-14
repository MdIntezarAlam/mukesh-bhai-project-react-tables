import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './UserForm/Login'
import Register from './UserForm/Register'
import { PAGE_PATHS } from "./utils/constants";
import DiscountsAndCoupons from './containers/DiscountsAndCoupons'
import GeoTagging from "./containers/GeoTagging";
import ManageBrand from "./containers/ManageBrand";
import ManageCategory from "./containers/ManageCategory.js";
import ManageContractor from "./containers/ManageContractor";
import ManageLocation from "./containers/ManageLocation";
import ManageProduct from "./containers/ManageProduct";
import ManageRoles from "./containers/ManageRoles";
import ManageUsers from "./containers/ManageUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PAGE_PATHS.root} element={<Register />} />
        <Route path={PAGE_PATHS.REGISTER} element={<Register />} />
        <Route path={PAGE_PATHS.LOGIN} element={<Login />} />
        <Route path={PAGE_PATHS.DISCOUNTS_AND_COUPONS} element={<DiscountsAndCoupons />} />
        <Route path={PAGE_PATHS.GEO_TAGGING} element={<GeoTagging />} />
        <Route path={PAGE_PATHS.MANAGE_BRAND} element={<ManageBrand />} />
        <Route path={PAGE_PATHS.MANAGE_CATEGORY} element={<ManageCategory />} />
        <Route path={PAGE_PATHS.MANAGE_CONTRACTOR} element={<ManageContractor />} />
        <Route path={PAGE_PATHS.MANAGE_LOCATION} element={<ManageLocation />} />
        <Route path={PAGE_PATHS.MANAGE_PRODUCT} element={<ManageProduct />} />
        <Route path={PAGE_PATHS.MANAGE_ROLES} element={<ManageRoles />} />
        <Route path={PAGE_PATHS.MANAGE_USERS} element={<ManageUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
