import React from "react";
import ReactMarkdown from "react-markdown";
import emoji from 'emoji-dictionary'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
//import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from 'remark-gfm';




function Blogs() {

 
 
  const markdown = `
  A paragraph with *emphasis* and **strong importance**.
 
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
 
* Lists
* [ ] todo
* [x] done
  
A table:

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

JavaScript code:
\`\`\` js
console.log('It works!')
\`\`\`

link: https://reactjs.com

`;
const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={coldarkCold}>
      {value}
    </SyntaxHighlighter>
  )
};

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

  return (
    <div className="blog-page">
        <h1 className=" blog_title">My Blogs</h1>
         <div className="blog-container" >
                  <div className="blog-wrap">
                    <h1 className="blog_title">Blog title</h1>
                    <p>mar 26 2021</p>
                    <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]} children={markdown} renderers={{text: emojiSupport, code: CodeBlock }}  className="blog_article">
                     ## This is something to experiment

                     ```
                     console.log("hello world")
                     ```
                     
                    

                    </ReactMarkdown>
                  </div>
                </div>
           
          </div>
  );
}

export default Blogs;
