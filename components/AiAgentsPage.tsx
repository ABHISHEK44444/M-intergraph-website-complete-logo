
import React from 'react';
import {
    UsersIcon,
    CodeBracketIcon,
    GlobeAltIcon,
    CpuChipIcon,
    ChartBarIcon,
    BriefcaseIcon,
    HeartIcon,
    CreditCardIcon,
    AcademicCapIcon,
    ScaleIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon
} from './IconComponents';

interface AiAgentsPageProps {
    onNavigate: (path: string) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 text-lg leading-relaxed">{children}</p>
    </div>
);

const IndustryCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start bg-white p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:border-blue-300">
        <div className="flex-shrink-0 text-blue-600 w-10 h-10 mt-1">{icon}</div>
        <div className="ml-5">
            <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
            <p className="text-slate-600 text-base">{description}</p>
        </div>
    </div>
);

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
    <div className="border-t border-gray-200 pt-6">
        <dt className="text-lg">
            <button className="flex items-start justify-between w-full text-left text-gray-400">
                <span className="font-medium text-slate-900">{question}</span>
            </button>
        </dt>
        <dd className="mt-2 pr-12 text-base text-slate-600">{children}</dd>
    </div>
);

export const AiAgentsPage: React.FC<AiAgentsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-slate-900/70 z-10"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop')"}}>
                </div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40 z-20">
                    <div className="text-white max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">AI Agents & Bots</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Revolutionize Customer Experience with Intelligent Automation
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Transform the way you engage with customers and streamline workflows using advanced AI agents and chatbots that work 24/7 to boost sales, support, and operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Why Choose Our AI Agents & Bots?</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={<CodeBracketIcon className="w-9 h-9"/>} title="No-Code Builder">Design intelligent AI workflows effortlessly using our intuitive drag-and-drop interface without any technical expertise.</FeatureCard>
                        <FeatureCard icon={<GlobeAltIcon className="w-9 h-9"/>} title="Omni-Channel Deployment">Reach customers on your website, WhatsApp, Facebook Messenger, mobile apps, and more with seamless integration.</FeatureCard>
                        <FeatureCard icon={<CpuChipIcon className="w-9 h-9"/>} title="Powered by GPT-4o">Leverage the latest AI technology to deliver natural, human-like conversations that increase engagement and satisfaction.</FeatureCard>
                        <FeatureCard icon={<ChartBarIcon className="w-9 h-9"/>} title="Advanced Analytics">Monitor your chatbot performance with real-time analytics to track conversations and optimize your AI agents continuously.</FeatureCard>
                    </div>
                </div>
            </section>
            
            {/* Industries We Serve Section */}
            <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-200">
                 <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Industries We Serve</h2>
                    </div>
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <IndustryCard icon={<BriefcaseIcon/>} title="Retail" description="Personalized shopping assistants, product recommendations, and order tracking"/>
                        <IndustryCard icon={<HeartIcon/>} title="Healthcare" description="Appointment scheduling, symptom checking, medication reminders"/>
                        <IndustryCard icon={<CreditCardIcon/>} title="Finance & Banking" description="Balance inquiries, transaction history, fraud detection"/>
                        <IndustryCard icon={<AcademicCapIcon/>} title="Education" description="Student support, admissions assistance, interactive learning bots"/>
                        <IndustryCard icon={<ScaleIcon/>} title="Legal" description="Client onboarding, document assistance, appointment booking"/>
                        <IndustryCard icon={<GlobeAltIcon/>} title="Travel & Hospitality" description="Flight bookings, hotel reservations, local recommendations"/>
                    </div>
                </div>
            </section>
            
            {/* Pricing Section */}
            <section className="py-20 sm:py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Flexible Pricing Plans</h2>
                    </div>
                    <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Plan Cards */}
                        <div className="border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold text-slate-900">Free</h3>
                            <p className="mt-4 text-4xl font-extrabold text-slate-900">$0<span className="text-xl font-medium text-slate-500"> / month</span></p>
                            <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                                <li>1 Agent</li>
                                <li>100 messages/month</li>
                                <li>Basic Support</li>
                            </ul>
                        </div>
                        <div className="border-2 border-blue-600 rounded-2xl p-8 shadow-2xl flex flex-col relative">
                             <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                <span className="inline-flex items-center px-4 py-1 font-semibold text-xs tracking-wider text-white uppercase bg-blue-600 rounded-full">Most Popular</span>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600">Pro</h3>
                            <p className="mt-4 text-4xl font-extrabold text-slate-900">$20<span className="text-xl font-medium text-slate-500"> / month</span></p>
                            <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                                <li>5 Agents</li>
                                <li>1,000 messages/month</li>
                                <li>Priority Support</li>
                            </ul>
                        </div>
                         <div className="border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col">
                            <h3 className="text-2xl font-bold text-slate-900">Business</h3>
                            <p className="mt-4 text-4xl font-extrabold text-slate-900">$30<span className="text-xl font-medium text-slate-500"> / month</span></p>
                            <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                                <li>10 Agents</li>
                                <li>5,000 messages/month</li>
                                <li>Dedicated Support</li>
                                <li>API Access</li>
                            </ul>
                        </div>
                    </div>
                     <p className="text-center mt-8 text-slate-500">Additional message packs available at affordable rates.</p>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                     <div className="text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Frequently Asked Questions</h2>
                    </div>
                    <dl className="mt-12 space-y-6 divide-y divide-gray-200">
                       <FaqItem question="What is an AI chatbot?">
                           An AI chatbot is an intelligent software application that simulates human conversations using natural language processing to assist users in real time.
                       </FaqItem>
                       <FaqItem question="Do I need programming skills?">
                           No! Our no-code platform allows anyone to build and manage AI agents with ease.
                       </FaqItem>
                       <FaqItem question="Can I deploy the chatbot on multiple platforms?">
                           Yes, our solution supports deployment on websites, WhatsApp, social media, and mobile apps.
                       </FaqItem>
                       <FaqItem question="Is my data secure?">
                           We follow industry-standard security protocols to keep your data safe and confidential.
                       </FaqItem>
                    </dl>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Get Started?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                      Empower your business with smart AI agents that deliver better customer service, increase sales, and automate repetitive tasks.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button onClick={handleEnquireClick} className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                            Contact Us Today
                        </button>
                         <button onClick={handleEnquireClick} className="inline-block bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-600 hover:shadow-xl hover:scale-105 transform">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};
