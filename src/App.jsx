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
import { useNavigate } from 'react-router-dom';
const staticText = {
  bannerHeader: 'Know what s right for you',
  bannerSubText:
    'Get your self assessment done, Book an appointment with our expert, get a personalized treatment plan',
  bannerImageSrc:
    'https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836',
  src: 'Lenovo',
};

const fields = [
  { name: 'Lava', type: 'custom', data: staticText },
  { name: 'Kumar', data: staticText, type: 'radio' },
  { name: 'Kumar', data: staticText, type: 'checkbox' },
  { name: 'NR', type: 'input' },
  { name: 'green field' },
  { name: 'test' },
  { name: 'show' },
  { type: 'submit', text: 'Submit!' },
];

const fields2 = [
  { name: 'Lava', type: 'custom', data: staticText },
  { name: 'Kumar', data: staticText, type: 'radio' },
  { name: 'Kumar', data: staticText, type: 'checkbox' },
  { name: 'NR', type: 'input' },
  { name: 'green field' },
  { name: 'test' },
  { name: 'show' },
  { type: 'submit', text: 'Next submit!' },
];

const mappings = {
  custom: ({ name, data }) => (
    <Header
      bannerHeader={data.bannerHeader}
      bannerSubText={data.bannerSubText}
      bannerImageSrc={data.bannerImageSrc}
    />
  ),
  radio: ({ name }) => (
    <input type="radio" id="html" name="fav_language" value="HTML" />
  ),
  checkbox: () => (
    <>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label for="vehicle1"> I have a bike</label>
    </>
  ),
  visible: ({ name }, fieldContext) =>
    fieldContext.isVisible && <input name={name} />,
  string: ({ name }) => <input name={name} className="string-field" />,
  submit: ({ name, text }) => (
    <button
      type="submit"
      onClick={() => {
        "location.href = 'www.google.com';";
        alert('hi');
      }}
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
          path="/test"
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
