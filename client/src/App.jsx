import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import { loginAction, registerAction } from "./services/authActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <SignUp />,
        action: registerAction,
      },
    ],
  },
  {
    path: "dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
