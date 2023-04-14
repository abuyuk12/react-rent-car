import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import mobile from "../asset/mobile.png";

const Footer = () => {
  return (
    <div className="flex justify-between h-20 bg-black text-white px-8 relative bottom-0 w-full ">
      <div className="flex gap-5 items-center cursor-pointer">
        <div className="-mt-8">
          <img
            className="bg-primary rounded-xl"
            src={mobile}
            width={60}
            alt="mobile-app"
          />
        </div>
        <p className="md:text-base text-sm">
          Uygulamamızı hemen indirmek için tıklayınız!
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="transition hover:text-secondary cursor-pointer">
          <FaFacebookF size={20} />
        </div>
        <div className="transition hover:text-secondary cursor-pointer">
          <AiOutlineInstagram size={20} />
        </div>
        <div className="transition hover:text-secondary cursor-pointer">
          <FaLinkedinIn size={20} />
        </div>
        <div className="transition hover:text-secondary cursor-pointer">
          <AiOutlineTwitter size={20} />
        </div>
        <div className="transition hover:text-secondary cursor-pointer">
          <TfiYoutube size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
