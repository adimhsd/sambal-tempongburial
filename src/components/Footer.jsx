import React from 'react';
import '../styles/Footer.css';
import { contactInfo } from '../data/content';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { instagram, facebook, tiktok, whatsapp, whatsappMessage } = contactInfo;
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>Sambal Tempong <span className="logo-accent">Burial</span></h3>
                    <p>Sensasi pedas yang bikin nagih!</p>
                </div>

                <div className="social-links">
                    <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                    <a href={tiktok} target="_blank" rel="noopener noreferrer" className="social-icon tiktok" aria-label="TikTok">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                        </svg>
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Sambal Tempong Burial. All rights reserved.</p>
                    <p style={{ marginTop: '5px', fontSize: '0.8rem' }}>Developed by <a href="https://adi-muhamad.my.id" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>adi-muhamad.my.id</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
