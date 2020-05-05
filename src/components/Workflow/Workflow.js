import React, { Component } from 'react';
import './Workflow.css';
import arrowright from '../../svgs/arrow-right.svg';
import arrowleft from '../../svgs/arrow-left.svg';
import arrowleftsmall from '../../svgs/arrow-left-small.svg';
import arrowrightsmall from '../../svgs/arrow-right-small.svg';
import arrowup from '../../svgs/arrow-up.svg';
import arrowdown from '../../svgs/arrow-down.svg';
import repeat from '../../svgs/repeat.svg';
import Button from '../Button/Button';

class Workflow extends Component {

  render() {

    return (
      <div id="workflow">
        <div id="workflow-anchor"/>
        <div className="workflow-separator">
          <div className="workflow-gradient"/>
        </div>
        <div className="section-detail-left"/>
        <div className="visual-page-green-container">
          <div className="section-ribbon">
            <h1>Workflow</h1>
          </div>
          <div className="workflow-container">
            <div className="title-container">
              <h1 className="title-text">Small sprints, big results</h1>
            </div>
            <div className="subheading-container">
              <h2 className="subheading-text">When I work on a project I like the <span className="spanmainbackground">lean</span> methodology using <span className="spanmainbackground">sprints</span>.</h2>
            </div>
            <div className="workflow-graph-container">
              <div className="picture-container">
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Define</h2>
                  </div>
                  <div className="step-circle">
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-right">
                    <img src={arrowright} height="10" width="154" alt='icon' />
                  </div>
                  <div className="arrow-right-smallest">
                    <img src={arrowrightsmall} height="10" width="117" alt='icon' />
                  </div>
                  <div className="arrow-right-smallest-2">
                    <img src={arrowrightsmall} height="10" width="77" alt='icon' />
                  </div>
                </div>
                <div className="step">
                  <div className="step-title">
                    <h2 className="title-text">Build</h2>
                  </div>
                  <div className="step-circle">
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="arrowright-bigscreen">
                  <div className="arrow-right-bigscreen">
                    <img src={arrowright} height="10" width="154" alt='icon' />
                  </div>
                </div>
                <div className="arrowup-smallscreen">
                  <div className="arrow-up">
                    <img src={arrowup} height="87" width="10" alt='icon' />
                  </div>
                </div>
                <div className="arrowup-smallscreen-2">
                  <div className="arrow-up">
                    <img src={arrowup} height="60" width="10" alt='icon' />
                  </div>
                </div>
                <div className="filling-div">

                </div>
                <div className="arrowdown-smallscreen">
                  <div className="arrow-down">
                    <img src={arrowdown} height="154" width="10" alt='icon' />
                  </div>
                </div>
                <div className="arrowdown-smallscreen-2">
                  <div className="arrow-down">
                    <img src={arrowdown} height="107" width="10" alt='icon' />
                  </div>
                </div>
                <div className="step-bigscreen">
                  <div className="step-title">
                    <h2 className="title-text">Launch</h2>
                  </div>
                  <div className="step-circle">
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="step-smallscreen">
                  <div className="step-title">
                    <h2 className="title-text">Analyze</h2>
                  </div>
                  <div className="step-circle">
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-right-bigscreen">
                    <img src={arrowright} height="10" width="154" alt='icon' />
                  </div>
                  <div className="arrow-left">
                    <img src={arrowleft} height="10" width="154" alt='icon' />
                  </div>
                  <div className="arrow-left-smallest">
                    <img src={arrowleftsmall} height="10" width="117" alt='icon' />
                  </div>
                  <div className="arrow-left-smallest-2">
                    <img src={arrowleftsmall} height="10" width="77" alt='icon' />
                  </div>
                </div>
                <div className="step-bigscreen">
                  <div className="step-title">
                    <h2 className="title-text">Analyze</h2>
                  </div>
                  <div className="step-circle">
                    <div className="middle-circle"></div>
                  </div>
                </div>
                <div className="step-smallscreen">
                  <div className="step-title">
                    <h2 className="title-text">Launch</h2>
                  </div>
                  <div className="step-circle">
                    <div className="middle-circle"></div>
                  </div>
                </div>
              </div>
              <div className="repeat-container">
                <div className="repeat-picture">
                  <img src={repeat} alt='icon' />
                </div>
              </div>
              <div className="graphText-container">
                <h2 className="graph-text">2 weeks sprint</h2>
                <h2 className="graph-text">Repeat</h2>
              </div>

            </div>
            <div className="secondGraphText-container">
                <h2 className="graph-second-text">Everyday i want to learn something new that i can add to my knowledge, So that I can strive for perfection. I do this by mixing <span className="spanmainbackground">different methodologies</span>. The method for a project is just the <span className="spanmainbackground">starting point</span>.</h2>
                <Button 
                  color="red"
                  buttonText="Let's work together"
                  buttonHref="mailto:emil@emilottosson.com"
                />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Workflow;
