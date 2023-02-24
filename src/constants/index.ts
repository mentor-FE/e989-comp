import { partners } from "./../assets/index";

export const Routes = [
  { path: "/", label: "Главная", anchor: "" },
  { path: "", label: "Проверить заявку" },
  { path: "/#section-2", label: "Гарантийный ремонт", anchor: "section-2" },
  { path: "/#section-3", label: "Контакты", anchor: "section-3" },
];

export const Partners = [
  { name: "aser", path: partners.aser },
  { name: "aquarius", path: partners.aquarius },
  { name: "brother", path: partners.brother },
  { name: "cyberpower", path: partners.cyberpower },
  { name: "defender", path: partners.defender },
  { name: "depo", path: partners.depo },
  { name: "electric", path: partners.electric },
  { name: "iek", path: partners.iek },
  { name: "kraftway", path: partners.kraftway },
  { name: "krauler", path: partners.krauler },
  { name: "lexmark", path: partners.lexmark },
  { name: "mikrolab", path: partners.mikrolab },
  { name: "packard_bell", path: partners.packard_bell },
  { name: "tenda", path: partners.tenda },
];
