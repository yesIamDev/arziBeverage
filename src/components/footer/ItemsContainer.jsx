import React from "react";
import Item from "./Item";
import { PRODUCTS, RESSOURCES, COMPANY, SUPPORT } from "./Menu";

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-5">
      <Item links={PRODUCTS} title="PRODUCTS" />
      <Item links={RESSOURCES} title="RESSOURCES" />
      <Item links={COMPANY} title="COMPANY" />
      <Item links={SUPPORT} title="SUPPORT" />
    </div>
  );
}
