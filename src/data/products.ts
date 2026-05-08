export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: "/assets/images/chair-z.png",
    name: 'Стул «З» бирюза/опора черная',
    price: 7999,
  },
  {
    id: 2,
    image: "/assets/images/sofa-vector.png",
    name: 'Диван-кровать раскладной «Вектор»',
    price: 14999,
  },
  {
    id: 3,
    image: "/assets/images/armchair-soft.png",
    name: 'Кресло-кровать «Софт»',
    price: 8500,
  },
];