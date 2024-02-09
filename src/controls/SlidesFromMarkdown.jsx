import React, { useState, useEffect } from "react";
import axios from "axios";
import { marked } from "marked";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const SlidesFromMarkdown = ({ markdownUrl }) => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  // The full URL with everything after the last '/' removed.
  const baseUrl = trimUrlToBase(markdownUrl);

  useEffect(() => {
    console.log("SlidesFromMarkdown markdownUrl - " + markdownUrl);
    marked.setOptions({
      renderer: new marked.Renderer(), // Specifies a custom renderer.
      gfm: true, // Enables GitHub Flavored Markdown.
      breaks: true, // Converts line breaks to <br>.
      sanitize: false, // Disables HTML sanitization to allow raw HTML in Markdown files.
      smartLists: true, // Uses smarter list behavior than the original Markdown.
      smartypants: true, // Applies typographic enhancements to quotes and dashes.
    });

    // Fetch the Markdown content
    axios
      .get(markdownUrl)
      .then((response) => {
        setCurrentSlide(0);
        // Replace relative links in the fetched Markdown content with the absolute baseUrl.
        const updatedContent = response.data.replace(/]\(\.\//g, `](${baseUrl}`);
        // Split the updated content into sections based on "##" to separate slides.
        const sections = updatedContent
          .split(/(?<=\n)## (?!#)/)
          .map((section) => section.trim())
          .filter((section) => section);
        // Attempt to match and extract the headline from the section.
        const headlineMatch = updatedContent.match(/^#\s*(.*)/m);

        // Map each section to a slide
        setSlides(
          sections.map((section) => {
            let headline = "";
            if (headlineMatch) {
              headline = headlineMatch[1]; // Assign the matched headline text.
            }
            // Process the section content with marked to convert Markdown to HTML.
            let htmlContent = marked(
              section
                .replace(/:::(.*?):::/gs, (match, p1) => {
                  // Replace custom ":::" blocks with a div that has a "special-content" class.
                  return `<div class="special-content">${marked(p1.trim())}</div>`;
                })
                .trim()
            );
            
            // Extract the slide title, remove any "#"
            let slideTitle = section.split("\n")[0].trim().replace("#", "");

            // *** HTML CLEAN-UP
            // Remove the first occurrence of any line starting with '#' in the HTML content.
            htmlContent = htmlContent.replace(/^#\s*(.*)/m, "");
            // Remove the slide title from the slide body text
            htmlContent = htmlContent.replace(slideTitle, "");
            // Remove any empty tags from the HTML content
            htmlContent = removeEmptyTags(htmlContent);
            // Remove any breaks in the HTML
            htmlContent = htmlContent.replace("<br>", "");
            // Add slide-image class to img elements
            htmlContent = addClassToImages(htmlContent, "slide-image");

            // If the headline and slide title are the same, no need to display the title
            if (headline.trim() === slideTitle.trim()) {
              slideTitle = "";
            }

            // Remove the headline from the slide content if it appears.
            htmlContent = htmlContent.replace(`<h1>${headline}</h1>`, "");

            // Sanitize the HTML
            const sanitizedHtml = DOMPurify.sanitize(htmlContent);

            // Return the slide object
            return {
              headline: headline, // Include the extracted headline in the slide object.
              title: slideTitle, // Set the slide title, removing any leading '#'.
              content: sanitizedHtml, // Include the processed HTML content in the slide object.
            };
          })
        );
      })
      .catch((error) => console.error(error)); // Log any errors that occur during fetching or processing.
  }, [markdownUrl, baseUrl]); // Re-run this effect if markdownUrl or baseUrl props change.

  // Advance to the next slide by incrementing the currentSlide index.
  const goToNextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  // Go back to the previous slide by decrementing the currentSlide index.
  const goToPreviousSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  // Remove everything after the last '/' in a supplied URL
  function trimUrlToBase(url) {
    // Find the last occurrence of "/"
    const lastIndex = url.lastIndexOf("/");
    // Extract the substring from the beginning of the string to the position just before the last "/"
    const baseUrl = url.substring(0, lastIndex + 1);
    // Return the result
    return baseUrl;
  }

  // Remove any empty tags from the input HTML
  // Example: Tags like <p></p> will be removed
  function removeEmptyTags(htmlString) {
    // Regular expression to match empty tags. This pattern matches an opening tag,
    // followed by optional spaces or line breaks, followed by a closing tag of the same type.
    // The \s* inside the tag matches any spaces that might be present in the tag itself (e.g., attributes).
    // The (?:<\/\1>) part ensures that the closing tag matches the opening tag.
    const emptyTagPattern = /<(\w+)\s*><\/\1>/g;

    // Use the replace function to remove all instances of empty tags from the HTML string.
    // The function will replace each empty tag found with an empty string, effectively removing it.
    let cleanedHtml = htmlString;
    let previousHtml = "";
    // Continue replacing until no more replacements are made, to catch nested empty tags
    while (previousHtml !== cleanedHtml) {
      previousHtml = cleanedHtml;
      cleanedHtml = cleanedHtml.replace(emptyTagPattern, "");
    }
    // Return the cleaned HTML
    return cleanedHtml;
  }

  // Add the supplied class name to all img elements in the supplied HTML
  function addClassToImages(htmlString, className) {
    // Create a new DOMParser instance
    const parser = new DOMParser();

    // Parse the HTML string into a document object
    const doc = parser.parseFromString(htmlString, "text/html");

    // Query all <img> elements in the document
    const images = doc.querySelectorAll("img");

    // Add the "slide-image" class to each <img> element
    images.forEach((img) => img.classList.add(className));

    // Serialize the document object back to an HTML string
    const serializer = new XMLSerializer();
    const modifiedHtmlString = serializer.serializeToString(doc);

    // Return the modified HTML string
    return modifiedHtmlString;
  }

  // Return null when there's no URL
  if (!markdownUrl) {
    return null;
  }

  // Before rendering the component, check if slides[currentSlide] is defined
  if (!slides.length || typeof slides[currentSlide] === 'undefined') {
    return <div>Loading slides...</div>;
  }

  // Calculate titles for the Previous and Next slides
  const getAdjacentSlideTitles = (currentIndex, slides) => {
    let prevTitle = currentIndex > 0 ? slides[currentIndex - 1].title : '';
    if (!prevTitle) {
      prevTitle = currentIndex > 0 ? slides[currentIndex - 1].headline : '';
    }
    let nextTitle = currentIndex < slides.length - 1 ? slides[currentIndex + 1].title : '';
    return { prevTitle, nextTitle };
  };

  const { prevTitle, nextTitle } = getAdjacentSlideTitles(currentSlide, slides);

  // Render the component UI.
  return (
    <div className="container mx-auto px-4">
      {slides.length > 0 ? (
        <div className="slide" >
          <h1 className="slide-headline text-3xl font-bold mb-2">{slides[currentSlide].headline}</h1>
          {slides[currentSlide].title && <h2 className="slide-title text-2xl font-semibold mb-4">{slides[currentSlide].title}</h2>}
          <div className="slide-content mb-6 overflow-auto" style={{ maxHeight: "600px", minHeight: "600px" }} >{parse(slides[currentSlide].content)}</div>
          <div className="slide-controls flex justify-between">
            <button className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`} onClick={goToPreviousSlide} disabled={currentSlide === 0}>
            {prevTitle ? `Previous: ${prevTitle}` : 'Previous'}
            </button>
            <button className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${currentSlide === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`} onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
            {nextTitle ? `Next: ${nextTitle}` : 'Next'}
            </button>
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
