import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected Works
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'transform 0.3s ease'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0', color: 'white' }}>{project.title}</h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{ fontSize: '0.8rem', color: '#666' }}>#{t}</span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.link} className="btn-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '0.9rem' }}>
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href="#" className="btn-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa', fontSize: '0.9rem' }}>
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
