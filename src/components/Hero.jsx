import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-subheading)',
                        fontSize: '2rem',
                        color: 'var(--accent-primary)',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: '400'
                    }}>
                        Hello, I'm
                    </h2>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(5rem, 12vw, 10rem)',
                        fontWeight: '400',
                        lineHeight: 0.8,
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                    }}>
                        Lauren<br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--text-primary)' }}>Holman</span>
                    </h1>
                    <h3 style={{
                        fontFamily: 'var(--font-subheading)',
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        fontWeight: '400',
                        letterSpacing: '0.05em'
                    }}>
                        {profile.role}
                    </h3>
                    <p style={{ maxWidth: '500px', margin: '0 auto 4rem', fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                        {profile.bio}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
