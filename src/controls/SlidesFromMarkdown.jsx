import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { marked } from 'marked';

const SlidesFromMarkdown = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const markdownUrl = 'https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/README.md';
    const baseUrl = 'https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/';

    useEffect(() => {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: true
        });

        axios.get(markdownUrl)
            .then(response => {
                const updatedContent = response.data.replace(/]\(\.\//g, `](${baseUrl}`);
                const sections = updatedContent.split('##').slice(1);
                setSlides(sections.map(section => {
                    const htmlContent = marked(section.replace(/:::(.*?):::/gs, (match, p1) => {
                        return `<div class="special-content">${marked(p1.trim())}</div>`;
                    }).trim());
                    return {
                        title: section.split('\n')[0].trim(),
                        content: htmlContent.replace(section.split('\n')[0].trim(), '')
                    };
                }));
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
        <div className="container mx-auto px-4">
            {slides.length > 0 ? (
                <div className="slide">
                    <h2 className="slide-title text-2xl font-bold mb-4">
                        {slides[currentSlide].title}
                    </h2>
                    {/* Apply inline styles for fixed size and overflow handling */}
                    <div className="slide-content mb-6 overflow-auto" style={{ maxHeight: '350px', minHeight: '350px' }} dangerouslySetInnerHTML={{ __html: slides[currentSlide].content }} />
                    <div className="slide-controls flex justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToPreviousSlide}>Previous</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToNextSlide}>Next</button>
                    </div>
                </div>
            ) : (
                <p>Loading slides...</p>
            )}
        </div>
    );
};

export default SlidesFromMarkdown;
