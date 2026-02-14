import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

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
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <a href="#home" style={{ 
                    textDecoration: 'none', 
                    fontSize: '1.5rem', 
                    fontWeight: '800', 
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.1em',
                    color: 'white'
                }}>
                    SAF<span style={{ color: 'var(--accent-cyan)' }}>.IQ</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-cyan-400 transition-colors"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden" style={{ display: 'none' }}>
                    {/* Hidden on desktop usually handled by media queries in CSS, but here inline styles are tricky. 
              I'll add a class for responsive hiding if I had Tailwind, but I'm using vanilla CSS mostly.
              I'll rely on a CSS class `.mobile-menu-btn` defined below or just standard media queries. 
          */}
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-lg"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: 'rgba(10, 10, 10, 0.95)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="flex flex-col items-center py-8 gap-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
          .md\\:hidden { display: block !important; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
