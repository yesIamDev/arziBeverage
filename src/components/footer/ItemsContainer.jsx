
import Item from "./Item";
import { PRODUITS, RESSOURCES,ARZI, SUPPORT } from "./Menu";

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 text-sm sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-5">
      <Item links={PRODUITS} title="PRODUITS" />
      <Item links={RESSOURCES} title="RESSOURCES" />
      <Item links={SUPPORT} title="SUPPORT" />
      <Item links={ARZI} title="ARZI" />

    </div>
  );
}
