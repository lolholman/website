import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                transition: 'all 0.3s ease'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    LH.
                </a>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                                onMouseOver={(e) => e.target.style.color = 'white'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>
            </div>

            {/* Mobile Menu Overlay (Simplified for now, can be enhanced with media queries in CSS) */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
