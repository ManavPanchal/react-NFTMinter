import React from "react";
import { Link } from "react-router-dom";
import { applogo, homeImage } from "../Data/images/images";
import MsgHandler from "./configuration/MsgHandler";

function Home() {
  return (
    <div className="home_page flex justify-around items-center m-16 mt-28">
      <div className="welcome_box w-128 flex justify-between flex-col gap-5 break-words">
        <p className="info_box break-words text-7xl text-white font-semibold">
          Mint Your Own Unique NFTs Easily with NFTMinter
        </p>
        <p className="breack-word text-lg text-slate-400">
          Create and own one-of-a-kind digital assets with NFTminter. Our
          platform allows you to easily mint NFTs and unleash your creativity.
          Whether you're an artist, musician, or content creator, NFTminter
          empowers you to showcase your work and engage with your fans like
          never before. Join the NFT revolution and start minting your own
          tokens now.
          {/* "Create and Sell Your Own Customizable NFTs with Just a Few Clicks Using Our User-Friendly Platform. Get Started Now!" */}
        </p>
        <Link to="/nft-listing">
          <button className="mint_btn w-128 h-12 rounded-xl text-center border border-blue-600">
            Mint
          </button>
        </Link>
      </div>
      <div className="nft_box w-fit h-fit rounded-lg shadow-lg text-black text-xs flex flex-col gap-3 pb-4">
        <div className="nft_img rounded-lg">
          <img
            src={homeImage}
            alt="nftImage"
            className="rounded-lg w-80 border-blue-600"
          />
        </div>
        <div className="nft_metadata px-3">
          <p>#03</p>
          <p className="nft_name text-base font-bold">Minted NFT Card</p>
          <p>NFT of a person Minting the nft</p>
        </div>
        <div className="nft_price px-3 text-base font-medium">$23.11</div>
        <div className="nft_owner_info px-3 flex items-center gap-3">
          <img
            src={applogo}
            alt=""
            className="owner_profile rounded-full w-9 h-9"
          />
          <div className="owner_address text-base">0xbcc878...02f8</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
