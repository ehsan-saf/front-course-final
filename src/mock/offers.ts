export interface OffersMockType {
  category: string;
  title: string;
  rating: number;
  weight: number;
  unit: string;
  price: number;
  sale_price: number;
  label?: string;
  image: string;
  total: number;
  sold: number;
}

export const offersMock: Array<OffersMockType> = [
  {
    category: "Hodo Foods",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4,
    weight: 500,
    unit: "gram",
    price: 110,
    sale_price: 70,
    image: "/images/19.jpg",
    total: 70,
    sold: 20,
  },
  {
    category: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rating: 4,
    weight: 500,
    unit: "gram",
    price: 30,
    sale_price: 27,
    label: "Hot",
    image: "/images/22.jpg",
    total: 50,
    sold: 5,
  },
  {
    category: "Hodo Foods",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rating: 4,
    weight: 500,
    unit: "gram",
    price: 2.51,
    sale_price: 2,
    label: "Sale",
    image: "/images/21.jpg",
    total: 120,
    sold: 90,
  },
  {
    category: "Hodo Foods",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rating: 4,
    weight: 500,
    unit: "gram",
    price: 4.51,
    sale_price: 3.7,
    image: "/images/15.png",
    total: 120,
    sold: 100,
  },
  {
    category: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rating: 4,
    weight: 500,
    unit: "gram",
    price: 4.51,
    sale_price: 3.7,
    image: "/images/22.jpg",
    total: 100,
    sold: 30,
  },
];
