import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '3rem' }}>
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <a href={`mailto:${profile.email}`} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        <Mail /> Say Hello
                    </a>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        {profile.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#aaa',
                                    transition: 'color 0.2s, transform 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = '#aaa';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <social.icon size={24} />
                                <span style={{ fontSize: '0.8rem' }}>{social.label}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
