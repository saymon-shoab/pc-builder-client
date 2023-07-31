import CategoryCard from "@/components/CategoryCard";
import PcBuildCard from "@/components/PcBuildCard/PcBuildCard";
import React from "react";
import { useSelector } from "react-redux";

const categories = [
  {
    category: "CPU / Processor",
    categoryUrl: "/processor",
    image: "https://i.ibb.co/qDKMPwh/fan-4854208.png",
  },
  {
    category: "Motherboard",
    categoryUrl: "/motherboard",
    image: "https://i.ibb.co/rMYjfVP/motherboard-1470160.png",
  },
  {
    category: "RAM",
    categoryUrl: "/ram",
    image: "https://i.ibb.co/nCHMFmk/ram-7814971.png",
  },
  {
    category: "Power Supply Unit",
    categoryUrl: "/powerSupply",
    image: "https://i.ibb.co/qDKMPwh/fan-4854208.png",
  },
  {
    category: "Storage Device",
    categoryUrl: "/storage",
    image: "https://i.ibb.co/jfrqmHm/storage.png",
  },
  {
    category: "Monitor",
    categoryUrl: "/monitor",
    image: "https://i.ibb.co/wcNjvmC/monitor.webp",
  },
];
const pcbuilder = () => {
  const productPcps = useSelector((state) => state.cpbuilder.productPcps);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">PC Builder</h1>
        <div className="flex flex-col space-y-4 items-center">
          {productPcps?.map((cat) => (
            <PcBuildCard key={cat._id} cat={cat} />
          ))}
        </div>
        <div className="flex flex-col space-y-4 items-center">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.category}
              category={cat.category}
              image={cat.image}
              url={cat.categoryUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default pcbuilder;
