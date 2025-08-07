
import React from 'react';
import {
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    WifiIcon,
    PrinterIcon,
    QrCodeIcon,
    TagIcon,
    TicketIcon,
    SignalIcon,
    CpuChipIcon,
    MapPinIcon,
    ClockIcon,
    ServerStackIcon,
    UsersIcon,
    CheckCircleIcon
} from './IconComponents';

interface IotMonitoringPageProps {
    onNavigate: (path: string) => void;
}

const ProductGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-blue-200">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {children}
        </div>
    </div>
);

const HardwareItem: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="text-blue-600 w-10 h-10">{icon}</div>
        <p className="text-lg font-semibold text-slate-700">{name}</p>
    </div>
);

const SolutionListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-slate-700 font-medium">{children}</span>
    </li>
);

export const IotMonitoringPage: React.FC<IotMonitoringPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-white">
             <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto-format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           IoT & Infrastructure Monitoring
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Connecting the physical and digital worlds through reliable hardware, sensors, and intelligent infrastructure solutions.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
                 <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <CpuChipIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Enabling the Internet of Things (IoT)</h2>
                         <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           We deliver future-ready solutions by combining rugged, industrial-grade IoT hardware with real-time monitoring platforms. Our infrastructure empowers businesses and government agencies to gain insights, automate operations, and ensure uninterrupted visibility into mission-critical environments.
                         </p>
                         <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                           From smart cities to logistics, healthcare, retail, and law enforcement, we help organizations embrace data-driven decision-making through connected systems.
                         </p>
                    </div>
                </div>
            </section>

             <section id="hardware" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-gray-200 scroll-mt-28">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Hardware Products Catalog</h2>
                         <p className="mt-6 text-xl text-slate-600">
                           We provide a broad portfolio of RFID, Barcode, BLE, and IoT hardware components, including Zebra Technologies and other trusted brands.
                        </p>
                    </div>

                    <div className="mt-20 max-w-7xl mx-auto space-y-16 animate-on-scroll">
                        <ProductGroup title="Zebra Products">
                            <HardwareItem icon={<QrCodeIcon />} name="Zebra RFID Readers"/>
                            <HardwareItem icon={<DevicePhoneMobileIcon />} name="Zebra Mobile Computers"/>
                            <HardwareItem icon={<WifiIcon />} name="Zebra RFID Antennas"/>
                            <HardwareItem icon={<PrinterIcon />} name="Zebra RFID Printers"/>
                            <HardwareItem icon={<PrinterIcon />} name="Zebra Barcode Printers"/>
                            <HardwareItem icon={<ComputerDesktopIcon />} name="Zebra Kiosk System"/>
                            <HardwareItem icon={<CpuChipIcon />} name="Zebra Wearable Devices"/>
                            <HardwareItem icon={<QrCodeIcon />} name="Zebra Handheld Scanners"/>
                            <HardwareItem icon={<ComputerDesktopIcon />} name="Zebra Tablets & Rugged Laptops"/>
                        </ProductGroup>
                        
                        <ProductGroup title="Other IoT & Barcode Products">
                            <HardwareItem icon={<TagIcon />} name="RFID Tags (Passive/Active, UHF, NFC)"/>
                            <HardwareItem icon={<QrCodeIcon />} name="Fixed & Handheld RFID Readers"/>
                            <HardwareItem icon={<WifiIcon />} name="RFID Antennas (circular, linear, panel)"/>
                            <HardwareItem icon={<SignalIcon />} name="BLE Beacons & Gateways"/>
                            <HardwareItem icon={<MapPinIcon />} name="GPS Trackers & Asset Sensors"/>
                            <HardwareItem icon={<TagIcon />} name="Barcode Labels (Thermal/Direct)"/>
                            <HardwareItem icon={<QrCodeIcon />} name="Barcode Scanners (1D/2D, omni)"/>
                            <HardwareItem icon={<TicketIcon />} name="Barcode Ribbons (Wax, Resin)"/>
                            <HardwareItem icon={<PrinterIcon />} name="Industrial Barcode & Label Printers"/>
                            <HardwareItem icon={<CpuChipIcon />} name="Environmental & Vibration Sensors"/>
                            <HardwareItem icon={<ClockIcon />} name="Temperature & Humidity Loggers"/>
                            <HardwareItem icon={<ServerStackIcon />} name="Edge Gateways & IoT Controllers"/>
                        </ProductGroup>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Custom IoT Solutions Include</h2>
                    </div>
                    <div className="mt-16 max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
                        <ul className="space-y-4">
                            <SolutionListItem>Smart Infrastructure Monitoring (CCTV, power, temperature, environment)</SolutionListItem>
                            <SolutionListItem>Fleet & Asset Tracking</SolutionListItem>
                            <SolutionListItem>Remote Equipment Diagnostics</SolutionListItem>
                            <SolutionListItem>AI-Driven Data Analytics & Alerts</SolutionListItem>
                            <SolutionListItem>Secure Edge Computing for Field Operations</SolutionListItem>
                            <SolutionListItem>Embracing Touchless Technologies</SolutionListItem>
                            <SolutionListItem>Agile Space Utilization Strategies</SolutionListItem>
                             <SolutionListItem>Prioritizing Air Quality and Wellness</SolutionListItem>
                             <SolutionListItem>Leveraging Data for Decision Intelligence</SolutionListItem>
                             <SolutionListItem>Sustainbility as a Core Tenet</SolutionListItem>
                            <SolutionListItem>The Hybird Work Imperative</SolutionListItem>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Transform?</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                       Whether you're digitizing public infrastructure, securing logistics chains, or automating workflows—our end-to-end IoT ecosystem is designed to scale, adapt, and perform.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Enquire About IoT Solutions
                    </a>
                </div>
            </section>
        </main>
    );
};
