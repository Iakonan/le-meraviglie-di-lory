import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchShowcase } from "../api"; // Importiamo la funzione API

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
    <div className="w-full h-64 md:h-[300px] md:max-w-3xl mx-auto overflow-hidden rounded-lg">
      {images.length > 0 ? (
        <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.image}
                alt={image.description}
                className="w-full h-full object-cover"
              />
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
