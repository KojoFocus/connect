import React from 'react';
import Carousel from './Carousel';

const Hero: React.FC = () => {
    const slides = [
        {
            smallTitle: "Welcome to Connect Pro",
            strongTitle: "01/05",
            mainTitle: "Empowering entrepreneurs to succeed",
            buttonText: "Get Started",
            youtubeLink: "https://www.youtube.com/watch?v=AYaHuZ4BB6Y",
            imageUrl: "/images/slide/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg"
        },
        {
            smallTitle: "Discover New Opportunities",
            strongTitle: "02/05",
            mainTitle: "Connecting resources to your big ideas",
            buttonText: "Explore Opportunities",
            youtubeLink: "https://www.youtube.com/watch?v=VStvZjykQ00",
            imageUrl: "/images/slide/jason-goodman-0K7GgiA8lVE-unsplash.jpg"
        }
    ];

    return (
        <section className="hero">
            <Carousel slides={slides} />
        </section>
    );
};

export default Hero;