import React from 'react';

interface MicIconProps {
    className?: string;
    onClick?: () => void;
}

const MicIcon: React.FC<MicIconProps> = ({ className = '', onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={`w-6 h-6 text-white transition transform hover:scale-110 hover:text-blue-400 ${className}`}
    >
        <path d="M12 1.75c-1.38 0-2.5 1.12-2.5 2.5v6.5a2.5 2.5 0 005 0V4.25c0-1.38-1.12-2.5-2.5-2.5zM5 10.75a7 7 0 0014 0M12 17.75v4m-4 0h8" />
    </svg>
);

export default MicIcon;
