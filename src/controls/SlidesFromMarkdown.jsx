// Import the necessary React library, axios for making HTTP requests, and the marked library for parsing Markdown content.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { marked } from 'marked';

// Define a functional component named SlidesFromMarkdown that accepts markdownUrl and baseUrl as props.
const SlidesFromMarkdown = ({ markdownUrl }) => {
    // useState hook to hold the array of slides, initially an empty array.
    const [slides, setSlides] = useState([]);
    // useState hook to track the current slide index, initially 0.
    const [currentSlide, setCurrentSlide] = useState(0);

    const baseUrl = trimUrlToBase(markdownUrl);

    // useEffect hook to perform side effects, in this case, to fetch and process the Markdown content.
    useEffect(() => {
        // Configure the marked library with options for parsing the Markdown.
        marked.setOptions({
            renderer: new marked.Renderer(), // Specifies a custom renderer.
            gfm: true, // Enables GitHub Flavored Markdown.
            breaks: true, // Converts line breaks to <br>.
            sanitize: false, // Disables HTML sanitization to allow raw HTML in Markdown files.
            smartLists: true, // Uses smarter list behavior than the original Markdown.
            smartypants: true // Applies typographic enhancements to quotes and dashes.
        });

        // Fetch the Markdown content from the provided URL using axios.
        axios.get(markdownUrl)
            .then(response => {
                // Replace relative links in the fetched Markdown content with the absolute baseUrl.
                const updatedContent = response.data.replace(/]\(\.\//g, `](${baseUrl}`);
                // Split the updated content into sections based on "##" to separate slides.
                const sections = updatedContent.split('##').slice(1);
                    // Attempt to match and extract the headline from the section.
                    const headlineMatch = updatedContent.match(/^#\s*(.*)/m);

                // Map each section to a slide object after processing.
                setSlides(sections.map(section => {
                    let headline = "";
                    if (headlineMatch) {
                        headline = headlineMatch[1]; // Assign the matched headline text.
                    }
                    // Process the section content with marked to convert Markdown to HTML.
                    let htmlContent = marked(section.replace(/:::(.*?):::/gs, (match, p1) => {
                        // Replace custom ":::" blocks with a div that has a "special-content" class.
                        return `<div class="special-content">${marked(p1.trim())}</div>`;
                    }).trim());
                    // Remove the first occurrence of any line starting with '#' in the HTML content.
                    htmlContent = htmlContent.replace(/^#\s*(.*)/m, '');                    
                    const slideTitle = section.split('\n')[0].trim().replace('#', '');
                    htmlContent = htmlContent.replace(slideTitle, '');       

                    return {
                        headline: headline, // Include the extracted headline in the slide object.
                        title: section.split('\n')[0].trim().replace('#', ''), // Set the slide title, removing any leading '#'.
                        content: htmlContent // Include the processed HTML content in the slide object.
                    };
                }));
            })
            .catch(error => console.error(error)); // Log any errors that occur during fetching or processing.
    }, [markdownUrl, baseUrl]); // Re-run this effect if markdownUrl or baseUrl props change.

    // Function to advance to the next slide by incrementing the currentSlide index.
    const goToNextSlide = () => {
        setCurrentSlide(current => (current + 1) % slides.length);
    };

    // Function to go back to the previous slide by decrementing the currentSlide index.
    const goToPreviousSlide = () => {
        setCurrentSlide(current => (current - 1 + slides.length) % slides.length);
    };

    function trimUrlToBase(url) {
        // Find the last occurrence of "/"
        const lastIndex = url.lastIndexOf("/");
        
        // Extract the substring from the beginning of the string to the position just before the last "/"
        const baseUrl = url.substring(0, lastIndex + 1);
        
        return baseUrl;
    }

    // Render the component UI.
    return (
        <div className="container mx-auto px-4">
            {slides.length > 0 ? ( 
                <div className="slide">
                    <h1 className="slide-headline text-3xl font-bold mb-2">
                        {slides[currentSlide].headline}
                    </h1>
                    <h2 className="slide-title text-2xl font-semibold mb-4">
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

// Export the component for use in other parts of the application.
export default SlidesFromMarkdown;
