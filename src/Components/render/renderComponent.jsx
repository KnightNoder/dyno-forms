import { createElement } from 'react';
import { div } from './div';
import { p } from './p';
import { button } from './button';
import { img } from './img';

const keysToComponentMap = {
  div: div,
  p: p,
  button: button,
  img: img,
};

const stylesMap = (styles) => {
  let mappedStyles = {};
  styles.forEach((style) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const renderComponent = (config) => {
  if (typeof keysToComponentMap[config.component] !== 'undefined') {
    return createElement(
      keysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null,
        style: config.styles ? stylesMap(config.styles) : null,
        src: config.src,
      },
      config.children &&
        (typeof config.children === 'string'
          ? config.children
          : config.children.map((c) => renderComponent(c)))
    );
  }
};
