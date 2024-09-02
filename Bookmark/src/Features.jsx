import React, {useEffect, useState } from "react";

const Features = () => {
  const [tab, setTab] = useState("tab1");
  const [selectedTab, setSelectedTab] = useState("hrTab1");
  const [boldstate, setBoldstate] = useState("title1");
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [isMobile, setIsMobile] = useState(true);

  useEffect (()=>{

    const handleResize = () => {

      if(window.innerWidth <=768){
        setIsMobile(true)
       
      }else{
        setIsMobile(false)

      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize",handleResize);

  },[]);


  const data = [
    {
      question: "what a bookmark ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser ?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  const selectQuestion = (i) => {
    if (selectedQuestion === i) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(i);
    }
  };

  return (
    <>
      <section className="features">
        <h1>Features</h1>
        <p className="notes">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <div className="tabs">
        <hr className="tabs-hr" />
          <p
            onClick={() => {
              setTab("tab1");
              setBoldstate("title1");
              setSelectedTab("hrTab1");
            }}
            style={{ fontWeight: boldstate === "title1" ? "bold" : "normal" }}
          >
            Simply Bookmarking
          </p>
         {(isMobile && tab === "tab1") && (<div
            className="selected-tab"
            id="selected-tab1"
          ></div>
        )}
          <hr className="tabs-hr" />
          <p
            onClick={() => {
              setTab("tab2");
              setBoldstate("title2");
              setSelectedTab("hrTab2");
            }}
            style={{ fontWeight: boldstate === "title2" ? "bold" : "normal" }}
          >
            Speedy Searching
          </p>
          {(isMobile && tab === "tab2") && (<div
            className="selected-tab"
            id="selected-tab2"
          ></div>
        )}
          <hr className="tabs-hr" />
          <p
            onClick={() => {
              setTab("tab3");
              setBoldstate("title3");
              setSelectedTab("hrTab3");
            }}
            style={{ fontWeight: boldstate === "title3" ? "bold" : "normal" }}
          >
            Easy Sharing
          </p>
          {(isMobile && tab === "tab3") && (<div
            className="selected-tab"
            id="selected-tab3"
          ></div>
        )}
          {!isMobile && (<div
            className="selected-tab"
            style={{
              transform:
                selectedTab === "hrTab1"
                  ? "translateX(0%)"
                  : selectedTab === "hrTab2"
                  ? "translateX(107%)"
                  : selectedTab === "hrTab3"
                  ? "translateX(200%)"
                  : "",
            }}
          ></div>
          )}
        </div>
        <hr id="tab-hr" />
        <div className="tab-features">
        {tab === "tab1" && (
          <section className="tabs-section" id="tab1">
            <picture>
              <img
                src="./src/images/illustration-features-tab-1.svg"
                alt="illustration-images"
              />
            </picture>
            <div className="tab-container">
              <h1>Bookmark in one click</h1>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button className="more-info">More Info</button>
            </div>
          </section>
        )}
        {tab === "tab2" && (
          <section className="tabs-section" id="tab2">
            <picture>
              <img
                src="./src/images/illustration-features-tab-2.svg"
                alt="illustration-images"
              />
            </picture>
            <div className="tab-container">
              <h1>Intelligent Search</h1>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="more-info">More Info</button>
            </div>
          </section>
        )}
        {tab === "tab3" && (
          <section className="tabs-section" id="tab3">
            <picture>
              <img
                src="./src/images/illustration-features-tab-3.svg"
                alt="illustration-images"
              />
            </picture>
            <div className="tab-container">
              <h1>Share your bookmarks</h1>
              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="more-info">More Info</button>
            </div>
          </section>
        )}
        <div className="purple-container2"></div>
        </div>
      </section>

      <section className="features" id="extensions">
        <h1>Download the extension</h1>
        <p className="notes">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <div className="browser-cards">
          <div className="card" id="chrome-card">
            <img src="./src/images/logo-chrome.svg" alt="chrome" />
            <h3 className="add-browser">Add to chrome</h3>
            <p className="version">Minimum version 62</p>
            <button>Add & Install Extension</button>
          </div>

          <div className="card" id="firefox-card">
            <img src="./src/images/logo-firefox.svg" alt="firefox" />
            <h3 className="add-browser">Add to firefox</h3>
            <p className="version">Minimum version 62</p>
            <button>Add & Install Extension</button>
          </div>

          <div className="card" id="opera-card">
            <img src="./src/images/logo-opera.svg" alt="opera" />
            <h3 className="add-browser">Add to opera</h3>
            <p className="version">Minimum version 62</p>
            <button>Add & Install Extension</button>
          </div>
        </div>
      </section>
      <section className="features" id="faq">
        <h1>Frequently Asked Questions</h1>
        <p className="notes">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>

        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="question" onClick={() => selectQuestion(i)}>
                <hr className="accordion-hr" />
                {item.question}
                <span>
                  {selectedQuestion === i ? (
                    <img src="./src/images/icon-arrow.svg" />
                  ) : (
                    <img src="./src/images/icon-arrow.svg" />
                  )}
                </span>
              </div>
              <div
                className={selectedQuestion === i ? "answer show" : "answer"}
              >
                {item.answer}
              </div>
            </div>
          ))}
          <button className="more-info">More Info</button>
        </div>
      </section>
    </>
  );
};

export default Features;
