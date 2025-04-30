import images from "../src/images/cod.png";
import { Dataset } from "../js_file/dataset";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";


export const Home = () => {
  const [questionone, setQuestionone] = useState(true);
  const [questiontwo, setQuestiontwo] = useState(true);
  const [questionthree, setQuestionthree] = useState(true);
  const [questionfour, setQuestionfour] = useState(true);

  const menubutton = () => {
    setQuestionone(!questionone);
  };
  const questionTwo = () => {
    setQuestiontwo(!questiontwo);
  };
  const questionThree = () => {
    setQuestionthree(!questionthree);
  };
  const questionFour = () => {
    setQuestionfour(!questionfour);
  };

  return (
    <>
      <div>
        <div className="home-container">
          <div className="img">
            <img src={images} alt="" />
          </div>
          <div className="home-title">
            <div className="home-sub-title">
              <h2>Latest trending, Tv shows and many more</h2>
              <div className="started">
                <div>
                  <Link to="/movies" className="link">
                  <p>Get Started</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-home-section">
          <h2>Most Watched</h2>
          <div className="grid-home-section">
            {Dataset.map((item) => (
              <div className="grid-home-sub" key={item.id}>
                <div>
                  <img className="home-image" src={item.img} alt="" />
                </div>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Third section */}
        <div>
          <div className="third-container">
          <div className="third-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <div className="faq-item">
              <div className="questionone">
              <h3 className="faq-question">
                Can you watch on multiple devices?
              </h3>
              <div className="icon">
              <div onClick={menubutton} >
                  {questionone ? <i  className="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                </div>
              </div>
              </div>              
              {!questionone && (
                <p className="faq-answer">
                  Yes, you can watch on multiple devices simultaneously.
                </p>
              )}
            </div>
            <div className="faq-item">

            <div className="questionone">
              <h3 className="faq-answer">
              How do I reset my password?
              </h3>
              <div className="icon">
              <div onClick={questionTwo} >
                  {questiontwo ? <i  className="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                </div>
              </div>
              </div>
              {!questiontwo && (
                <p className="faq-answer">
                  You can reset your password by clicking on 'Forgot Password' on the login page.
                </p>
              )}
            </div>


            <div className="faq-item">
            <div className="questionthree">
              <h3 className="faq-question">
              What is the subscription cost?
              </h3>
              <div className="icon">
                <div onClick={questionThree} >
                  {questionthree ? <i  className="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                </div>
              </div>
              </div>
              {!questionthree && (
                <p className="faq-answer">
                  The subscription cost varies based on the plan you choose. Please check our pricing page for details.
                </p>
              )}
            </div>
            <div className="faq-item">
            <div className="questionfour">
              <h3 className="faq-question">
              Can I cancel my subscription anytime?
              </h3>
              <div className="icon">
              <div onClick={questionFour} >
                  {questionfour ? <i  className="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                </div>
              </div>
              </div>
              {!questionfour && (
                <p className="faq-answer">
                  Yes, you can cancel your subscription at any time without any penalties.
                </p>
              )}
            </div>
          </div>
        </div>
          </div>
        </div>
       
        {/* third section ends here */}
      </div>
    </>
  );
};