import React from 'react';
import { menuItems, contactInfo } from '../data/content';
import '../styles/Menu.css';

const Menu = () => {
    const getImageUrl = (name) => {
        return new URL(`../assets/${name}`, import.meta.url).href;
    };

    const handleOrder = (menuName) => {
        const message = `Saya ingin memesan ${menuName}`;
        const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="menu" className="section menu-section">
            <div className="container">
                <div className="section-title">
                    <h2>Menu Favorit</h2>
                    <p>Pilihan hidangan terbaik untuk selera Anda</p>
                </div>

                <div className="menu-grid">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-card">
                            <div className="menu-image-container">
                                <img
                                    src={getImageUrl(item.image)}
                                    alt={item.name}
                                    className="menu-image"
                                    loading="lazy"
                                />
                                {item.isBestSeller && (
                                    <span className="badge-best-seller">Best Seller</span>
                                )}
                            </div>
                            <div className="menu-info">
                                <div className="menu-header">
                                    <h3 className="menu-name">{item.name}</h3>
                                    <span className="menu-price">Rp {item.price.toLocaleString('id-ID')}</span>
                                </div>
                                <p className="menu-desc">{item.description}</p>
                                <button className="btn-add" onClick={() => handleOrder(item.name)}>Pesan</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
