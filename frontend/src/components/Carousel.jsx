import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
      {images.length > 0 ? (
        <>
          {/* Frecce visive sopra le immagini */}
          <div className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <FaChevronLeft size={30} />
          </div>
          <div className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 text-white opacity-60">
            <FaChevronRight size={30} />
          </div>

          {/* Carosello */}
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
        </>
      ) : (
        <p className="text-center text-black">Nessuna immagine disponibile</p>
      )}
    </div>
  );
};

export default Carousel;
