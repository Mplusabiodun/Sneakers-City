import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/Home";
import "./App.css";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
