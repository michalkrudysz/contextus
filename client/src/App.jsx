import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddPhrase from "./pages/AddPhrase";
import StartLearning from "./pages/StartLearning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "addphrase",
        element: <AddPhrase />,
      },
      {
        path: "startlearning",
        element: <StartLearning />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
