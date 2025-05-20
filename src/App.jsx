import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUsPage from "./pages/about/About";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import ContactPage from "./pages/contact-us/Contact-us";
import CareersPage from "./pages/careers/careers";
import Blogs from "./pages/blogs/Blogs";
import Sidebar from "./common/sideBar/SideBar";
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import MultiStepForm from "./components/MultiStepForm";

const Layout = () => {
  return (
    <>
    <ScrollRestoration />
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/careers",
        element: <CareersPage />,
      },
      {
        path:"/registration",
        element: <MultiStepForm />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "*",
        element: <h2>404 Page Not Found</h2>,
      },
    ],
  },
], {
  // Enable scroll restoration
  unstable_scrollRestoration: true,
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;