

import React from 'react';
import type { Testimonial } from '../types';
import { QuoteIcon, UsersIcon } from './IconComponents';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <QuoteIcon className="absolute top-8 right-8 h-20 w-20 text-gray-100" />
      <div className="relative z-10 flex flex-col flex-grow h-full">
        <blockquote className="text-lg font-medium text-slate-700 leading-relaxed flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center">
          <div className="h-14 w-14 rounded-full shadow-lg border-2 border-white bg-slate-100 flex items-center justify-center flex-shrink-0">
             <UsersIcon className="h-8 w-8 text-slate-400" />
          </div>
          <div className="ml-4">
            <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
            <p className="text-slate-500 text-sm font-medium">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};