import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { marked } from 'marked';

const SlidesFromMarkdown = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const markdownUrl = 'https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/README.md';

    useEffect(() => {
        axios.get(markdownUrl)
            .then(response => {
                console.log(response);
                const sections = response.data.split('##').slice(1); // Split and remove first empty element
                setSlides(sections.map(section => marked(section.trim())));
            })
            .catch(error => console.error(error));
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide(current => (current + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide(current => (current - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            {slides.length > 0 ? (
                <div>
                    <div dangerouslySetInnerHTML={{ __html: slides[currentSlide] }} />
                    <button onClick={goToPreviousSlide}>Previous</button>
                    <button onClick={goToNextSlide}>Next</button>
                </div>
            ) : (
                <p>Loading slides...</p>
            )}
        </div>
    );
};

export default SlidesFromMarkdown;
