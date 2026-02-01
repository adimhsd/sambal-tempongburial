import React from 'react';
import { heroContent } from '../data/content';
import '../styles/Hero.css';

const Hero = () => {
    const { headline, subheadline, ctaText } = heroContent;

    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">{headline}</h1>
                <p className="hero-subtitle">{subheadline}</p>
                <a href="#menu" className="btn btn-hero">{ctaText}</a>
            </div>
        </section>
    );
};

export default Hero;
