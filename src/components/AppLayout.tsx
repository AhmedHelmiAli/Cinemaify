import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
