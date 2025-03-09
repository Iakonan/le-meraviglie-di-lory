import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Torta fantastica, super consigliata!",
      author: "Maria",
    },
    {
      id: 2,
      text: "Ottimo servizio e qualità eccellente.",
      author: "Luca",
    },
    {
      id: 3,
      text: "La miglior pasticcera della zona!",
      author: "Francesca",
    },
  ];

  return (
    <div className="mx-auto max-w-lg md:max-w-2xl py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-4 md:p-5 bg-secondary-500/90 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
              <p className="text-black font-bold text-xl md:text-3xl">"{review.text}"</p>
              <p className="mt-2 text-white font-semibold text-lg md:text-2xl">- {review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
