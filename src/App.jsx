import React from 'react';
import './styles.css';
import RenderCard from './RenderCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from './config';
import { renderComponent } from './Components/render/renderComponent';
import { Route, Routes } from 'react-router-dom';
import DynamicFieldBuilder from 'rolling-fields';
import Hello from './Components/Hello';
import Header from './Components/render/Header';
import ChoiceCard from './Components/render/ChoiceCard';
import CheckBoxCard from './Components/render/CheckBoxCard';
import { useNavigate } from 'react-router-dom';
import InputCard from './Components/render/InputCard';
const staticText = {
  bannerHeader: 'Know what s right for you',
  bannerSubText:
    'Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan',
  bannerImageSrc:
    'https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836',
  src: 'Lenovo',
};

const changeHandler = (name, value) => {
  console.log(name, value, 'function');
};

const fields = [
  { name: 'Lava', type: 'custom', data: staticText },
  // { name: 'Kumar', data: staticText, type: 'radio' },
  // { name: 'Kumar', data: staticText, type: 'checkbox' },
  { name: 'inputCard', type: 'inputcard1' },
  { name: 'inputCard', type: 'inputcard2' },
  { name: 'inputCard', type: 'inputcard3' },
  // { name: 'NR', type: 'input' },
  // { name: 'green field' },
  // { name: 'test' },
  // { name: 'show' },
  { type: 'submit', text: 'Submit!' },
];

const fields2 = [
  { name: 'Lava', type: 'custom', data: staticText },
  // { name: 'Kumar', data: staticText, type: 'radio' },
  { name: 'Kumar', data: staticText, type: 'checkbox' },
  { name: 'NR', type: 'input' },
  { name: 'green field' },
  { name: 'test' },
  { name: 'show' },
  { type: 'submit', text: 'Next submit!' },
];

const printConsole = (e) => {
  // console.log('hello');
  alert('hi');
};
const mappings = {
  custom: ({ name, data }) => (
    <Header
      bannerHeader={data.bannerHeader}
      bannerSubText={data.bannerSubText}
      bannerImageSrc={data.bannerImageSrc}
    />
  ),
  radio: ({ name }) => (
    <ChoiceCard
      // clickHandler={() =>
      //   assessment_type == '30 sec'
      //     ? Set_short_data('category', 'weight-management')
      //     : Set_data('category', 'weight-management')
      // }
      choice="Hair"
      noImage="true"
      // image={weightlossImage}
      text="Weight Management"
      value="weight-management"
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
    <button
      type="submit"
      onClick={() => parent.open('http://localhost:3000/pageTwo')}
    >
      {text}
    </button>
  ),
};

const MyCustomComponent = ({ name }) => (
  <input name={name} className="custom">
    {' '}
    Something cool!{' '}
  </input>
);
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <form>
              <DynamicFieldBuilder
                fields={fields}
                mappings={mappings}
                fieldContext={{ isVisible: true }}
              />
            </form>
          }
        />
        <Route
          path="/pageTwo"
          exact
          element={
            <form>
              <DynamicFieldBuilder
                fields={fields2}
                mappings={mappings}
                fieldContext={{ isVisible: true }}
              />
            </form>
          }
        />
      </Routes>
    </div>
  );
}
