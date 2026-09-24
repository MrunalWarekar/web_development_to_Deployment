export const CURRENCY = "INR";
export const STORE_NAME = "Store Name";

export const CATALOG = [
  {
    id: "product-1",
    position: 1,
    name: "One plus 15",
    description: "One plus 15 is a flagship smartphone with cutting-edge features and performance.",
    price: 5500000,
    image: "/images/oneplus15.jpg",
    category: "Category 1",
  },
  {
    id: "product-2",
    position: 2,
    name: "samsung Galaxy S25",
    description: "samsung Galaxy S25 is the latest model in the samsung Galaxy series.",
    price: 6500000,
    image: "/images/s25.jpg",
    category: "Category 1",
  },
  {
    id: "product-3",
    position: 3,
    name: "Samsung galaxy a57",
    description: "Samsung galaxy a57 is a mid-range smartphone with good performance.",
    price: 3000000,
    image: "/images/a57.jpg",
    category: "Category 1",
  },
  {
    id: "product-4",
    position: 4,
    name: "Iphone",
    description: "Iphone Duo is newlylaunched apple's first foldable handset is a premium range smartphone",
    price: 40000000,
    image: "/images/iphoneduo.jpg",
    category: "Category 2",
  },
  {
    id: "product-5",
    position: 5,
    name: "MacBook Pro",
    description: "Description of product 5",
    price: 5000000,
    image: "/images/mac.jpg",
    category: "Category 2",
  },
  {
    id: "product-6",
    position: 6,
    name: "Ipad",
    description: "Description of product 6",
    price: 60000,
    image: "/images/ipad.jpg",
    category: "Category 2",
  },
];

export function findProduct(id) {
  return CATALOG.find((product) => product.id === id) || null;
}

export function toPublicProduct({ id, name, description, price, image, category }) {
  return { id, name, description, price, image, category };
}
