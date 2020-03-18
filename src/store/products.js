import { readable } from "svelte/store";

const initialProducts = [
  {
    id: 1,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 1`,
    price: 11
  },
  {
    id: 2,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 2`,
    price: 23
  },
  {
    id: 3,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 3`,
    price: 12
  },
  {
    id: 4,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 4`,
    price: 9
  },
  {
    id: 5,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 5`,
    price: 6
  },
  {
    id: 6,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 6`,
    price: 16
  },
  {
    id: 7,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 7`,
    price: 11
  },
  {
    id: 8,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 8`,
    price: 5
  },
  {
    id: 9,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 9`,
    price: 66
  },
  {
    id: 10,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 10`,
    price: 8
  },
  {
    id: 11,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 11`,
    price: 11
  },
  {
    id: 12,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 12`,
    price: 18
  },
  {
    id: 13,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 13`,
    price: 11
  },
  {
    id: 14,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 14`,
    price: 73
  },
  {
    id: 15,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 15`,
    price: 42
  },
  {
    id: 1,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 16`,
    price: 15
  },
  {
    id: 16,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 17`,
    price: 54
  },
  {
    id: 17,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 18`,
    price: 11
  },
  {
    id: 18,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 19`,
    price: 65
  },
  {
    id: 19,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 20`,
    price: 98
  },
  {
    id: 20,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 21`,
    price: 69
  },
  {
    id: 21,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 22`,
    price: 55
  },
  {
    id: 22,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 23`,
    price: 26
  },
  {
    id: 23,
    imgSrc: `assets/pepe2.jpg`,
    name: `Pepe 24`,
    price: 88
  },
  {
    id: 24,
    imgSrc: `assets/pepe3.jpg`,
    name: `Pepe 25`,
    price: 35
  },
  {
    id: 25,
    imgSrc: `assets/pepe1.jpg`,
    name: `Pepe 26`,
    price: 22
  }
];

export const products = readable(initialProducts);
