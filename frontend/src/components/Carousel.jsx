import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchShowcase } from "../api";

const Carousel = () => {
  const [images, setImages] = useState([]);

  // 🔹 Recupera le ultime 8 immagini dal backend
  useEffect(() => {
    fetchShowcase()
      .then((data) => {
        const latestImages = data.sort((a, b) => b.id - a.id).slice(0, 8);
        setImages(latestImages);
      })
      .catch((error) => console.error("Errore nel caricamento del carosello:", error));
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
      {images.length > 0 ? (
        <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="w-full h-72 md:h-96 lg:h-[500px] flex justify-center items-center overflow-hidden">
                <img
                  src={image.image}
                  alt={image.description}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-black">Nessuna immagine disponibile</p>
      )}
    </div>
  );
};

export default Carousel;
