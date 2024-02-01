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

                // Extract headline (content starting with "#")
                const headlineMatch = updatedContent.match(/^#\s*(.*)/m);

                setSlides(sections.map(section => {
                    let headline = "";
                    if (headlineMatch) {
                        headline = headlineMatch[1];
                        section = section.replace(headlineMatch[0], ''); // Remove headline from the section content
                    }
                    let htmlContent = marked(section.replace(/:::(.*?):::/gs, (match, p1) => {
                        return `<div class="special-content">${marked(p1.trim())}</div>`;
                    }).trim());
                    htmlContent = htmlContent.replace(section.split('\n')[0].trim(), '');                    
                    return {
                        headline: headline, // Add extracted headline to the slide object
                        title: section.split('\n')[0].trim().replace('#', ''),
                        content: htmlContent
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
                    {/* Display the headline above the title if it exists */}
                    {slides[currentSlide].headline && (
                        <h1 className="slide-headline text-3xl font-bold mb-2">
                            {slides[currentSlide].headline}
                        </h1>
                    )}
                    <h2 className="slide-title text-2xl font-semibold mb-">
                        {slides[currentSlide].title}
                    </h2>
                    <div className="slide-content mb-6 overflow-auto" style={{ maxHeight: '600px', minHeight: '600px' }} dangerouslySetInnerHTML={{ __html: slides[currentSlide].content }} />
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
