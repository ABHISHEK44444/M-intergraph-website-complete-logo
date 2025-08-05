import React from 'react';
import { UsersIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from './IconComponents';

interface ContactSectionProps {
    onNavigate: (path: string) => void;
}

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col text-left h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex-grow">{title}</h3>
    <div className="text-slate-600 space-y-4">{children}</div>
  </div>
);

const ContactDetail: React.FC<{ icon: React.ReactNode; label: string; value: string; href: string; }> = ({ icon, label, value, href }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-5 text-slate-400 mt-1">{icon}</div>
        <div className="ml-3">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
            <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors break-all font-medium">{value}</a>
        </div>
    </div>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Get in Touch</h2>
          <p className="mt-6 text-xl text-slate-600">
            We're here to help. Reach out to us through any of the channels below, or send us a message, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll" style={{'--animation-delay': '0s'} as React.CSSProperties}>
              <InfoCard icon={<UsersIcon className="w-9 h-9" />} title="Sales Inquiries">
                <ContactDetail icon={<EnvelopeIcon />} label="Email" href="mailto:sales@mintergraph.com" value="sales@mintergraph.com" />
                <ContactDetail icon={<PhoneIcon />} label="Phone" href="tel:+919599701606" value="+91 9599701606" />
              </InfoCard>
            </div>

            <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
              <InfoCard icon={<ChatBubbleLeftRightIcon className="w-9 h-9" />} title="Customer Support">
                <ContactDetail icon={<EnvelopeIcon />} label="Email" href="mailto:servicedesk@mintergraph.com" value="servicedesk@mintergraph.com" />
                <ContactDetail icon={<PhoneIcon />} label="Phone" href="tel:+919899980247" value="+91 9899980247" />
              </InfoCard>
            </div>

            <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
              <InfoCard icon={<BriefcaseIcon className="w-9 h-9" />} title="General & Careers">
                <ContactDetail icon={<EnvelopeIcon />} label="General Info" href="mailto:info@mintergraph.com" value="info@mintergraph.com" />
                <ContactDetail icon={<EnvelopeIcon />} label="Careers" href="mailto:careers@mintergraph.com" value="careers@mintergraph.com" />
              </InfoCard>
            </div>

            <div className="animate-on-scroll" style={{'--animation-delay': '0.3s'} as React.CSSProperties}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                        <MapPinIcon className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate Office</h3>
                    <p className="text-slate-600 mb-5 font-medium">
                        A-99, DDA Shed, Okhla Industrial Area, Phase-II, New Delhi–110020, India
                    </p>
                    <div className="mt-auto flex-grow rounded-lg overflow-hidden border border-gray-200 min-h-[175px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.148184567215!2d77.27139807512415!3d28.56528197570493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3903a846c49%3A0x6b89476841753337!2sM%20INTERGRAPH%20SYSTEMS%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1719577189191!5m2!1sen!2sin"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="M Intergraph Systems Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-12 text-center animate-on-scroll">
            <button onClick={() => onNavigate('contact')} className="bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform">
                Or Send Us a Message Directly
            </button>
        </div>
      </div>
    </section>
  );
};
