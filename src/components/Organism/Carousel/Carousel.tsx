import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { designTokens } from "../../../tokens/designTokens";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full object-cover rounded-${designTokens.borderRadius.lg}`}
          />
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className={`absolute left-3 top-1/2 -translate-y-1/2 bg-${designTokens.colors.background} 
        bg-opacity-50 p-2 rounded-${designTokens.borderRadius.md} text-${designTokens.colors.textPrimary} 
        hover:bg-opacity-70 transition-${designTokens.transition}`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-3 top-1/2 -translate-y-1/2 bg-${designTokens.colors.background} 
        bg-opacity-50 p-2 rounded-${designTokens.borderRadius.md} text-${designTokens.colors.textPrimary} 
        hover:bg-opacity-70 transition-${designTokens.transition}`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? `bg-${designTokens.colors.primary}` : "bg-gray-400"
            } transition-${designTokens.transition}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
