import DefaultNavbar from "../navbar/default-navbar";
import Logo from "../../../../public/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="px-6 py-28 lg:flex max-w-5xl mx-auto lg:flex-row-reverse lg:px-0">
        <div className="rounded-md overflow-hidden min-h-[400px]  bg-[url('/assets/shared/mobile/image-best-gear.jpg')] bg-cover bg-center md:max-h-[300px] md:bg-[url('/assets/shared/tablet/image-best-gear.jpg')] lg:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] lg:basis-2/5 lg:max-h-none lg:h-[450px]  lg:min-h-0"></div>
        <div className="flex-1 grid items-center content-center ">
          <h2 className="text-center text-2xl uppercase font-semibold py-8 max-w-[15ch] mx-auto md:text-4xl md:max-w-[20ch] md:font-bold md:leading-10 lg:text-start lg:mx-0">
            Bringing you the <span className="text-dark_orange">best</span>{" "}
            audio gear
          </h2>
          <p className="text-center opacity-50 md:max-w-[63ch] md:mx-auto lg:text-start lg:max-w-[50ch] lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <footer className="flex flex-col items-center px-6  pb-10 max-w-5xl mx-auto  md:items-start">
          <div className="pb-12 pt-12 border-t-4 border-dark_orange">
            <Image src={Logo} alt="company logo" />
          </div>
          <DefaultNavbar orientation="column" />
          <p className="text-center text-light_gray_200 text-opacity-50 my-12 md:text-start">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-white opacity-50 text-center">
            Copyright 2021. All Rights Reserved
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
