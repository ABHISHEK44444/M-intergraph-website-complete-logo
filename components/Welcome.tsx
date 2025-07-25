
import React from 'react';

export const Welcome: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden scroll-mt-28">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
        <div className="w-[50rem] h-[50rem] bg-blue-50 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3 opacity-50 pointer-events-none">
        <div className="w-[50rem] h-[50rem] bg-indigo-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Content */}
          <div className="relative animate-on-scroll order-last lg:order-first">
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="A professional team collaborating in a modern meeting room"
                className="aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-200 rounded-2xl -z-0 transform-gpu"></div>
             <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-blue-100 rounded-2xl -z-0 transform-gpu"></div>
          </div>
          
          {/* Text Content */}
          <div className="text-left animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
            <p className="text-base font-semibold text-blue-600 uppercase tracking-widest">Welcome</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tighter text-slate-900 sm:text-5xl md:text-6xl leading-tight">
              Your Partner in Digital Transformation
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl">
              An acclaimed IT System Integrator and Managed Service Provider specializing in Digital Transformation. We deliver excellence, stability, and speed for your enterprise.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Stat Cards */}
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-5xl font-extrabold text-blue-600">30+</p>
                <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-5xl font-extrabold text-blue-600">ISO</p>
                <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Certified</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-5xl font-extrabold text-blue-600">70+</p>
                <p className="mt-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">Support Locations</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};