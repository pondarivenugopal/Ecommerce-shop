import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Venu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Arjun",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Andhra",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 bg-no-repeat mt-20">
      {/* header section */}
      <div className="text-center mb-10  mx-auto">
        <p data-aos="fade-up" className="text-sm">
          What our customers are saying
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Testimonials
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>

      {/* Testimonial cards */}
      <div data-aos="zoom-in">
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="my-6">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-black/85 relative">
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-400">{data.text}</p>
                    <h1 className="text-xl font-bold text-white/100">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-white/80 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
