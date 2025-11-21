import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '1/1',
                                background: 'linear-gradient(45deg, #333, #111)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {/* Placeholder for profile image */}
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                                    [Profile Image Placeholder]
                                </div>
                            </div>
                        </div>

                        <div>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem' }}>
                                I am a passionate developer with a keen eye for design. My journey started with a curiosity for how things work on the web, which quickly turned into a career building immersive digital experiences.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' }}>
                                I specialize in the JavaScript ecosystem, primarily React and Node.js, but I'm always exploring new technologies to solve problems more efficiently.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'Three.js', 'Figma', 'Git'].map(skill => (
                                    <span key={skill} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
