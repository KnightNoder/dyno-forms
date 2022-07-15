// import React from 'react';
// import { createElement } from 'react';
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
// } from 'reactstrap';

// import { div } from './Components/render/div';

// const KeysToComponentMap = {
//   card: Card,
//   img: CardImg,
//   text: CardText,
//   body: CardBody,
//   title: CardTitle,
//   subtitle: CardSubtitle,
//   button: Button,
//   div: div,
// };

// function renderer(config) {
//   if (typeof KeysToComponentMap[config.component] !== 'undefined') {
//     console.log(typeof KeysToComponentMap[config.component], 'type of');
//     return React.createElement(
//       KeysToComponentMap[config.component],
//       {
//         src: config.src,
//       },
//       config.children &&
//         (typeof config.children === 'string'
//           ? config.children
//           : config.children.map((child) => renderer(child)))
//     );
//   }
// }

// export default renderer;
