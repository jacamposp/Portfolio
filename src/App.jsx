import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Index from "./components/Index";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
