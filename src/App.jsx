import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/Home";
import RootLayout from "./components/RootLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
