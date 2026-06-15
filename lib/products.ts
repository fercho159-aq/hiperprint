// Hiperprint — real product catalogue (from the corporate PDF).

export type ProductCat = "cajas" | "contenedores" | "charolas" | "conos";

export interface HpProduct {
  id: string;
  name: string;
  cat: ProductCat;
  img: string;
  desc: string;
  feats: string[];
}

export const HP_PRODUCTS: HpProduct[] = [
  { id: "S001", name: "Caja para hamburguesa", cat: "cajas", img: "/assets/producto-1.png", desc: "Caja de fácil armado con candados de seguridad. Resiste grasa y humedad.", feats: ["Armado rápido", "Candado de seguridad", "Antigrasa"] },
  { id: "S002", name: "Contenedor para hot dog", cat: "contenedores", img: "/assets/producto-2.png", desc: "Resistente a la grasa, pensado para alimentos que se disfrutan al momento.", feats: ["Antigrasa", "Listo para llevar", "Multiusos"] },
  { id: "S004", name: "Contenedor para papas", cat: "contenedores", img: "/assets/producto-3.png", desc: "Para papas a la francesa y frituras. Resistente a la grasa, abierto y práctico.", feats: ["Antigrasa", "Apilable", "Multiusos"] },
  { id: "S005", name: "Charola para snacks", cat: "charolas", img: "/assets/producto-4.png", desc: "Charola abierta para snacks y botanas. Servida y lista al instante.", feats: ["Antigrasa", "Servido directo", "Multiusos"] },
  { id: "S005-B", name: "Charola fondo automático", cat: "charolas", img: "/assets/producto-5.png", desc: "Charola con fondo de armado automático. Útil para todo tipo de alimentos.", feats: ["Fondo automático", "Armado express", "Multiusos"] },
  { id: "S006", name: "Cono para crepas", cat: "conos", img: "/assets/producto-6.png", desc: "Rigidez superior que no se rompe. Para alimentos que se disfrutan al momento.", feats: ["Alta rigidez", "Antigrasa", "Para llevar"] },
  { id: "S007", name: "Contenedor para flautas", cat: "contenedores", img: "/assets/producto-7.png", desc: "Disponible en dos tamaños. Para alimentos calientes o fríos.", feats: ["2 tamaños", "Frío y caliente", "Multiusos"] },
  { id: "S00", name: "Caja colectiva", cat: "cajas", img: "/assets/producto-8.png", desc: "Caja colectiva resistente a la grasa para compartir o llevar pedidos grandes.", feats: ["Gran capacidad", "Antigrasa", "Para llevar"] },
  { id: "S008", name: "Caja tipo Kentucky", cat: "cajas", img: "/assets/producto-9.png", desc: "Resistente a la grasa y humedad. Para alimentos calientes o fríos.", feats: ["Antigrasa", "Frío y caliente", "Multiusos"] },
  { id: "S009", name: "Contenedor multifunción", cat: "contenedores", img: "/assets/producto-10.png", desc: "Caja de fácil armado con candados de seguridad. Para todo tipo de alimentos.", feats: ["Armado rápido", "Candado de seguridad", "Versátil"] },
];

export const HP_CATS: { id: string; label: string }[] = [
  { id: "todos", label: "Todo" },
  { id: "cajas", label: "Cajas" },
  { id: "contenedores", label: "Contenedores" },
  { id: "charolas", label: "Charolas" },
  { id: "conos", label: "Conos" },
];
