import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import SerieCardsViewer from "./pages/setCardsViewer";
import NotFound from "./pages/notFound";


function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/series/:setName",
        element: <SerieCardsViewer />
      },
      {
        path: "*",
        element: <NotFound />
      }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;
