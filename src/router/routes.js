import HomePage from "../pages/HomePage";
import SHomePage from "../pages/shopping/SHomePage";
import HHomePage from "../pages/housing/HHomePage";
import AuthPage from "../pages/auth/AuthPage";
import Profile from "../pages/auth/profile/Profile";
import { ErrorPage } from "../pages/error/ErrorPage";
import { ContactPage } from "../pages/contact/ContactPage";


const Home = () => (<HomePage/>);
const ShoppingHome = () => (<SHomePage/>);
const HousingHomePage = () => (<HHomePage/>);
const Auth = () => (<AuthPage/>);
const ProfilePage = () => (<Profile/>);
const Error = () => (<ErrorPage/>);
const Contact = () => (<ContactPage/>);


export { Home, ShoppingHome, HousingHomePage, Auth, ProfilePage, Error, Contact };