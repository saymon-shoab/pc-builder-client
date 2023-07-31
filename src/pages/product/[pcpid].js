import { addPcp } from "@/redux/features/pcbuilder/pcbuilderSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ProductDetailPage = ({ singlePcProduct }) => {
  const dispatch = useDispatch();
  const handleAddPcp = (pcp) => {
    // const newPcp = {
    //   productName: "CPU",
    //   image: "/cpu.jpg",
    //   price: "200",
    // };
    dispatch(addPcp(singlePcProduct));
  };
  return (
    <>
      <div className="mx-auto px-4 py-8">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
          {/* Product Image */}
          <div className="w-2/3">
            <Image
              src={singlePcProduct?.image}
              height={500}
              width={1000}
              alt="Product Image"
              // className="w-full h-64 object-cover"
            />
          </div>
          {/* Product Information */}

          {/* ... (remaining content remains the same) ... */}
          <div className="w-2/3 p-4">
            <div className="mb-2">
              {/* Product Name */}
              <h2 className="text-2xl font-bold mb-2">
                {singlePcProduct?.productName}
              </h2>
              {/* Category */}
              <div className="mb-2">
                <span className="text-sm text-gray-600">Category: </span>
                <span className="text-sm font-semibold">
                  {singlePcProduct?.catagory}
                </span>
              </div>
              {/* Status */}
              <div className="mb-2">
                <span className="text-sm text-gray-600">Status: </span>
                <span className="text-sm font-semibold text-green-600">
                  {singlePcProduct?.status}
                </span>
                {/* Replace the above line with the following if the product is out of stock */}
                {/* <span className="text-sm font-semibold text-red-600">Out of Stock</span> */}
              </div>
              {/* Price */}
              <div className="mb-2">
                <span className="text-xl font-bold">
                  {singlePcProduct?.price}TK
                </span>
              </div>
            </div>
            {/* Key Features */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-4">
                <li>Brand: {singlePcProduct?.keyFeatures?.brand}</li>
                <li>Model: {singlePcProduct?.keyFeatures?.model}</li>
                <li>Specification: Specification details</li>
                {/* Add more key features as needed */}
              </ul>
            </div>

            {/* Average Rating */}
            <div className="mb-4">
              <span className="text-sm text-gray-600">Average Rating: </span>
              <span className="text-sm font-semibold text-yellow-500">
                {singlePcProduct?.avarageRating}
              </span>
            </div>
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-sm text-gray-700">
                {singlePcProduct?.Description}
              </p>
            </div>
            {/* Reviews */}
            <div className="w-full mt-1 bg-yellow-400 rounded-md p-2 text-center font-bold">
              <button onClick={handleAddPcp}>Add to Builder</button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Reviews</h3>
              <div className="bg-gray-200 p-4 rounded-lg">
                {/* Sample Review */}
                <div className="mb-2">
                  <span className="text-sm font-semibold">John Doe:</span>
                  <span className="text-sm text-gray-600">
                    "Great product, highly recommended!"
                  </span>
                </div>
                {/* Add more reviews as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-frz8zqn6j-saymon-shoab.vercel.app/api/v1/pc/${params.pcpid}`
  );
  const data = await res.json();
  console.log("single product data", data);
  return {
    props: {
      singlePcProduct: data.data,
    },
  };
};
