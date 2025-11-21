import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                gap: '2rem',
                                marginBottom: '3rem',
                                position: 'relative'
                            }}
                        >
                            {/* Timeline Line */}
                            {index !== experience.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    left: '8px',
                                    top: '24px',
                                    bottom: '-3rem',
                                    width: '2px',
                                    background: 'rgba(255,255,255,0.1)'
                                }} />
                            )}

                            {/* Dot */}
                            <div style={{
                                minWidth: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                marginTop: '6px',
                                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)'
                            }} />

                            <div>
                                <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>
                                    {job.period}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.2rem 0' }}>{job.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: '#aaa', marginBottom: '1rem' }}>{job.company}</h4>
                                <p style={{ color: '#ccc' }}>{job.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
