import React from "react";
import "./styles.css";
import DynamicFieldBuilder from "rolling-fields";
import LandingPage from "./Components/LandingPage";
import CustomRadio from "./Components/CustomRadio";
import CheckBoxCard from "./Components/CheckBoxCard";
import ChoicePage from "./Components/ChoicePage";
import Recommendation from "./Components/Recommendation";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import InputCard from "./Components/InputCard";
import { useEffect, useState } from "react";

export default function App() {
  const { path } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  var fields = [];
  const [builder_fields, Set_builder_fields] = useState([]);
  const [query_params, Set_query_params] = useState({});
  const [path_params, Set_path_params] = useState();
  const [assessment_type, Set_assessment_type] = useState("30 sec");
  const [stateObj, Set_stateObj] = useState(
    JSON.parse(window.localStorage.getItem("stateObj")) || {}
  );

  useEffect(() => {
    Set_query_params(window.location.search);
    window.addEventListener("popstate", function (event) {
      // document.getElementById("generic-back-button").click();
      // event.preventDefault();
    });
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(query_params);
    console.log(queryParams.get("type"), "query params type");
    console.log(queryParams.get("page"), "query params page");
    console.log(queryParams.get("category"), "query params category");
  }, [search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(query_params);
    window.localStorage.setItem("assessment_type", assessment_type);
    window.localStorage.setItem("stateObj", JSON.stringify(stateObj));
    if (queryParams.get("type")) {
      fields = allPages[`${queryParams.get("type")}${queryParams.get("page")}`];
      Set_builder_fields(fields);
    } else if (queryParams.get("category")) {
      fields = allPages.category;
      Set_builder_fields(fields);
    } else if (queryParams.get("userinfo")) {
      fields = allPages.userinfo;
      Set_builder_fields(fields);
    } else if (queryParams.get("appointment")) {
      fields = allPages.appointment;
      Set_builder_fields(fields);
    } else if (queryParams.get("recommendation")) {
      fields = allPages.recommendation;
      Set_builder_fields(fields);
    } else {
      fields = allPages.assessment;
      Set_builder_fields(fields);
    }
  }, [query_params, assessment_type, stateObj, search]);

  const redirect_to_set_query_params = (query) => {
    Set_query_params(window.location.search);
  };

  const clickHandler = (question, value) => {
    if (question == "Age") value = parseInt(value);
    Set_stateObj((prevState) => {
      return { ...prevState, [question]: value };
    });
  };

  const question_clickHandler = (question, value) => {
    Set_stateObj((prevState) => {
      return { ...prevState, [question]: value };
    });
  };

  const clickHandler_clear = (question, value) => {
    Set_stateObj(() => {
      return { [question]: value };
    });
  };

  const checkBoxHandler = (text, value) => {
    if (text == "No such problems") {
      Set_stateObj((prevState) => {
        return {
          ...prevState,
          "Do you have any pre-existing problems?": {
            [text]: value,
          },
        };
      });
    } else {
      Set_stateObj((prevState) => {
        return {
          ...prevState,
          "Do you have any pre-existing problems?": {
            ...prevState["Do you have any pre-existing problems?"],
            [text]: value,
            ["No such problems"]: false,
          },
        };
      });
    }
  };

  const link = `?page=1&type=${stateObj["Select category for consultation"]}`;
  const allPages = {
    assessment: [
      {
        name: "assessment_page",
        type: "assessment",
        data: {
          bannerHeader: `Know what's right for you`,
          bannerSubText:
            "Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan",
          bannerImageSrc:
            "https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836",
        },
      },
    ],
    category: [
      {
        name: "category",
        type: "category",
        question: "Select category for consultation",
        clickHandler: clickHandler_clear,
        inputHandler: clickHandler,
        CustomRadioComponent: { CustomRadio },
        state_Obj: stateObj,
        set_url_function: { redirect_to_set_query_params },
        proceed_link: `?userinfo=yes`,
        back_link: "?assessment=yes",
        heading: "Age",
        required: "*",
        placeholder: "Eg: 24",
        requiredErrorText: "Please enter valid age to proceed",
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "hair",
            displayText: "Hair",
          },
          {
            displayText: "Skin",
            value: "skin",
          },
          {
            value: "weightloss",
            displayText: "Weight Management",
          },
          {
            value: "beard",
            displayText: "Beard",
          },
          {
            value: "performance",
            displayText: "Performance",
          },
        ],
      },
    ],
    userinfo: [
      {
        name: "userinfo",
        type: "category",
        question: "Fill up the details below :",
        clickHandler: clickHandler_clear,
        state_Obj: stateObj,
        set_url_function: { redirect_to_set_query_params },
        proceed_link: `?page=1&type=${stateObj["Select category for consultation"]}`,
        back_link: "?category=yes",
        conditionMet:
          stateObj["Age"] &&
          stateObj["First Name"] &&
          stateObj["Last Name"] &&
          stateObj["Phone Number"] &&
          stateObj["Email"],
        inputOptions: [
          {
            placeholder: "Eg: John",
            requiredErrorText: "Please enter valid first name",
            heading: "First Name",
            clickHandler: clickHandler,
            required: "*",
            value: stateObj["First Name"],
            validity: {},
          },
          {
            placeholder: "Eg: Doe",
            requiredErrorText: "Please enter valid last name",
            heading: "Last Name",
            clickHandler: clickHandler,
            value: stateObj["Last Name"],
          },
          {
            placeholder: "Eg: johndoe@ghc.health",
            requiredErrorText: "Please enter valid first name",
            heading: "Email",
            clickHandler: clickHandler,
            required: "*",
            value: stateObj["Email"],
          },
          {
            placeholder: "Eg: 9876543210",
            requiredErrorText: "Please enter valid phone number",
            heading: "Phone Number",
            clickHandler: clickHandler,
            required: "*",
            value: stateObj["Phone Number"],
            inputMode: "numeric",
          },
          {
            placeholder: "Eg: Age",
            requiredErrorText: "Please enter valid age",
            heading: "Age",
            clickHandler: clickHandler,
            value: stateObj["Age"],
            required: "*",
            inputMode: "numeric",
          },
        ],
      },
    ],
    hair1: [
      {
        name: "hair page 1",
        type: "category",
        question: "What best describes your current hair condition?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=2&type=hair",
        back_link: "?userinfo=yes",
        delay_time: 0,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Receding hairline",
            displayText: "Receding hairline",
          },
          {
            value: "Thinning at the crown",
            displayText: "Thinning at the crown",
          },
          {
            value: "Overall hair loss/thinning",
            displayText: "Overall hair loss/thinning",
          },
          {
            value: "Receding + Overall thinning",
            displayText: "Receding + Overall thinning",
          },
        ],
      },
    ],
    hair2: [
      {
        name: "hair page 2",
        type: "category",
        question: "What results are you looking for?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=3&type=hair",
        back_link: "?page=1&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` Hair loss affects 60.5 % of the total Men population in India`,
        conditionMet: true,
        options: [
          {
            value: "Regrowing your hair",
            displayText: "Regrowing your hair",
          },
          {
            value: "Preventing future hair loss",
            displayText: "Preventing future hair loss",
          },
          {
            value: "Both regrowth & loss prevention",
            displayText: "Both regrowth & loss prevention",
          },
        ],
      },
    ],
    hair3: [
      {
        name: "hair page 3",
        type: "category",
        question: "Does anyone in your family have hair loss?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=4&type=hair",
        back_link: "?page=2&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` 50% of the male pattern baldness can be attributed due to  hereditary roots.
        However, hereditary male pattern baldness is treatable by taking early 
        preventive actions`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    hair4: [
      {
        name: "hair page 4",
        type: "category",
        question: "Do you have any past allergy reactions to medicines?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=5&type=hair",
        back_link: "?page=3&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` Knowing your medical allergies helps us to suggest the best treatment 
        plan for you`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    hair5: [
      {
        name: "hair page 5",
        type: "category",
        question:
          "Do you have any upcoming functions in the family in the next 120 days?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=4&type=hair",
        delay_time: 3000,
        overlay_screen_text: ` FACT: Every time we try a new medication it takes time for our body to 
        react. Similarly, we can observe minimal hair loss when we start to use
        minoxidil for a few days`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Yes",
            displayText: "Yes",
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    skin1: [
      {
        name: "skin page 1",
        type: "category",
        question: "What are you concerned about?",
        clickHandler: clickHandler,
        category_key: "category",
        state_Obj: stateObj,
        proceed_link: "?page=2&type=skin",
        back_link: "?userinfo=yes",
        delay_time: 3000,
        overlay_screen_text: `Skin concerns are unique to each individual and one needs the right care
        to keep up with good skin health`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Open pores",
            displayText: "Open pores",
          },
          {
            value: "Pigmentation",
            displayText: "Pigmentation",
          },
          {
            value: "Acne",
            displayText: "Acne",
          },
          {
            value: "Aging",
            displayText: "Aging",
          },
          {
            value: "Dark circles",
            displayText: "Dark circles",
          },
          {
            value: "Spots & Marks",
            displayText: "Spots & Marks",
          },
          {
            value: "Dull skin (general skincare)",
            displayText: "Dull skin (general skincare)",
          },
        ],

        // name: "skin page 1",
        // type: "category",
        // question: "Select category for consultation",
        // clickHandler: clickHandler,
        // stateObj: assessment_type == "30 sec" ? mars_short : mars_long,
        // category_key: "category",
        // proceed_link: "?page=2&type=skin",
        // back_link: "?assessment=yes",
        // options: [
        //   {
        //     value: "Hair",
        //     displayText: "Hair",
        //   },
        //   {
        //     value: "Skin",
        //     displayText: "Skin",
        //   },
        //   {
        //     value: "weight-management",
        //     displayText: "Weight Loss",
        //   },
        //   {
        //     value: "Beard",
        //     displayText: "Beard",
        //   },
        //   {
        //     value: "Performance",
        //     displayText: "Performance",
        //   },
        // ],
      },
    ],
    skin2: [
      {
        name: "skin page 2",
        type: "category",
        clickHandler: clickHandler,
        question: "Describe your skin type",
        state_Obj: stateObj,
        proceed_link: "?page=3&type=skin",
        back_link: "?page=1&type=skin",
        delay_time: 3000,
        overlay_screen_text: `It's important to listen to our bodies and understand allergies before beginning any treatment.`,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Oily",
            displayText: "Oily",
          },
          {
            value: "Dry",
            displayText: "Dry",
          },
          {
            value: "Normal ",
            displayText: "Normal ",
          },
        ],
      },
    ],
    skin3: [
      {
        name: "skin page 3",
        type: "category",
        clickHandler: clickHandler,
        question: "Are you allergic to any of the ingredients below?",
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=2&type=skin",
        delay_time: 0,
        input_none: true,
        conditionMet: true,
        conditionMet: true,
        options: [
          {
            value: "Vitamin C ",
            displayText: "Vitamin C ",
          },
          {
            value: "Salicylic Acid",
            displayText: "Salicylic Acid",
          },
          {
            value: "Retinol",
            displayText: "Retinol",
          },
          {
            value: "Aging",
            displayText: "Aging",
          },
          {
            value: "Niacinamide",
            displayText: "Niacinamide",
          },
          {
            value: "Kojic Acid",
            displayText: "Kojic Acid",
          },
          {
            value: "None",
            displayText: "None",
          },
        ],
      },
    ],
    performance1: [
      {
        name: "performance page 2",
        type: "category",
        question: "How is your sexual drive over the last year?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=2&type=performance",
        back_link: "?userinfo=yes",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Low (Don’t feel like doing it)`,
            displayText: `Low (Don’t feel like doing it)`,
          },
          {
            value: "Medium (sometimes feel like doing it)",
            displayText: "Medium (sometimes feel like doing it)",
          },
          {
            value: "High (Regularly feel like doing it)",
            displayText: "High (Regularly feel like doing it)",
          },
        ],
      },
    ],
    performance2: [
      {
        name: "performance page 2",
        type: "category",
        question:
          "How often do you have trouble getting or keeping an erection during sex?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=3&type=performance",
        back_link: "?page=1&type=performance",
        delay_time: 3000,
        overlay_screen_text: ` FACT: Every time we try a new medication it takes time for our body to 
        react. Similarly, we can observe minimal hair loss when we start to use
        minoxidil for a few days`,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Every time`,
            displayText: `Every time`,
          },
          {
            value: "Half of the time",
            displayText: "Half of the time",
          },
          {
            value: "Occasionally",
            displayText: "Occasionally",
          },
          {
            value: "Rarely",
            displayText: "Rarely",
          },
        ],
      },
    ],
    performance3: [
      {
        name: "performance page 3",
        type: "category",
        question:
          "How often are you climaxing sooner than you would like during sex? ",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=4&type=performance",
        back_link: "?page=2&type=performance",
        delay_time: 3000,
        overlay_screen_text: ` FACT: Every time we try a new medication it takes time for our body to 
        react. Similarly, we can observe minimal hair loss when we start to use
        minoxidil for a few days`,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Every time`,
            displayText: `Every time`,
          },
          {
            value: "Half of the time",
            displayText: "Half of the time",
          },
          {
            value: "Occasionally",
            displayText: "Occasionally",
          },
          {
            value: "Rarely",
            displayText: "Rarely",
          },
        ],
      },
    ],
    performance4: [
      {
        name: "performance page 4",
        type: "category",
        question: "Do you have any existing or any history of Heart issues?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=5&type=performance",
        back_link: "?page=3&type=performance",
        delay_time: 3000,
        overlay_screen_text: ` FACT: Every time we try a new medication it takes time for our body to 
        react. Similarly, we can observe minimal hair loss when we start to use
        minoxidil for a few days`,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Yes`,
            displayText: `Yes`,
          },
          {
            value: "No",
            displayText: "No",
          },
          {
            value: "Have high blood pressure, but don’t have any heart issues",
            displayText:
              "Have high blood pressure, but don’t have any heart issues",
          },
        ],
      },
    ],
    performance5: [
      {
        name: "performance page 5",
        type: "category",
        question:
          "Do you experience cramps or tiredness while performing sex? ",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=4&type=performance",
        delay_time: 3000,
        overlay_screen_text: ` FACT: Every time we try a new medication it takes time for our body to 
        react. Similarly, we can observe minimal hair loss when we start to use
        minoxidil for a few days`,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Yes`,
            displayText: `Yes`,
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    beard1: [
      {
        name: "Beard page 1",
        type: "category",
        question: "How is your beard condition currently?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=2&type=beard",
        back_link: "?userinfo=yes",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Patchy beard`,
            displayText: `Patchy beard`,
          },
          {
            value: "No Beard",
            displayText: "No Beard",
          },
          {
            value: "Very less (Only mustaches and chin hair)",
            displayText: "Very less (Only mustaches and chin hair)",
          },
          {
            value: "Excellent beard, just need something for beard care",
            displayText: "Excellent beard, just need something for beard care",
          },
        ],
      },
    ],
    beard2: [
      {
        name: "Beard page 2",
        type: "category",
        question: "Does anyone in your family have beard growth issues?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=3&type=beard",
        back_link: "?page=1&type=beard",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Yes`,
            displayText: `Yes`,
          },
          {
            value: "No",
            displayText: "No",
          },
        ],
      },
    ],
    beard3: [
      {
        name: "Beard page 5",
        type: "category",
        question: "How do you trim your beard?",
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=2&type=beard",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `I generally shave my beard`,
            displayText: `I generally shave my beard`,
          },
          {
            value: "I use a trimmer to shape it up",
            displayText: "I use a trimmer to shape it up",
          },
        ],
      },
    ],
    weightloss1: [
      {
        name: "Weight loss page 1",
        type: "category",
        question: `Please enter your height and weight below`,
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=2&type=weightloss",
        back_link: "?userinfo=yes",
        input_none: true,
        conditionMet: true,
        inputOptions: [
          {
            heading: "Height",
            placeholder: "Height(in cms)",
            requiredErrorText: "Please enter valid height to proceed",
            value: stateObj["Height"],
            inputMode: "numeric",
            clickHandler: clickHandler,
            required: "*",
          },
          {
            heading: "Weight",
            placeholder: "Weight(in Kgs)",
            requiredErrorText: "Please enter valid weight to proceed",
            value: stateObj["Weight"],
            inputMode: "numeric",
            clickHandler: clickHandler,
            required: "*",
          },
        ],
      },
    ],
    weightloss2: [
      {
        name: "Weight loss page 2",
        type: "category",
        question: `How often do you eat meals in a day (including tea, coffee, fruits, salads, 
          and snacks)`,
        clickHandler: clickHandler,
        state_Obj: stateObj,
        proceed_link: "?page=3&type=weightloss",
        back_link: "?page=1&type=weightloss",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Greater than 6 times`,
            displayText: `Greater than 6 times`,
          },
          {
            value: "4-6 times",
            displayText: "4-6 times",
          },
          {
            value: "3 times",
            displayText: "3 times",
          },
          {
            value: "Less than 3 times",
            displayText: "Less than 3 times",
          },
        ],
      },
    ],
    weightloss3: [
      {
        name: "Weight loss page 2",
        type: "category",
        question: `How many days do you exercise in a week?`,
        clickHandler: clickHandler,
        CustomComponent: { CustomRadio },
        state_Obj: stateObj,
        proceed_link: "?page=4&type=weightloss",
        back_link: "?page=2&type=weightloss",
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: `Don't work out at all`,
            displayText: `Don't work out at all`,
          },
          {
            value: "Daily",
            displayText: "Daily",
          },
          {
            value: "5-6 times a week",
            displayText: "5-6 times a week",
          },
          {
            value: "1-2 times a week",
            displayText: "1-2 times a week",
          },
        ],
      },
    ],
    weightloss4: [
      {
        name: "Weight loss page 2",
        type: "category",
        question: `Do you have any pre-existing problems?`,
        clickHandler: clickHandler,
        CustomComponent: { CustomRadio },
        state_Obj: stateObj,
        proceed_link: "?appointment=yes",
        back_link: "?page=3&type=weightloss",
        input_none: true,
        conditionMet: true,
        checkboxOptions: [
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.[
                "Cholestrol"
              ],
            displayText: "Cholestrol",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Thyroid"],
            displayText: "Thyroid",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Heart"],
            displayText: "Heart",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Diabetes"],
            displayText: "Diabetes",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.["Kidney"],
            displayText: "Kidney",
            onChange: checkBoxHandler,
          },
          {
            value:
              stateObj[`Do you have any pre-existing problems?`]?.[
                "No such problems"
              ],
            displayText: "No such problems",
            onChange: checkBoxHandler,
          },
        ],
      },
    ],
    appointment: [
      {
        name: "Appointment page",
        type: "category",
        clickHandler: clickHandler,
        question: "Wasn’t that easy? Would you like a free consultation?",
        state_Obj: stateObj,
        proceed_link: "?recommendation=yes",
        navigateTo: "-1",
        directNavigate: true,
        delay_time: 0,
        input_none: true,
        conditionMet: true,
        options: [
          {
            value: "Yes, please ",
            displayText: "Yes, please ",
          },
          {
            value: "No, just tell me what to use",
            displayText: "No, just tell me what to use",
          },
        ],
      },
    ],
    recommendation: [
      {
        name: "Appointment page",
        type: "recommendation",
        clickHandler: clickHandler,
        stateObj: stateObj,
        conditionMet: true,
        assessment_type: assessment_type,
        data: {
          bannerHeader: `Know what's right for you`,
          bannerSubText:
            "Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan",
          bannerImageSrc:
            "https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836",
        },
        options: [
          {
            value: "Yes, please ",
            displayText: "Yes, please ",
          },
          {
            value: "No, just tell me what to use",
            displayText: "No, just tell me what to use",
          },
        ],
      },
    ],
  };

  const mappings = {
    assessment: ({ data }) => (
      <LandingPage
        bannerHeader={data.bannerHeader}
        bannerSubText={data.bannerSubText}
        bannerImageSrc={data.bannerImageSrc}
        set_url_function={redirect_to_set_query_params}
      />
    ),
    category: ({
      name,
      options,
      question,
      state_Obj,
      clickHandler,
      inputHandler,
      back_link,
      proceed_link,
      delay_time,
      overlay_screen_text,
      directNavigate,
      navigateTo,
      inputOptions,
      checkboxOptions,
      conditionMet,
    }) => (
      <ChoicePage
        question={question}
        clickHandler={clickHandler}
        state_Obj={state_Obj}
        CustomComponent={CustomRadio}
        CustomInputComponent={InputCard}
        // {() => <CustomRadioComponent/>}
        back_link={back_link}
        proceed_link={proceed_link}
        set_url_function={redirect_to_set_query_params}
        delay_time={delay_time}
        overlay_screen_text={overlay_screen_text}
        directNavigate={directNavigate}
        navigateTo={navigateTo}
        inputHandler={inputHandler}
        options={options}
        inputOptions={inputOptions}
        checkboxOptions={checkboxOptions}
        conditionMet={conditionMet}
      />
    ),
    recommendation: ({ stateObj, assessment_type, data }) => (
      <Recommendation
        stateObj={stateObj}
        assessment_type={assessment_type}
        bannerHeader={data.bannerHeader}
        bannerSubText={data.bannerSubText}
        bannerImageSrc={data.bannerImageSrc}
      />
    ),
  };

  return (
    <div className="main-container">
      <form>
        <DynamicFieldBuilder
          fields={builder_fields}
          mappings={mappings}
          fieldContext={{ isVisible: true }}
        />
      </form>
    </div>
  );
}
