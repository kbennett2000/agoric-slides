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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {slides.length > 0 ? (
                <div className="w-full max-w-4xl p-5 bg-white rounded shadow-md">
                    <div dangerouslySetInnerHTML={{ __html: slides[currentSlide] }} className="prose max-w-none"/>
                    <div className="flex justify-between mt-4">
                        <button onClick={goToPreviousSlide} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Previous</button>
                        <button onClick={goToNextSlide} className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Next</button>
                    </div>
                </div>
            ) : (
                <p>Loading slides...</p>
            )}
        </div>
    );
};

export default SlidesFromMarkdown;
