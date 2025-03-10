import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { designTokens } from '../../../theme/designTokens';
export const Carousel = ({ images, autoPlay = true, interval = 3000, }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    useEffect(() => {
        if (!autoPlay)
            return;
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [currentIndex, autoPlay, interval]);
    return (_jsxs("div", { className: "relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg", children: [_jsx("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: `translateX(-${currentIndex * 100}%)` }, children: images.map((image, index) => (_jsx("img", { src: image, alt: `Slide ${index + 1}`, className: `w-full object-cover rounded-${designTokens.borderRadius.lg}` }, index))) }), _jsx("button", { onClick: prevSlide, className: `absolute left-3 top-1/2 -translate-y-1/2 bg-${designTokens.colors.background} 
        bg-opacity-50 p-2 rounded-${designTokens.borderRadius.md} text-${designTokens.colors.textPrimary} 
        hover:bg-opacity-70 transition-${designTokens.transition}`, children: _jsx(ChevronLeft, { size: 24 }) }), _jsx("button", { onClick: nextSlide, className: `absolute right-3 top-1/2 -translate-y-1/2 bg-${designTokens.colors.background} 
        bg-opacity-50 p-2 rounded-${designTokens.borderRadius.md} text-${designTokens.colors.textPrimary} 
        hover:bg-opacity-70 transition-${designTokens.transition}`, children: _jsx(ChevronRight, { size: 24 }) }), _jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2", children: images.map((_, index) => (_jsx("span", { className: `h-2 w-2 rounded-full ${index === currentIndex
                        ? `bg-${designTokens.colors.primary}`
                        : 'bg-gray-400'} transition-${designTokens.transition}` }, index))) })] }));
};
