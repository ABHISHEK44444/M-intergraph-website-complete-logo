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
  src="images\DELLEMC2.jpg" 
  alt="Dellem2 logo"
  class="h-10 w-16"
/>

    </LogoWrapper>
);

export const AcerEmcLogo: React.FC = () => (
  <LogoWrapper>
      

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

export const JuniperLogo: React.FC = () => (
    <LogoWrapper>
         <img 
  src="images\juniper.png" 
  alt="APC logo"
  class="h-10 w-18"
/>

    </LogoWrapper>
);

export const ArubaLogo: React.FC = () => (
    <LogoWrapper>
         <img 
  src="images\aruba.png" 
  alt="Aruba logo"
  class="h-16 w-18"
/>

    </LogoWrapper>
);

export const YogaLogo: React.FC = () => (
    <LogoWrapper>
        <span className="text-3xl font-bold text-red-500 tracking-tighter">Honeywell</span>

    </LogoWrapper>
);

export const HoneywellLogo: React.FC = () => (
    <LogoWrapper>
         <img  
  src="images\ZEBRA.png" 
  alt="ZEBRA logo"
  class="h-16 w-18"
/>

    </LogoWrapper>
);

export const ZebraLogo: React.FC = () => (
    <LogoWrapper>
            <img  
  src="images\cpplus.png" 
  alt="CPPLUS logo"
  class="h-16 w-17"
/>

    </LogoWrapper>
);

export const FortunaLogo: React.FC = () => (
    <LogoWrapper>
           <img  
  src="images\sparsh.png" 
  alt="SPARSH logo"
  class="h-16 w-18"
/>
    </LogoWrapper>
);

export const MsfLogo: React.FC = () => (
    <LogoWrapper>
           <img  
  src="images\hikvision.png" 
  alt="HIKVISION logo"
  class="h-14 w-17"
/>
    </LogoWrapper>
);

export const PanasonicLogo: React.FC = () => (
    <LogoWrapper aria-label="Panasonic Logo">
        <svg viewBox="0 0 200 50" className="h-8 w-auto" fill="none">
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, sans-serif"
                fontSize="35"
                fontWeight="bold"
                fill="#00529B"
            >
                Panasonic
            </text>
        </svg>
    </LogoWrapper>
);




export const EatonLogo: React.FC = () => (
    <LogoWrapper>
           <img  
  src="images\eaton.png" 
  alt="EATON logo"
  class="h-16 w-17"
/>
    </LogoWrapper>
);

export const NumericLogo: React.FC = () => (
    <LogoWrapper>
           <img  
  src="images\numeric.png" 
  alt="Numeric logo"
  class="h-18 w-24"
/>
    </LogoWrapper>
);

export const VertivLogo: React.FC = () => (
    <LogoWrapper>
           <img  
  src="images\vertiv.png" 
  alt="Vertiv logo"
  class="h-16 w-18"
/>
    </LogoWrapper>
);





