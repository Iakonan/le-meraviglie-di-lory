import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Torta fantastica, super consigliata!",
      author: "Maria"
    },
    {
      id: 2,
      text: "Ottimo servizio e qualità eccellente.",
      author: "Luca"
    },
    {
      id: 3,
      text: "La miglior pasticcera della zona!",
      author: "Francesca"
    }
  ];

  return (
    <div className="mx-auto max-w-xl md:max-w-[100vw]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
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
            <div className="p-4 bg-rose-50 rounded-lg shadow-md text-center">
              <p className="text-gray-700">"{review.text}"</p>
              <p className="mt-2 text-teal-500 font-semibold">- {review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
