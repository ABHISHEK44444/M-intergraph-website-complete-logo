

import React from 'react';
import { MIntergraphLogo, MapPinIcon, PhoneIcon, EnvelopeIcon } from './IconComponents';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
)

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };
  
  const quickLinks = [
    { label: 'Home', path: '#/home' },
    { label: 'About Us', path: '#/about' },
    { label: 'Digital Transformation', path: '#/mint-app' },
    { label: 'Philosophy', path: '#/philosophy' },
    { label: 'Careers', path: '#/careers' },
    { label: 'AI Finder', path: '#/home#ai-finder' },
  ];

  const contactEmails = [
    { label: 'General Info', email: 'info@mintergraph.com' },
    { label: 'Sales', email: 'sales@mintergraph.com' },
    { label: 'Careers', email: 'careers@mintergraph.com' },
    { label: 'Support', email: 'servicedesk@mintergraph.com' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-blue-600">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#/home" onClick={(e) => handleNavClick(e, '#/home')} className="flex items-center space-x-3 mb-6">
              <MIntergraphLogo className="h-18 w-16 text-white" /> 
              <span
  style={{ fontFamily: 'Caveat, cursive' }}
  className={`className="text-2xl font-bold  font-medium text-white tracking-tight`}
>
  M INTERGRAPH
</span>





            </a>
            <p className="text-slate-400 leading-relaxed">
              An ISO-certified IT System Integrator and Managed Service Provider, offering a comprehensive suite of IT solutions.
            </p>
             <div className="mt-6 flex space-x-5">
                <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/m-intergraph-systems-pvt-ltd/"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433c-.017-1.144-1.016-2.066-2.268-2.066-1.225 0-2.13.922-2.13 2.066 0 1.144.904 2.066 2.13 2.066 1.252 0 2.268-.922 2.268-2.066zM6.602 16.338H4.07v-8.59h2.532v8.59z" clipRule="evenodd" /></svg></SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map(link => (
                 <a key={link.path} href={link.path} onClick={(e) => handleNavClick(e, link.path)} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 w-fit">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Column 3: Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">Get in Touch</h3>
            <ul className="space-y-4 text-slate-400">
                {contactEmails.map(contact => (
                    <li key={contact.email} className="flex">
                        <EnvelopeIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                        <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                            <span className="font-medium text-slate-300">{contact.label}:</span><br/> {contact.email}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

           {/* Column 4: Reach Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wider uppercase">Reach Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                <span>GROUND FLOOR, A-99, DDA Shed, Okhla Phase II, New Delhi, 110020</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-slate-500" />
                <div>
                  <a href="tel:+919599701606" className="hover:text-white transition-colors">+91 9599701606</a><br/>
                  <a href="tel:+919899980247" className="hover:text-white transition-colors">+91 9899980247</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} M Intergraph Systems Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
