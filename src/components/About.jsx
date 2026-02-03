import React from 'react';
import '../styles/About.css';
import interiorImg from '../assets/about-interior.png';
import parkingImg from '../assets/parking-area.png';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-title">
                    <h2>Tentang Kami</h2>
                    <p>Lebih dari sekadar tempat makan, kami adalah rumah bagi cita rasa Nusantara.</p>
                </div>

                <div className="about-grid">
                    {/* Row 1: Text Left, Image Right */}
                    <div className="about-row">
                        <div className="about-content">
                            <h3>Suasana Hangat nan Nyaman</h3>
                            <p>
                                Kami percaya bahwa makanan lezat terasa lebih nikmat saat disantap dalam suasana yang tepat.
                                Restoran kami didesain dengan sentuhan tradisional dan modern, menciptakan ruang yang hangat
                                untuk berkumpul bersama keluarga dan sahabat.
                            </p>
                            <p>
                                Setiap sudut ruangan menceritakan kisah budaya Indonesia, membuat Anda merasa seolah pulang ke rumah.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src={interiorImg} alt="Interior Restoran" loading="lazy" />
                        </div>
                    </div>

                    {/* Row 2: Image Left, Text Right */}
                    <div className="about-row reverse">
                        <div className="about-image">
                            <img src={parkingImg} alt="Area Parkir Luas" loading="lazy" />
                        </div>
                        <div className="about-content">
                            <h3>Parkiran yang Luas</h3>
                            <p>
                                Kami mengerti betapa pentingnya kenyamanan Anda, bahkan sebelum Anda memasuki restoran.
                                Oleh karena itu, kami menyediakan area parkir yang sangat luas dan tertata rapi.
                            </p>
                            <p>
                                Baik Anda datang dengan sepeda motor, mobil pribadi, maupun rombongan dengan bus pariwisata,
                                kendaraan Anda akan aman dan mudah diparkir, sehingga Anda bisa menikmati hidangan dengan tenang.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
