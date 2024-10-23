import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism"; // Minimal style
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar"; // Left Sidebar
import RightSidebar from "./components/RightSidebar"; // Right Sidebar
import gtaImage from "./assets/gta-5.jpg";
import MarkdownRenderer from "./components/MarkdownRenderer"; // Right Sidebar

const markdownContent = `
This is a sample Markdown content.
### Features-1
### Features-2
### Features-3

- Easy to use
- Highly customizable
- Works with Tailwind CSS

Here is a [link](https://example.com) to an external site.
~~~js
const aJsVariable = "Test";

console.log(aJsVariable);
~~~
`;

function App() {
  const extractSubHeadings = (content) => {
    const regex = /^### (.+)$/gm; // Regular expression to match lines starting with '##'
    const matches = content.match(regex); // Get all matches

    if (matches) {
      // Clean the matches to remove the '## ' prefix
      return matches.map((match) => match.replace(/^### /, ""));
    }

    return []; // Return an empty array if no matches found
  };

  // const subHeadings =
  // console.log(subHeadings);

  const codeString = `
  const sum = (a, b) => {
    return a + b;
  };

  console.log(sum(2, 3)); // Outputs: 5
`;

  const note =
    "Note: This post is not finished. I sometimes publish early in case it will be helpful to someone.";
  const items = [
    { title: "Main Item 1", subItems: ["Sub Item 1A", "Sub Item 1B"] },
    { title: "Main Item 2", subItems: ["Sub Item 2A"] },
    { title: "Main Item 3", subItems: [] },
  ];
  const tocItems = [
    "Example",
    "How It Works",
    "Why Is This a Big Deal?",
    "Install Pretty Code",
    "Setup Pretty Code",
    "Create a Code Block",
    "Customize Theme",
  ];

  return (
    <div className="bg-black text-white relative">
      <Navbar />
      <LeftSidebar note={note} />
      {/* <RightSidebar items={tocItems} /> */}

      <RightSidebar items={extractSubHeadings(markdownContent)} />
      <div className="px-8 py-12 mx-60">
        <div className="px-8 py-12">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight max-w-4xl text-left">
            Exploring the World's Largest Nature Reserve
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-3xl text-left">
            Dividing these deserts, the mountain range rises like a backbone
            across the landscape, with peaks reaching skyward and valleys that
            hide secret oases.
          </p>

          <p className="mt-2 text-gray-400 text-left">Mar 16, 2024</p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={gtaImage}
            alt="Nature 1"
            className="object-cover w-1/2 h-1/2"
          />
        </div>

        {/* Code Snippet Section */}
        {/* <div className="bg-black text-white p-8">
          <h1 className="text-3xl mb-6">Code Snippet Example</h1>

          <SyntaxHighlighter
            language="javascript"
            style={prism}
            customStyle={{
              backgroundColor: "#e3e3e3", // Light background
              color: "#333", // Dark text for the code
              fontSize: "14px", // Adjust font size
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #e1e4e8", // Light border
            }}
            codeTagProps={{
              style: {
                backgroundColor: "transparent", // Remove any specific background color from tokens
              },
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div> */}
        <div>
          <MarkdownRenderer content={markdownContent} />
        </div>
      </div>
    </div>
  );
}

export default App;
