import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Counter from "../components/Counter";

const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="./images/two.jpg"
            className="product_img"
            alt="product_image"
            width="300px"
            height="430px"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-4 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
           Checked 3-Piece Suit
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
          Crafted from premium fabrics, our three-piece suits are available in a range of colors and patterns, allowing you to express your personal style with confidence. Elevate every occasion with our distinguished collection of three-piece suits, where timeless craftsmanship meets contemporary refinement.
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>$70</b>
            </p>

            <div className="colors flex mt-7 text-2xl">
              Colors 
              <div className="colorSelect bg-red-600 w-[2rem] h-[2rem] border-2 p-[10px] ml-[5px] mr-1 rounded-full cursor-pointer hover:border-[#1c5d66]"></div>
              <div className="colorSelect bg-blue-600 w-[2rem] h-[2rem] border-2 p-[10px] ml-[5px] mr-1 rounded-full
              cursor-pointer hover:border-[#1c5d66]"></div>
              <div className="colorSelect bg-yellow-400 w-[2rem] h-[2rem] border-2 p-[10px] ml-[5px] mr-1 rounded-full
              cursor-pointer hover:border-[#1c5d66]"></div>
            </div>

            <div className="mt-7 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#1c5d66] rounded-md shadow-md mt-[30px] p-3 mb-2">
            Add to Cart
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;