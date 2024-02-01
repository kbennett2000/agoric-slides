import SlidesFromMarkdown from "./controls/SlidesFromMarkdown";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SlidesFromMarkdown
        markdownUrl="https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/README.md"
        baseUrl="https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/"
      />
    </div>
  );
}

export default App;
