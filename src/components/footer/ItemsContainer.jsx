
import Item from "./Item";
import { PRODUITS, RESSOURCES, COMPANY, SUPPORT } from "./Menu";

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 text-sm sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-5">
      <Item links={PRODUITS} title="PRODUITS" />
      <Item links={RESSOURCES} title="RESSOURCES" />
      <Item links={COMPANY} title="COMPANY" />
      <Item links={SUPPORT} title="SUPPORT" />
    </div>
  );
}
