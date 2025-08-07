







import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { JourneyMission } from './components/JourneyMission';
import { TestimonialCard } from './components/TestimonialCard';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { TESTIMONIALS } from './constants';
import type { Testimonial } from './types';
import { AiSolutionFinder } from './components/AiSolutionFinder';
import { AboutPage } from './components/AboutPage';
import { FacilitiesPage } from './components/FacilitiesPage';
import { PeopleAndValuesPage } from './components/PeopleAndValuesPage';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';
import { CoreInfraOptimizationPage } from './components/CoreInfraOptimizationPage';
import { CloudAdvisoryPage } from './components/CloudAdvisoryPage';
import { CapacityPlanningPage } from './components/CapacityPlanningPage';

import { IamsPage } from './components/IamsPage';
import { MailSecurityPage } from './components/MailSecurityPage';
import { UtmsPage } from './components/UtmsPage';
import { CcsPage } from './components/CcsPage';
import { DlpsPage } from './components/DlpsPage';
import { DssPage } from './components/DssPage';
import { OutsourcingPage } from './components/OutsourcingPage';
import { RetailItPage } from './components/RetailItPage';
import { DesktopManagementPage } from './components/DesktopManagementPage';
import { ServerManagementPage } from './components/ServerManagementPage';
import { GoGreenPage } from './components/GoGreenPage';
import { ProductsPage } from './components/ProductsPage';
import { MalkhanaManagementPage } from './components/MalkhanaManagementPage';
import { CareersPage } from './components/CareersPage';
import { ConsultingOverviewPage } from './components/ConsultingOverviewPage';
import { MintAppPage } from './components/MintAppPage';
import { LawEnforcementPage } from './components/LawEnforcementPage';
import { CybersecurityPage } from './components/CybersecurityPage';
import { CloudModernizationPage } from './components/CloudModernizationPage';
import { ManagedITPage } from './components/ManagedITPage';
import { IotMonitoringPage } from './components/IotMonitoringPage';
import { MintergraphSystemPage } from './components/MintergraphSystemPage';
import { DigitalEvidenceRecordingPage } from './components/DigitalEvidenceRecordingPage';
import { Dial112CctnsPage } from './components/Dial112CctnsPage';
import { CommandDashboardsPage } from './components/CommandDashboardsPage';
import { CctvSurveillancePage } from './components/CctvSurveillancePage';
import { AiAgentsPage } from './components/AiAgentsPage';
import { AidcPage } from './components/AidcPage';


class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { hasError: boolean }> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-slate-800 p-4 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
          <p className="text-xl mb-8">We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}


