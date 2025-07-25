import React from 'react';

const LogoWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="h-20 w-full flex items-center justify-center p-2 sm:p-4 text-slate-600 transition-transform duration-300 hover:scale-105">
        <div className="w-full h-full flex items-center justify-center">{children}</div>
    </div>
);

// SVGs and styled text used to represent logos as adding new image assets is not possible.

export const HpCircleLogo: React.FC = () => (
    <LogoWrapper>
       <img 
  src="images/clipart3121563.png" 
  alt="HP logo"
  class="h-10 w-10"
/>
    </LogoWrapper>
);

export const AcerLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-4xl font-bold text-green-600 tracking-tighter">acer</span>
    </LogoWrapper>
);

export const NComputingLogo: React.FC = () => (
   <LogoWrapper>
       <img 
  src="images\NComputing-logo.png" 
  alt="NCOMPUTING logo"
  class="h-25 w-25"
/>
</LogoWrapper>

);


export const HpRectangleLogo: React.FC = () => (
    <LogoWrapper>
        <img 
  src="images/clipart3121563.png" 
  alt="HP logo"
  class="h-10 w-10"
/>

    </LogoWrapper>
);

export const IbmLogo: React.FC = () => (
    <LogoWrapper>
          <img 
  src="images\IBM2.png" 
  alt="IBM logo"
  class="h-10 w-16"
/>

    </LogoWrapper>
);

export const AcerEmcLogo: React.FC = () => (
    <div className="text-3xl font-bold tracking-tighter text-center sm:text-left">
  <span className="text-green-600">acer</span>
  <span className="text-blue-800"> EMC²</span>
</div>

    </LogoWrapper>
);

export const CiscoLogo: React.FC = () => (
    <LogoWrapper>
         <img 
  src="images\CISCO.png" 
  alt="CISCO logo"
  class="h-12 w-16"
/>

    </LogoWrapper>
);

export const ApcLogo: React.FC = () => (
    <LogoWrapper>
         <img 
  src="images\APC2.png" 
  alt="APC logo"
  class="h-10 w-18"
/>

    </LogoWrapper>
);

export const EpsonLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-4xl font-bold text-blue-800">EPSON</span>
    </LogoWrapper>
);

export const YogaLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-3xl font-bold text-red-500 tracking-tighter">Honeywell</span>

    </LogoWrapper>
);

export const HoneywellLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-3xl font-bold text-red-600"></span>
    </LogoWrapper>
);

export const ZebraLogo: React.FC = () => (
    <LogoWrapper>
          <img  
  src="images\ZEBRA.png" 
  alt="ZEBRA logo"
  class="h-16 w-18"
/>

    </LogoWrapper>
);

export const FortunaLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-3xl font-bold text-cyan-600">Fortuna</span>
    </LogoWrapper>
);

export const MsfLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-4xl font-bold text-red-700">MSF</span>
    </LogoWrapper>
);
