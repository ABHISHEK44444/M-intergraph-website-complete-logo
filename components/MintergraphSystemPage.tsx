
import React from 'react';

interface Quote {
    quote: string;
    author: string;
    imageUrl: string;
    isCompanyName?: boolean;
}

const quotes: Quote[] = [
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        imageUrl: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop"
    },
    {
        quote: "Technology is best when it brings people together.",
        author: "Matt Mullenweg",
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131c5a9?q=80&w=2020&auto=format&fit=crop"
    },
    {
        quote: "The advance of technology is based on making it fit in so that you don't even notice it, so it's part of everyday life.",
        author: "Bill Gates",
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop"
    },
     {
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        imageUrl: "https://images.unsplash.com/photo-1516245834210-c4c1427873ab?q=80&w=1974&auto=format&fit=crop"
    },
    {
        quote: "At M Intergraph, we don't just implement technology; we orchestrate it to compose the future of your business.",
        author: "The M Intergraph Philosophy",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        quote: "The ultimate promise of technology is to make us master of a world that we command by the push of a button.",
        author: "Volker Grassmuck",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        quote: "Intelligent technology, nimbly executed. That's the M Intergraph promise.",
        author: "M Intergraph Systems",
        imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop"
    },
    {
        quote: "The fusion of art and technology is the next great frontier.",
        author: "A futurist vision",
        imageUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop"
    },
    {
        quote: "M Intergraph Systems",
        author: "Orchestrating the Future of Your Business, One Intelligent Solution at a Time.",
        imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop",
        isCompanyName: true,
    }
];

const AnimatedHeroText: React.FC<{ text: string }> = ({ text }) => {
    const letters = text.split('').map((char, index) => (
        <span
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return <>{letters}</>;
};

const QuoteSection: React.FC<Quote> = ({ quote, author, imageUrl, isCompanyName }) => (
    <div
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url('${imageUrl}')` }}
    >
        <div className={`absolute inset-0 ${isCompanyName ? 'bg-black/60' : 'bg-black/50'}`}></div>
        <div className={`relative z-10 text-center text-white p-8 mx-auto ${isCompanyName ? 'max-w-5xl' : 'max-w-4xl'}`}>
            {isCompanyName ? (
                <>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-shadow-heavy">
                        {quote}
                    </h2>
                    <p className="mt-6 text-xl md:text-2xl font-semibold tracking-wider text-blue-200" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.7)' }}>
                        {author}
                    </p>
                </>
            ) : (
                <>
                    <blockquote className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-shadow-heavy">
                        "{quote}"
                    </blockquote>
                    <cite className="block text-xl md:text-2xl mt-8 font-semibold tracking-wider" style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.7)' }}>
                        — {author}
                    </cite>
                </>
            )}
        </div>
    </div>
);

export const MintergraphSystemPage: React.FC = () => {
    return (
        <main className="bg-white text-slate-800">
            {/* Hero Section with Video Background */}
            <div
                className="h-screen flex items-center justify-center text-center relative overflow-hidden"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
                >
                    <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-slate-900/60"></div>
                <div className="relative z-10 p-8">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter text-white text-shadow-heavy">
                        <AnimatedHeroText text="M Intergraph Systems" />
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-blue-300 font-semibold tracking-wide animate-fade-in" style={{ animationDelay: '1s', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                        The Philosophy of Innovation
                    </p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-fade-in text-white" style={{ animationDelay: '1.5s' }}>
                    <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-start p-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-scroll-mouse"></div>
                    </div>
                </div>
            </div>

            {quotes.map((q, index) => (
                <QuoteSection
                    key={index}
                    quote={q.quote}
                    author={q.author}
                    imageUrl={q.imageUrl}
                    isCompanyName={q.isCompanyName}
                />
            ))}
        </main>
    );
};
