import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddPhrase from "./pages/AddPhrase";
import GiveWord from "./pages/GiveWord";
import VerificationCode from "./components/VerificationCode";
import LoadingPage from "./components/LoadingPage";
import StartLearning from "./pages/StartLearning";
import useWindowSize from "./utils/useWindowSize";

function App() {
  const [width] = useWindowSize();

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        width >= 1200 ? (
          <Home />
        ) : (
          <LoadingPage content="Obecnie aplikacja jest kompatybilna wyłącznie z urządzeniami, które mają wyświetlacze o rozdzielczości przekraczającej 1200 pikseli. Prosimy o ponowne uruchomienie za pomocą laptopa lub komputera stacjonarnego." />
        ),
      errorElement: (
        <LoadingPage content="Wystąpił błąd. Kliknij na logo, aby wrócić do domyślnej strony..." />
      ),
    },
    {
      path: "dashboard",
      element:
        width >= 1200 ? (
          <ProtectedRoute />
        ) : (
          <LoadingPage content="Obecnie aplikacja jest kompatybilna wyłącznie z urządzeniami, które mają wyświetlacze o rozdzielczości przekraczającej 1200 pikseli. Prosimy o ponowne uruchomienie aplikacji za pomocą laptopa lub komputera stacjonarnego." />
        ),
      children: [
        {
          index: true,
          element:
            width >= 1200 ? (
              <Dashboard />
            ) : (
              <LoadingPage content="Obecnie aplikacja jest kompatybilna wyłącznie z urządzeniami, które mają wyświetlacze o rozdzielczości przekraczającej 1200 pikseli. Prosimy o ponowne uruchomienie aplikacji za pomocą laptopa lub komputera stacjonarnego." />
            ),
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

  return (
    <Suspense fallback={<LoadingPage content="Trwa ładowanie..." />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
