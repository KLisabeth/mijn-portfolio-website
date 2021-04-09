import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import emoji from "emoji-dictionary";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
//import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../store/actions/blogActions";
import LoadingNotice from "../components/notice/LoadingNotice";
import Footer from "../components/Footer";

function Blogs() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, blogs, error } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

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
    );
  };

  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));

  return (
    <div className="blog-page">
      <h1 className=" blog_title">My Blogs</h1>
      {loading === false ? (
        <div>
          <h6 className="text-danger justify-content-center text-center">
            {error && <div>{error}</div>}
          </h6>

          {blogs
            .slice(0)
            .reverse()
            .map((blog) => (
              <div className="blog-container" key={blog._id}>
                <div className="blog-wrap">
                  <h1 className="blog_title">{blog.title}</h1>
                  <p>{blog.created}</p>
                  <ReactMarkdown
                    plugins={[[gfm, { singleTilde: false }]]}
                    children={markdown}
                    renderers={{ text: emojiSupport, code: CodeBlock }}
                    className="blog_article"
                  >
                    {blog.article}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <LoadingNotice />
      )}
      <Footer />
    </div>
  );
}

export default Blogs;
