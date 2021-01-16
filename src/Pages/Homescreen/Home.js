import React, { Component, FunctionComponent } from "react";
import "./style.css";
import Foto from "../../Assets/Images/angga2.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ProgressBar from "react-customizable-progressbar";
// import Particles from "../../Utils/bg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div class="container">
          <h1>Dewangga Aditya</h1>
          <h3>React Native Developer</h3>
          <p>dewanggaa44@gmail.com</p>
          <div class="navbar">
            <div class="port">
              <a
                class="portofolio"
                target="_blank"
                href="https://www.linkedin.com/in/dewangga-aditya"
              >
                LinkedIn
              </a>
              <a
                class="portofolio"
                target="_blank"
                href="https://github.com/dewanggaaw"
              >
                Github
              </a>
            </div>
          </div>
          <div class="summ">
            <img class="profimg" src={Foto} alt="" />
            <div class="textsum">
              <p class="itsme">
                I am very interested in the world of technology and marketing, I
                also have explored the fields of graphic design and photography
                in a self-taught way. As an ambivert and perfectionist person, I
                am able to receive and process information well and always pay
                attention to the little things.
              </p>
            </div>
          </div>
        </div>

        <div class="texbox">
          <div class="personal">
            <h2>Personal Details</h2>
          </div>

          {/* Experiences */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Experiences </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  <h4>Work</h4>
                  <li>
                    Internship at PT. Telkom WITEL Jember
                    <ul>
                      Division: Networking and Information System Operation
                    </ul>
                    <ul>Position: IT Support</ul>
                    <ul>Periode of: November - December 2016</ul>
                  </li>
                  <li>
                    PT. Sayap Mas Utama Jakarta
                    <ul>Division: Information Technology Dept.</ul>
                    <ul>Position: Operational (Technical Support)</ul>
                    <ul>Periode of: July - December 2020</ul>
                  </li>
                  <h4>Organization</h4>
                  <li>
                    Head of Public Relation Division Information System Student
                    Association Period of 2016 - 2017
                  </li>
                  <li>
                    Lecturer Assistant of Computer Network and Operating System
                    Period of 2015-2016
                  </li>
                  <li>
                    Assistant Coordinator of the Faculty of Computer Science
                    Geographic Information System Laboratory Period of 2016-2017
                  </li>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          {/* Achievement */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Achievement </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Registered with the Copyright Registration Letter as the
                  creator of the Laboratory Management System Computer Program
                  with the registration number of 000182865 and application
                  number of EC00202008923
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          {/* Education */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Educations </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <li>Formal</li>
                <ul>
                  2013 - 2020, Undergraduate Program of Computer Science, The
                  Information System Study Program, Universitas Jember with GPA
                  3.35 out of 4.00
                </ul>
                <li>Informal</li>
                <ul>
                  December 2020 - March 2021 Glints Academy React Native Class
                  Intensive Program Batch 10
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div>
            <h>Technical Skills</h>
            <div className="techSkills">
              <div className="eachBar">
                <h4>HTML</h4>
                <ProgressBar
                  radius={100}
                  progress={80}
                  strokeWidth={28}
                  strokeColor="#ffce54"
                  strokeLinecap="butt"
                  trackStrokeWidth={14}
                  trackStrokeLinecap="butt"
                  cut={120}
                  rotate={-210}
                >
                  <div className="indicator">
                    <div>{80}%</div>
                  </div>
                </ProgressBar>
              </div>
              <div className="eachBar">
                <h4>CSS</h4>
                <ProgressBar
                  radius={100}
                  progress={80}
                  strokeWidth={28}
                  strokeColor="#ffce54"
                  strokeLinecap="butt"
                  trackStrokeWidth={14}
                  trackStrokeLinecap="butt"
                  cut={120}
                  rotate={-210}
                >
                  <div className="indicator">
                    <div>{80}%</div>
                  </div>
                </ProgressBar>
              </div>
              <div className="eachBar">
                <h4>PHP</h4>
                <ProgressBar
                  radius={100}
                  progress={60}
                  strokeWidth={28}
                  strokeColor="#ffce54"
                  strokeLinecap="butt"
                  trackStrokeWidth={14}
                  trackStrokeLinecap="butt"
                  cut={120}
                  rotate={-210}
                >
                  <div className="indicator">
                    <div>{70}%</div>
                  </div>
                </ProgressBar>
              </div>
              <div className="eachBar">
                <h4>Javascript</h4>
                <ProgressBar
                  radius={100}
                  progress={60}
                  strokeWidth={28}
                  strokeColor="#ffce54"
                  strokeLinecap="butt"
                  trackStrokeWidth={14}
                  trackStrokeLinecap="butt"
                  cut={120}
                  rotate={-210}
                >
                  <div className="indicator">
                    <div>{60}%</div>
                  </div>
                </ProgressBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
