import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import { BiArrowBack } from "react-icons/bi"
import Image from "next/image"

const SlideImage = ({ src }) => (
  <div>
    <Image
      src={src}
      className="object-cover"
      alt="image"
      width={1920}
      height={1080}
      priority
    />
    <div className="absolute bg-black bg-opacity-50 top-[55%] md:left-[5%] md:top-[40%] text-white m-4 p-2 leading-9 z-20">
      <div className="text-secondary-200">-- NEW ITEMS</div>
      <h1 className="uppercase leading-[1.167]">Summer Sale</h1>
      <div className="font-bold text-secondary-300 underline">
        Discover More
      </div>
    </div>
  </div>
)

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto md:min-h-screen">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:left-[0px]  md:top-[50%] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 md:top-[50%] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <SlideImage src="/assets/slide-1.jpeg" />
        <SlideImage src="/assets/slide-2.jpeg" />
        <SlideImage src="/assets/slide-3.jpeg" />
        <SlideImage src="/assets/slide-4.jpeg" />
        <SlideImage src="/assets/slide-5.jpeg" />
      </Carousel>
    </div>
  )
}

export default HeroBanner
