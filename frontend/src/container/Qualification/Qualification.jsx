import React, { useState } from "react";

import { AppWrap, MotionWrap } from '../../wrapper';
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { images } from '../../constants';

import './Qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <h2 className="head-text">MY <span>Qualification</span> </h2>
      <section className="qualification section">
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
              : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <HiOutlineAcademicCap className="qualification__icon" />
              Education
            </div>
            <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
              : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <HiOutlineBriefcase className="qualification__icon" />
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active"
              : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> Bachelor of Technology (B.Tech)</h3>
                  <span className="qualification__subtitle">Vellore Institute of Technology, Bhopal</span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2021-2025(ongoing)
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
                <div>
                  <h3 className="qualification__title"> Higher Secondary Certificate (HSC) </h3>
                  <span className="qualification__subtitle">D.A.V Public School Unit 8 Bhubhaneswar, Odisha</span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2019-2021
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> Secondary School Certificate (SSC)</h3>
                  <span className="qualification__subtitle">D.A.V Public School Unit 8 Bhubhaneswar, Odisha</span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    2008-2021 
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active"
              : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Developer</h3>
                  <span className="qualification__subtitle">
                    <a href="https://www.jindalstainless.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                      Jindal Stainless Limited
                      <img src={images.jsl} alt="Jindal Stainless Logo" className="logo" />
                    </a>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    September 2023 - 9 November 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Data Analyst</h3>
                  <span className="qualification__subtitle">
                    <a href="https://plypicker.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                      PlyPicker
                      <img src={images.ply} alt="PlyPicker Logo" className="logo1" />
                    </a>
                  </span>
                  <div className="qualification__calendar">
                    <HiOutlineCalendar className="qualification__calendar-icon" />
                    8 April 2022 - 8 June 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Qualification, 'app__works'),
  'qualification',
  'app__primarybg',
);
