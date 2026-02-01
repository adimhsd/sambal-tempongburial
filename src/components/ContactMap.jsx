import React from 'react';
import { contactInfo } from '../data/content';
import '../styles/ContactMap.css';

const ContactMap = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-title">
                    <h2>Lokasi & Kontak</h2>
                    <p>Kunjungi kami atau pesan melalui aplikasi kesayangan Anda</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info-box">
                        <div className="info-item">
                            <h3>Alamat</h3>
                            <p>{contactInfo.address}</p>
                        </div>

                        <div className="info-item">
                            <h3>Jam Buka</h3>
                            <p>{contactInfo.openingHours}</p>
                        </div>

                        <div className="delivery-options">
                            <h3>Pesan Antar</h3>
                            <div className="delivery-buttons">
                                <a href="#" className="btn-delivery gofood">GoFood</a>
                                <a href="#" className="btn-delivery grabfood">GrabFood</a>
                                <a href="#" className="btn-delivery shopeefood">ShopeeFood</a>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src={contactInfo.googleMapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;
