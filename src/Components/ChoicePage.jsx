import ChoiceCard from "./ChoiceCard";
import ProceedTemplate from "./ProceedTemplate";
import "../css/ChoicePage.css";
import "../css/ChoiceCard.css";
import ImageCard from "./ImageCard";
import { useState, useEffect } from "react";
import CheckBoxCard from "./CheckBoxCard";

const ChoicePage = ({
  CustomComponent,
  question,
  options,
  clickHandler,
  state_Obj,
  proceed_link,
  back_link,
  set_url_function,
  overlay_screen_text,
  delay_time,
  CustomInputComponent,
  input_none,
  directNavigate,
  navigateTo,
  conditionMet,
  // inputHandler,
  inputOptions,
  checkboxOptions,
}) => {
  const [display_overlay_text, Set_display_overlay_text] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      Set_display_overlay_text(false);
    }, delay_time);
  }, []);
  return (
    <>
      <div
        className={`${
          display_overlay_text ? "show-overlay-screen" : "hide-overlay-screen"
        }`}
      >
        {overlay_screen_text}
      </div>
      <div className="choice-container">
        {/* <div className="assessment-image"> 
          <ImageCard />
        </div> */}
        <div className="assessment">
          <h5>{question} </h5>
          {options
            ? options.map((option) => {
                return (
                  <>
                    <CustomComponent
                      option={option}
                      clickHandler={(question, value) =>
                        clickHandler(question, value)
                      }
                      key={option.value}
                      state_Obj={state_Obj}
                      question={question}
                    />
                  </>
                );
              })
            : null}

          {inputOptions
            ? inputOptions.map((option) => {
                return (
                  <>
                    <CustomInputComponent
                      placeholder={option.placeholder}
                      requiredErrorText={option.requiredErrorText}
                      value={option.value}
                      heading={option.heading}
                      onchange={(heading, value) =>
                        option.clickHandler(heading, value)
                      }
                      key={option.value}
                      required={option.required}
                      inputMode={option.inputMode}
                    />
                  </>
                );
              })
            : null}

          {checkboxOptions
            ? checkboxOptions.map((option) => {
                return (
                  <>
                    <CheckBoxCard
                      value={option.value}
                      text={option.displayText}
                      state_Obj={state_Obj}
                      key={option.value}
                      // clickHandler={option.clickHandler}
                      onchange={(text, value) => option.onChange(text, value)}
                    />
                  </>
                );
              })
            : null}

          {/* <div className="input-age">
            <h5 style={{ display: "inline-block" }}>Age</h5>
          </div>
          <input
            className="input"
            onChange={(e) => SetAge(e.target.value)}
            type="text"
            placeholder="Eg.24"
          />
          <div className={`error-text `} id="top">
            Please provide your age to proceed
          </div> */}
          {/* <div
            className={`${input_none ? "hide-overlay-screen" : "show-input"}`}
          >
            <CustomInputComponent
              heading={heading}
              required={required}
              placeholder={placeholder}
              requiredErrorText={requiredErrorText}
              clickHandler={clickHandler}
              onchange={(question, value) => inputHandler(question, value)}
            />
          </div> */}
          <div className="proceed-template">
            <ProceedTemplate
              proceed_text="Proceed"
              back_text="Back"
              conditionMet="true"
              choice={proceed_link}
              navigateTo={navigateTo}
              backLink={back_link}
              set_url_function={set_url_function}
              directNavigate={directNavigate}
            />
          </div>
        </div>
      </div>
      <div className="proceed-template-mobile">
        <ProceedTemplate
          proceed_text="Proceed"
          back_text="Back"
          conditionMet={conditionMet}
          choice={proceed_link}
          navigateTo={navigateTo}
          backLink={back_link}
          set_url_function={set_url_function}
          directNavigate={directNavigate}
        />
      </div>
    </>
  );
};

export default ChoicePage;
