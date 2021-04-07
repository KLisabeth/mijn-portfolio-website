import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingNotice from "../components/notice/LoadingNotice";
import { listProfile } from "../store/actions/profileActions";
import ReactMarkdown from "react-markdown";
import emoji from "emoji-dictionary";
import gfm from "remark-gfm";

function About() {
  const dispatch = useDispatch();
  const profileList = useSelector((state) => state.profileList);
  const { loading, profiles, error } = profileList;

  useEffect(() => {
    dispatch(listProfile());
  }, [dispatch]);

  const markdown = `
  A paragraph with *emphasis* and **strong importance**.
  
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  `;

  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));
  return (
    <div className="about">
      <div className="about_content">
        {loading === false ? (
          <div>
            <h6 className="text-danger justify-content-center text-center">
              {error && <div>{error}</div>}
            </h6>
            {profiles.map((profile) => (
              <div className="about_row" key={profile._id}>
                <div className="about_column">
                  <div className="my_img">
                    <img src={profile.image} alt=" " />
                  </div>
                  <a
                    className="about_btn"
                    href={profile.cv_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download my Cv
                  </a>
                </div>

                <div className="about_column">
                  <div className="about_title">ABOUT ME</div>

                  <ReactMarkdown
                    plugins={[[gfm, { singleTilde: false }]]}
                    children={markdown}
                    renderers={{ text: emojiSupport }}
                    className="about_h3"
                  >
                    {profile.bio}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <LoadingNotice />
        )}
      </div>
    </div>
  );
}
export default About;
