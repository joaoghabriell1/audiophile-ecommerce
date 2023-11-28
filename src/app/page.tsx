import Button from "./components/button";
import ShopNavbar from "./components/shop-navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="relative">
        <section className=" max-w-5xl mx-auto flex items-center justify-center text-center min-h-[calc(100vh-89.8px)]  lg:justify-normal lg:text-start">
          <div className="absolute -mt-20 inset-0 bg-red-100 bg-center bg-cover bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/tablet/image-header.jpg')] lg:bg-[url('/assets/home/desktop/image-header.jpg')] "></div>
          <div className="relative z-10">
            <h3 className="text-white  text-opacity-50 uppercase tracking-[10px] text-base font-semibold ">
              New Product
            </h3>
            <h2 className="text-white text-3xl leading-10 line font-bold mt-4 mb-6 md:text-5xl md:max-w-[15ch] md:leading-tight">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="text-white text-opacity-75 max-w-[30ch] mx-auto md:max-w-[40ch] leading-relaxed lg:mx-0 lg:mt-6 lg:mb-10">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button content="see product" variant="fill" />
          </div>
        </section>
      </div>
      <ShopNavbar />
      <Footer />
    </main>
  );
}
