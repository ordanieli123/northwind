import { Routing } from "../Routing/Routing";
import { Copyrights } from "../Copyrights/Copyrights";
import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import "./Layout.css";

export function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <Header></Header>
      </header>

      <aside>
        <Menu></Menu>
      </aside>
      <main>
        <Routing></Routing>
      </main>
      <footer>
        <Copyrights />
      </footer>
    </div>
  );
}
