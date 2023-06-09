import React from "react";
import { categories, NFTData } from "../../Data/NFTData";
import NFTCard from "./NFTCard";
import "./Listing.css";

function NFTListing() {

  return (
    <div className="listing_box m-9 flex flex-col gap-16">
      <div className="category_box flex justify-around mb-9">
        {categories.map((ele) => {
          return (
            <a href={`#${ele.name.toLowerCase()}nft_box`}>
              <div className="categories flex p-3 w-56 gap-5 items-center rounded-xl border hover:border-blue-600 border-transparent">
                <img src={ele.image} alt="" className="w-10" />
                <h3 className="category_name text-xl font-medium">
                  {ele.name}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
      <div id="trending_nft_box" className="px-7">
        <h2 className="category_name gradient-text text-4xl font-bold my-6">
          Trending NFTs
        </h2>
        <div className="nft_listing gap-7  overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele => ele.isTrending).map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
      <div id="artsnft_box" className="px-7">
        <div className="category_name gradient-text text-4xl font-bold my-6">
          Arts
        </div>
        <div className="nft_listing gap-7 overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele => ele.type === "Art").map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
      <div id="musicnft_box" className="px-7">
        <div className="category_name gradient-text text-4xl font-bold my-6">
          Music
        </div>
        <div className="nft_listing gap-7  overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele => ele.type === "Music").map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
      <div id="collectiblesnft_box" className=" px-7">
        <div className="category_name gradient-text text-4xl font-bold my-6">
          Collectible
        </div>
        <div className="nft_listing gap-7  overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele => ele.type === "Collectible").map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
      <div id="sportnft_box" className="px-7">
        <div className="category_name gradient-text text-4xl font-bold my-6">
          Sports
        </div>
        <div className="nft_listing gap-7  overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele=>ele.type === "Sports").map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
      <div id="animenft_box" className="px-7">
        <div className="category_name gradient-text text-4xl font-bold my-6">
          Anime
        </div>
        <div className="nft_listing gap-7  overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele=>ele.type === "Anime").map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
      <div id="carsnft_box" className="px-7">
        <div className="category_name gradient-text text-4xl font-bold my-6">
          Cars
        </div>
        <div className="nft_listing gap-7  overflow-x-scroll scrollbar-hide">
          {NFTData &&
            NFTData.filter(ele => ele.type === "Cars").map((ele, index) => {
              return (
                <NFTCard
                  key={index}
                  id={ele.id}
                  name={ele.name}
                  image={ele.image}
                  description={ele.description}
                  type={ele.type}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default NFTListing;
