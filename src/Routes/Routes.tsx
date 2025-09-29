import { createHashRouter } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { Login } from "../Auth/Login";
import { ProtectedRoute, PublicOnlyRoute } from "./ProtectedRoutes";
import Timeout from "../Components/Timeout";
import { ForgetPassword } from "../Auth/ForgetPassword";
import { ResetPassword } from "../Auth/ResetPassword";
import { WebLayout } from "../Components/Web/WebLayout";
import { HomePage } from "../Components/Web/HomeInnerPage/HomePage";
import { AboutPage } from "../Components/Web/AboutInnerPage/AboutPage";
import { ContactPage } from "../Components/Web/ContactInnerPage/ContactPage";
import { PricingPage } from "../Components/Web/PricingInnerPage/PricingPage";
import { WebDevelopemt } from "../Components/Web/ServiceInnerPage/WebDevelopemt";
import { GraphicDesign } from "../Components/Web/ServiceInnerPage/GraphicDesign";
import { MobileDevelopemnt } from "../Components/Web/ServiceInnerPage/MobileDevelopemnt";
import { ServicesPage } from "../Components/Web/ServiceInnerPage/ServicesPage";
import { Dashboard } from "../Components/Admin/Dashboard";
import { Users } from "../Components/Admin/Users";
import { SignUp } from "../Auth/SignUp";
import { SignUpConfirm } from "../Auth/SignUpConfirm";

const routes = createHashRouter([
  {
    path: "/",
    element: <PublicOnlyRoute element={<WebLayout />} />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      // {
      //   path: "/pricing",
      //   element: <PricingPage />,
      // },
      {
        path: "/web-development",
        element: <WebDevelopemt />,
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "/mobile-developement",
        element: <MobileDevelopemnt />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <PublicOnlyRoute element={<Login />} />,
  },
  {
    path: "/timeout",
    element: <PublicOnlyRoute element={<Timeout />} />,
  },
  {
    path: "/forget-password",
    element: <PublicOnlyRoute element={<ForgetPassword />} />,
  },
  {
    path: "/reset-password",
    element: <PublicOnlyRoute element={<ResetPassword />} />,
  },
  {
    path: "/signup",
    element: <PublicOnlyRoute element={<SignUp />} />,
  },
  {
    path: "/signup-confirm",
    element: <PublicOnlyRoute element={<SignUpConfirm />} />,
  },
  {
    path: "/",
    element: <ProtectedRoute element={<Layout />} />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default routes;
