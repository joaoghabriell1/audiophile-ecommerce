import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../../public/assets/right-arrow.svg";

const ShopNavbar = () => {
  return (
    <nav className="bg-white py-10 px-4">
      <ul className="max-w-5xl mx-auto my-12 flex flex-col gap-16 md:flex-row md:gap-2 ">
        <Link className="md:flex-1" href="/headphones">
          <li className="bg-light_gray_200 text-center flex flex-col p-6 rounded-md max-w-xs mx-auto md:max-w-none md:mx-0">
            <div className="relative flex justify-center min-h-[35px]">
              <Image
                className="absolute -mt-16"
                width={120}
                height={100}
                src="/assets/shared/desktop/image-category-thumbnail-headphones.png "
                alt="headphones icon"
              />
            </div>
            <h4 className="uppercase tracking-wide font-bold my-4">
              headphones
            </h4>
            <span className="text-black flex justify-center items-center uppercase text-opacity-50 font-bold gap-4">
              shop
              <Image width={8} height={10} src={Arrow} alt="arrow icon" />
            </span>
          </li>
        </Link>
        <Link className="md:flex-1" href="/speakers">
          <li className="bg-light_gray_200 text-center flex flex-col p-6 rounded-md max-w-xs mx-auto md:max-w-none md:mx-0">
            <div className="relative flex justify-center min-h-[35px]">
              <Image
                className="absolute -mt-16"
                width={120}
                height={100}
                src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                alt="headphones icon"
              />
            </div>
            <h4 className="uppercase tracking-wide font-bold my-4">speakers</h4>
            <span className="text-black flex justify-center items-center uppercase text-opacity-50 font-bold gap-4">
              shop
              <Image width={8} height={10} src={Arrow} alt="arrow icon" />
            </span>
          </li>
        </Link>
        <Link className="md:flex-1" href="/earphones">
          <li className="bg-light_gray_200 text-center flex flex-col p-6 rounded-md max-w-xs mx-auto md:max-w-none md:mx-0">
            <div className="relative flex justify-center min-h-[35px]">
              <Image
                className="absolute -mt-16"
                width={140}
                height={100}
                src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                alt="headphones icon"
              />
            </div>
            <h4 className="uppercase tracking-wide font-bold my-4">
              earphones
            </h4>
            <span className="text-black flex justify-center items-center uppercase text-opacity-50 font-bold gap-4">
              shop
              <Image width={8} height={10} src={Arrow} alt="arrow icon" />
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default ShopNavbar;
