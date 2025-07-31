import React from 'react';
import {
  HpCircleLogo, AcerLogo, NComputingLogo,
  HpRectangleLogo, IbmLogo, AcerEmcLogo,
  CiscoLogo, ApcLogo, EpsonLogo, JuniperLogo, ArubaLogo,
   VertivLogo, EatonLogo,NumericLogo,
  YogaLogo, HoneywellLogo,
  ZebraLogo, FortunaLogo, MsfLogo, PanasonicLogo
 
} from './ClientLogoComponents';

const clientData = [
  {
    category: 'Client',
    logos: [<HpCircleLogo key="hp-c" />, <AcerLogo key="acer" />, <NComputingLogo key="ncomp" />],
  },
  {
    category: 'Server & Storage',
    logos: [<HpRectangleLogo key="hp-r" />, <IbmLogo key="ibm" />, <AcerEmcLogo key="acer-emc" />],
  },
  {
    category: 'Networking Others',
    logos: [<CiscoLogo key="cisco" />, <ApcLogo key="apc" />, <EpsonLogo key="epson" />, <JuniperLogo key="juniper" />, <ArubaLogo key="aruba" />],
  },
  {
    category: 'Power Solution',
    logos: [<VertivLogo key="vertiv" />, <EatonLogo key="eaton" />,<NumericLogo key="numeric" />],
  },
  {
    category: 'Aidc & Rfid',
    logos: [<YogaLogo key="yoga" />, <HoneywellLogo key="honeywell" />],
  },
  {
    category: 'Security & Surveillance',
    logos: [<ZebraLogo key="zebra" />, <FortunaLogo key="fortuna" />, <MsfLogo key="msf" />, <PanasonicLogo key="panasonic" />],
  },
];

export const ClientLogos: React.FC = () => {
  const categories = clientData.map(d => d.category);
  const logosByColumn = clientData.map(d => d.logos);
  const maxRows = Math.max(...logosByColumn.map(l => l.length));

  return (
    <div className="bg-white py-20 sm:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Esteemed Partners & Clientele
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We are proud to collaborate with a diverse range of industry leaders to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="mt-16 hidden lg:block bg-gradient-to-b from-slate-50 to-slate-100 p-2 sm:p-4 md:p-8 rounded-2xl shadow-lg border border-slate-200">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b-2 border-slate-300">
                {categories.map((category, index) => (
                  <th
                    key={category}
                    className={`py-4 px-1 sm:px-2 md:px-3 text-center font-semibold text-slate-700 text-xs sm:text-sm md:text-base ${index < categories.length - 1 ? 'border-r border-slate-200' : ''}`}
                  >
                    {category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(maxRows)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {logosByColumn.map((logos, colIndex) => (
                    <td
                      key={`${categories[colIndex]}-${rowIndex}`}
                      className={`align-middle text-center py-6 ${colIndex < logosByColumn.length - 1 ? 'border-r border-slate-200' : ''}`}
                    >
                      {logos[rowIndex] || <div className="h-24"></div>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet View */}
        <div className="mt-16 block lg:hidden space-y-10">
          {clientData.map((group) => (
            <div key={group.category}>
              <h3 className="py-3 px-4 text-center text-base sm:text-lg font-semibold text-slate-800 bg-slate-200 rounded-t-lg border-b-2 border-slate-300">
                {group.category}
              </h3>
              <div className="p-4 bg-slate-50 rounded-b-lg shadow-md border border-t-0 border-slate-200">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4 items-center">
                  {group.logos.map((logo, logoIndex) => (
                    <div key={logoIndex}>
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
