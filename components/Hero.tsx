
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop',
    title: 'M Intergraph Systems',
    subtitle: 'Orchestrating the Future of Your Business, One Intelligent Solution at a Time.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    title: 'Smart Infra & AI for Critical Sectors',
    subtitle: 'Secure, Scalable, and Intelligent Digital Transformation solutions.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop',
    title: 'Reliable Infrastructure, Resilient Business',
    subtitle: 'Expert management of your data centers and IT infrastructure for peak performance.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop',
    title: 'Navigate the Cloud with Confidence',
    subtitle: 'Strategic cloud advisory to accelerate your digital transformation and optimize costs.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1906&auto=format&fit=crop',
    title: 'Proactive Security, Complete Peace of Mind',
    subtitle: 'Protecting your digital assets with advanced threat intelligence and 24/7 monitoring.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    title: "Intelligent technology, nimbly executed.",
    subtitle: "That's the M Intergraph promise.",
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop',
    title: "The fusion of art and technology is the next great frontier.",
    subtitle: "A futurist vision",
  },
];

const AnimatedText: React.FC<{ text: string, delay?: number }> = ({ text, delay = 0 }) => {
    return (
        <span className="inline-block overflow-hidden">
            <span 
                className="inline-block transition-transform duration-1000" 
                style={{ 
                    transform: 'translateY(100%)', 
                    animation: `slide-up 1s ${delay}s forwards cubic-bezier(0.16, 1, 0.3, 1)`,
                }}
            >
                {text}
            </span>
        </span>
    );
};

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setIsAnimating(false);
    }, 500);
  }, []);

  const goToPrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000); 

    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-900">
      <style>{`
          @keyframes slide-up {
              to { transform: translateY(0); }
          }
      `}</style>
      
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
            <div className="absolute inset-0 h-full w-full bg-cover bg-center animate-ken-burns" style={{ backgroundImage: `url('${slide.imageUrl}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className={`relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-5xl">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-shadow-heavy">
                <AnimatedText text={slides[currentIndex].title} />
            </h1>
            <p className="mt-8 text-xl text-slate-200 md:text-2xl" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                <AnimatedText text={slides[currentIndex].subtitle} delay={0.2} />
            </p>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 sm:px-8">
        <button
          onClick={goToPrevious}
          className="bg-black/20 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 focus:outline-none transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
        <button
          onClick={goToNext}
          className="bg-black/20 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 focus:outline-none transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};