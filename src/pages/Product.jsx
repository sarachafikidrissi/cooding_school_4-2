import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
    const navigate = useNavigate()


  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      price: 9.99,

      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      price: 19.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      price: 14.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      price: 12.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      price: 8.99,

      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      description:
        "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      price: 49.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      description:
        "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      price: 129.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    },
    {
      id: 8,
      title: "Dior J'adore",
      description:
        "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      price: 89.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    },
    {
      id: 8,
      title: "Dior J'adore",
      description:
        "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      price: 89.99,
      stock: 99,
      images:
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    },
  ];
  const [sl3a, setSl3a] = useState(products);
  const buy = (index) => {
    //* array dl wassakh
    const newProductList = [...sl3a];
    newProductList[index].stock -= 1;

    //* htt dakchi li s7i7 fnlwasakh f lwa9a assliya
    setSl3a(newProductList);
  };
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <Navbar />

      <div className="grid grid-cols-3 gap-4 ">
        {sl3a.map((product, index) => (
          <div
            key={index}
            className="w-[20vw] h-[50vh] border-2 border-gray-400 rounded-md flex flex-col gap-y-2 p-2"
          >
            <div className="w-full h-[60%] bg-red-100 rounded-md">
              <img
                src={product.images}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex  items-center justify-between">
              <h1 className="font-semibold text-xl">{product.title}</h1>
              <span className="font-medium text-gray-600">
                {product.price}$
              </span>
            </div>
            <p className="truncate">{product.description}</p>
            <div className="flex items-center justify-evenly">
              <button
                className="flex items-center bg-green-200 px-4 py-1.5 rounded-sm gap-x-4 font-medium"
                onClick={() => buy(index)}
              >
                <SlBasket size={20} />
                <span>Buy</span>
              </button>
                <button className="flex items-center bg-green-200 px-4 py-1.5 rounded-sm gap-x-4 font-medium" onClick={() => {navigate(`/product/${product.id}`)}}>
                  <span>show</span>
                </button>
              {/* <Link to={{ pathname: "/product/" + product.id }}>
              </Link> */}

              <span className="font-medium text-gray-600">{product.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
