import React from "react";
import "./styles.css";
import RenderCard from "./RenderCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "./config";
import { Route, Routes } from "react-router-dom";
import DynamicFieldBuilder from "rolling-fields";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import ChoiceCard from "./Components/ChoiceCard";
import CustomRadio from "./Components/Radio";
import CheckBoxCard from "./Components/CheckBoxCard";
import ChoicePage from "./Components/ChoicePage";
import { useNavigate } from "react-router-dom";
import InputCard from "./Components/InputCard";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [builder_fields, Set_builder_fields] = useState([]);
  const [query_params, Set_query_params] = useState({});
  const [form_data, set_form_data] = useState({});
  var fields = [];

  useEffect(() => {
    Set_query_params(window.location.search);
    const queryParams = new URLSearchParams(query_params);
    console.log(window.location.search, queryParams, "query params");
    if (queryParams.get("page") && queryParams.get("type")) {
      fields = allPages[`${queryParams.get("type")}${queryParams.get("page")}`];
      Set_builder_fields(fields);
      set_form_data();
    } else {
      fields = allPages.choice;
      Set_builder_fields(fields);
    }
  }, [query_params]);

  const redirect_to_set_query_params = (params) => {
    Set_query_params(params);
  };

  const navigate = useNavigate();

  const changeHandler = (name, value) => {
    console.log(name, value, "function");
  };

  const setFormValue = (key, value) => {
    console.log(value);
    set_form_data((previousState) => {
      let tempObj = previousState;
      tempObj[key] = value;
      return tempObj;
    });
    console.log(form_data);
  };

  const staticText = [];
  const allPages = {
    choice: [
      {
        name: "Lava",
        type: "choicePage",
        data: {
          bannerHeader: `Know what's right for you`,
          bannerSubText:
            "Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan",
          bannerImageSrc:
            "https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836",
        },
      },
      {
        name: "category",
        type: "radio",
        setFormValue: setFormValue,
        options: [
          {
            value: "hair",
            displayText: "Hair",
            selected: false,
          },
          {
            value: "skin",
            displayText: "Skin",
            selected: false,
          },
          {
            value: "weight",
            displayText: "Weight Management",
            selected: false,
          },
        ],
      },
    ],
    hair1: [
      { name: "Lava", type: "custom", data: staticText },
      // { name: "inputCard1", type: "inputcard1" },
      // { name: "inputCard2", type: "inputcard2" },
      // { name: "inputCard3", type: "inputcard3" },
      // { type: "submit", text: "Submit!" },
    ],
    hair2: [
      { name: "Lava", type: "custom", data: staticText },
      { name: "inputCard2", type: "inputcard2" },
      { name: "inputCard3", type: "inputcard3" },
      { type: "submit", text: "Submit!" },
    ],
  };

  const mappings = {
    custom: ({ name, data }) => (
      <LandingPage
        bannerHeader={data.bannerHeader}
        bannerSubText={data.bannerSubText}
        bannerImageSrc={data.bannerImageSrc}
        set_url_function={redirect_to_set_query_params}
      />
    ),
    choicePage: ({}) => {
      <ChoicePage />;
    },
    radio: ({ name, options, setFormValue }) => (
      <CustomRadio
        // clickHandler={() =>
        //   assessment_type == '30 sec'
        //     ? Set_short_data('category', 'weight-management')
        //     : Set_data('category', 'weight-management')
        // }
        name={name}
        options={options}
        setFormValue={setFormValue}
      />
    ),
    checkbox: () => (
      <>
        <CheckBoxCard
          name="Hypertension"
          value={true}
          onChange={(name, value) => changeHandler(name, value)}
          text="Hypertension"
        />
      </>
    ),
    inputcard1: ({ name, firstName }) => (
      <InputCard
        heading="First Name"
        placeholder="Eg. John"
        value=""
        inputMode="numeric"
        required="*"
      />
    ),
    // visible: ({ name }, fieldContext) =>
    //   fieldContext.isVisible && <input name={name} />,
    // string: ({ name }) => <input name={name} className="string-field" />,
    inputcard2: () => (
      <InputCard
        heading="Last Name"
        placeholder="Eg. Doe"
        value=""
        inputMode="numeric"
        required="*"
      />
    ),
    inputcard3: () => (
      <InputCard
        heading="Age"
        placeholder="Eg. 24"
        value=""
        inputMode="numeric"
        required="*"
      />
    ),
    submit: ({ name, text }) => (
      <button type="submit" onClick={() => navigate("/consultation/2")}>
        {text}
      </button>
    ),
  };
  return (
    <div className="App">
      <form style={{ padding: "25px" }}>
        <DynamicFieldBuilder
          fields={builder_fields}
          mappings={mappings}
          fieldContext={{ isVisible: true }}
        />
      </form>
    </div>
  );
}
