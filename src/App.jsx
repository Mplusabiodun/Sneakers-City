import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import NewestArrival from "./components/sub-details/NewestArrival";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/listing", element: <NewestArrival /> },
    ],
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
