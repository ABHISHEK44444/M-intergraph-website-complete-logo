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

interface AidcPageProps {
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

export const AidcPage: React.FC<AidcPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-white">
            <section 
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3183148/pexels-photo-3183148.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Identification</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Automatic Identification and Data Capture (AIDC)
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Simplifying asset tracking, authentication, and real-time data collection through intelligent auto-ID technologies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <QrCodeIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Powering Smart Identification</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                            AIDC technologies, including barcodes, RFID, biometrics, and smart cards, enhance speed, accuracy, and traceability across operations. From warehouse automation to patient safety and retail POS, AIDC drives smarter business decisions.
                        </p>
                        <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                            We integrate trusted hardware with scalable systems for secure and seamless identification workflows.
                        </p>
                    </div>
                </div>
            </section>

            <section id="hardware" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-gray-200 scroll-mt-28">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Hardware Products Catalog</h2>
                        <p className="mt-6 text-xl text-slate-600">
                            Explore our range of AIDC-enabled devices designed to streamline identification and tracking tasks across industries.
                        </p>
                    </div>

                    <div className="mt-20 max-w-7xl mx-auto space-y-16 animate-on-scroll">
                        <ProductGroup title="Zebra Products">
                            <HardwareItem icon={<QrCodeIcon />} name="Zebra RFID Readers" />
                            <HardwareItem icon={<DevicePhoneMobileIcon />} name="Zebra Mobile Computers" />
                            <HardwareItem icon={<WifiIcon />} name="Zebra RFID Antennas" />
                            <HardwareItem icon={<PrinterIcon />} name="Zebra RFID Printers" />
                            <HardwareItem icon={<PrinterIcon />} name="Zebra Barcode Printers" />
                            <HardwareItem icon={<ComputerDesktopIcon />} name="Zebra Kiosk System" />
                            <HardwareItem icon={<CpuChipIcon />} name="Zebra Wearable Devices" />
                            <HardwareItem icon={<QrCodeIcon />} name="Zebra Handheld Scanners" />
                            <HardwareItem icon={<ComputerDesktopIcon />} name="Zebra Tablets & Rugged Laptops" />
                        </ProductGroup>

                        <ProductGroup title="Other IoT & Barcode Products">
                            <HardwareItem icon={<TagIcon />} name="RFID Tags (Passive/Active, UHF, NFC)" />
                            <HardwareItem icon={<QrCodeIcon />} name="Fixed & Handheld RFID Readers" />
                            <HardwareItem icon={<WifiIcon />} name="RFID Antennas (circular, linear, panel)" />
                            <HardwareItem icon={<SignalIcon />} name="BLE Beacons & Gateways" />
                            <HardwareItem icon={<MapPinIcon />} name="GPS Trackers & Asset Sensors" />
                            <HardwareItem icon={<TagIcon />} name="Barcode Labels (Thermal/Direct)" />
                            <HardwareItem icon={<QrCodeIcon />} name="Barcode Scanners (1D/2D, omni)" />
                            <HardwareItem icon={<TicketIcon />} name="Barcode Ribbons (Wax, Resin)" />
                            <HardwareItem icon={<PrinterIcon />} name="Industrial Barcode & Label Printers" />
                            <HardwareItem icon={<CpuChipIcon />} name="Environmental & Vibration Sensors" />
                            <HardwareItem icon={<ClockIcon />} name="Temperature & Humidity Loggers" />
                            <HardwareItem icon={<ServerStackIcon />} name="Edge Gateways & IoT Controllers" />
                        </ProductGroup>
                    </div>
                </div>
            </section>

            

            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Deploy AIDC?</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                        From inventory control and logistics to healthcare and access control—our AIDC ecosystem adapts to your operational needs.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Enquire About AIDC Solutions
                    </a>
                </div>
            </section>
        </main>
    );
};
