import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll for navbar background (optional future use)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems = [
        { label: "Technology", id: "technology" },
        { label: "Evolution", id: "evolution" },
        { label: "Indication", id: "indication" }
    ];

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 right-4 md:top-8 md:right-8 z-[1001] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-colors group"
            >
                {isOpen ? (
                    <X className="text-white group-hover:text-primary transition-colors" size={24} />
                ) : (
                    <Menu className="text-white group-hover:text-primary transition-colors" size={24} />
                )}
            </button>

            {/* Overlay Navigation */}
            <div className={`fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-16">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-5xl md:text-8xl font-heading tracking-widest text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navigation;
