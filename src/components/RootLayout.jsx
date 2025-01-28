import { Outlet } from "react-router-dom";
import Header from "./home/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