function App(): React.ReactNode {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPageExiting, setIsPageExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  
  const pathRef = useRef(currentPath);
  useEffect(() => {
    pathRef.current = currentPath;
  }, [currentPath]);


  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
        const oldPath = pathRef.current;
        const newPath = window.location.hash || '#/home';
        
        const oldPage = (oldPath.split('#/')[1] || '').split('#')[0];
        const newPage = (newPath.split('#/')[1] || '').split('#')[0];
        
        if (oldPage === newPage && oldPath !== newPath) {
            setCurrentPath(newPath);
        } else if (oldPage !== newPage) {
            setIsPageExiting(true);
            setTimeout(() => {
                setCurrentPath(newPath);
                setAnimationKey(p => p + 1);
                window.scrollTo(0, 0);
                setIsPageExiting(false);
            }, 400);
        }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    setCurrentPath(window.location.hash || '#/home');
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const attemptScrollToAnchor = (path: string) => {
        const parts = path.split('#');
        if (parts.length < 3) return;

        const anchorId = parts[2];
        let attempts = 0;
        const maxAttempts = 20;

        const scroll = () => {
            attempts++;
            const element = document.getElementById(anchorId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (attempts < maxAttempts) {
                setTimeout(scroll, 50);
            }
        };
        scroll();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const animationTimeoutId = setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));
    }, 50);

    attemptScrollToAnchor(currentPath);

    return () => {
        clearTimeout(animationTimeoutId);
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
    };
  }, [currentPath, animationKey]);


  const navigate = (path: string) => {
    if (path === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    window.location.hash = path;
  };

  const renderPage = () => {
    let pageComponent;
    const page = (currentPath.split('#/')[1] || 'home').split('#')[0];
    
    switch (page) {
      // New Digital Transformation Pages
      case 'mint-app':
        pageComponent = <MintAppPage onNavigate={navigate} />;
        break;
      case 'law-enforcement':
        pageComponent = <LawEnforcementPage onNavigate={navigate} />;
        break;
      case 'cybersecurity':
        pageComponent = <CybersecurityPage onNavigate={navigate} />;
        break;
      case 'cloud-modernization':
        pageComponent = <CloudModernizationPage onNavigate={navigate} />;
        break;
      case 'managed-it':
        pageComponent = <ManagedITPage onNavigate={navigate} />;
        break;
      case 'iot-monitoring':
        pageComponent = <IotMonitoringPage onNavigate={navigate} />;
        break;
      case 'cctv-surveillance':
        pageComponent = <CctvSurveillancePage onNavigate={navigate} />;
        break;
      case 'ai-agents':
        pageComponent = <AiAgentsPage onNavigate={navigate} />;
        break;
         case 'aidc':
  pageComponent = <AidcPage onNavigate={navigate} />;
  break;


      // About Pages
      case 'about':
        pageComponent = <AboutPage />;
        break;
      case 'facilities':
        pageComponent = <FacilitiesPage />;
        break;
      case 'people-and-values':
        pageComponent = <PeopleAndValuesPage />;
        break;
      case 'careers':
        pageComponent = <CareersPage onNavigate={navigate} />;
        break;
      
      // New Philosophy Page
      case 'vision':
        pageComponent = <MintergraphSystemPage />;
        break;
      
      // Detail Pages (linked from new overview pages)
      case 'malkhana-management':
        pageComponent = <MalkhanaManagementPage onNavigate={navigate} />;
        break;
      case 'digital-evidence-recording':
        pageComponent = <DigitalEvidenceRecordingPage onNavigate={navigate} />;
        break;
      case 'dial-112-cctns':
        pageComponent = <Dial112CctnsPage onNavigate={navigate} />;
        break;
      case 'command-dashboards':
        pageComponent = <CommandDashboardsPage onNavigate={navigate} />;
        break;
      case 'products': 
        pageComponent = <ProductsPage onNavigate={navigate} />;
        break;
      
      case 'iams':
        pageComponent = <IamsPage onNavigate={navigate} />;
        break;
      case 'mail-security':
        pageComponent = <MailSecurityPage onNavigate={navigate} />;
        break;
      case 'utms':
        pageComponent = <UtmsPage onNavigate={navigate} />;
        break;
      case 'ccs':
        pageComponent = <CcsPage onNavigate={navigate} />;
        break;
      case 'dlps':
        pageComponent = <DlpsPage onNavigate={navigate} />;
        break;
      case 'dss':
        pageComponent = <DssPage onNavigate={navigate} />;
        break;
      case 'outsourcing':
        pageComponent = <OutsourcingPage onNavigate={navigate} />;
        break;
      case 'retail-it-management':
        pageComponent = <RetailItPage onNavigate={navigate} />;
        break;
      case 'desktop-management':
        pageComponent = <DesktopManagementPage onNavigate={navigate} />;
        break;
      case 'server-management':
        pageComponent = <ServerManagementPage onNavigate={navigate} />;
        break;
      case 'gogreen':
        pageComponent = <GoGreenPage onNavigate={navigate} />;
        break;
      case 'consulting-overview':
        pageComponent = <ConsultingOverviewPage onNavigate={navigate} />;
        break;
      case 'core-infra-optimization':
        pageComponent = <CoreInfraOptimizationPage onNavigate={navigate} />;
        break;
      case 'cloud-advisory':
        pageComponent = <CloudAdvisoryPage onNavigate={navigate} />;
        break;
      case 'capacity-planning':
        pageComponent = <CapacityPlanningPage onNavigate={navigate} />;
        break;

      // Home Page
      case 'home':
      default:
        pageComponent = (
          <main>
            <Hero />
            <Welcome />
            <JourneyMission />
            <section id="ai-finder" className="py-20 sm:py-28 lg:py-32 bg-slate-900 scroll-mt-28">
              <div className="container mx-auto px-4">
                <AiSolutionFinder />
              </div>
            </section>
            <section id="testimonials" className="py-20 sm:py-28 lg:py-32 bg-gray-50 scroll-mt-28">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                  <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Trusted By Leaders, Endorsed By Results</h2>
                  <p className="mt-6 text-xl text-slate-600">
                    Our commitment to excellence is reflected in the success stories of our clients.
                  </p>
                </div>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                  {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
                    <div key={testimonial.author} className="animate-on-scroll" style={{'--animation-delay': `${index * 0.1}s`} as React.CSSProperties}>
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <ContactSection onNavigate={navigate}/>
          </main>
        );
        break;
    }
    return (
        <div key={animationKey} className={`page-container ${isPageExiting ? 'exiting' : ''}`}>
            {pageComponent}
        </div>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Header onNavigate={navigate} currentPage={currentPath} isScrolled={scrolled} />
      <ErrorBoundary>
        {renderPage()}
      </ErrorBoundary>
      <Footer onNavigate={navigate} />
      <FloatingContactBar onNavigate={navigate} />
    </div>
  );
}

export default App;
