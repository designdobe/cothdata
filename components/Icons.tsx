
import React from 'react';

// Replaced with the new COTH logo SVG, viewBox and dimensions adjusted for correct aspect ratio.
export const CothLogoMark: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 68 67" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g transform="translate(-405 -926)">
            <path d="M473.3,957.4c-1.4-16.3-14.3-29.8-31.2-31.4-18.9-1.7-35.7,12.2-37.4,31.1-1.7,18.9,12.2,35.7,31.1,37.4,18.9,1.7,35.7-12.2,37.4-31.1l-34.3-3.1,34.3-2.9Z" />
        </g>
    </svg>
);


// Replaced with new SVG path for hamburger menu for design consistency.
export const HamburgerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6H20M4 12H20M4 18H20"/>
    </svg>
);

export const UsersIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Replaced with the new Won Icon (inside a circle) to match the Figma design.
export const WonIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.2679L12 20.4342L15 11.2679L18 20.4342L21 11.2679M8 15H15H22M1.5 15C1.5 16.7728 1.84919 18.5283 2.52763 20.1662C3.20606 21.8041 4.20047 23.2923 5.45406 24.5459C6.70765 25.7995 8.19588 26.7939 9.83377 27.4724C11.4717 28.1508 13.2272 28.5 15 28.5C16.7728 28.5 18.5283 28.1508 20.1662 27.4724C21.8041 26.7939 23.2923 25.7995 24.5459 24.5459C25.7995 23.2923 26.7939 21.8041 27.4724 20.1662C28.1508 18.5283 28.5 16.7728 28.5 15C28.5 13.2272 28.1508 11.4717 27.4724 9.83377C26.7939 8.19588 25.7995 6.70765 24.5459 5.45406C23.2923 4.20047 21.8041 3.20607 20.1662 2.52763C18.5283 1.84919 16.7728 1.5 15 1.5C13.2272 1.5 11.4717 1.84919 9.83377 2.52763C8.19588 3.20607 6.70765 4.20047 5.45406 5.45406C4.20047 6.70765 3.20606 8.19588 2.52763 9.83377C1.84919 11.4717 1.5 13.2272 1.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TrendingUpIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export const TargetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);
