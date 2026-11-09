import { Outlet } from "react-router";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout() {
  return (
    <>
      <Cabecalho />

      <main>
        <Outlet />
      </main>

      <Rodape />
    </>
  );
}

export default Layout;