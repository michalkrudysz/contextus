import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddPhrase from "./pages/AddPhrase";
import StartLearning from "./pages/StartLearning";
import GiveWord from "./pages/GiveWord";
import VerificationCode from "./components/VerificationCode";
import LoadingPage from "./components/LoadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <LoadingPage content="Wystąpił błąd. Kliknij na logo, aby wrócić do domyślnej strony..." />
    ),
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
        path: "giveword",
        element: <GiveWord />,
      },
      {
        path: "startlearning",
        element: <StartLearning />,
      },
    ],
  },
  {
    path: "verification",
    element: <VerificationCode />,
  },
  {
    path: "*",
    element: (
      <LoadingPage content="Wystąpił błąd. Kliknij na logo, aby wrócić do domyślnej strony..." />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
