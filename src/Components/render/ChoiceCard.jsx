// import '../../css/ChoiceCard.css';
// import Radio from '@mui/material/Radio';
// // import Radio from '@material-ui/core/Radio';

// const ChoiceCard = ({
//   choice,
//   image,
//   text,
//   subtext,
//   clickHandler,
//   noImage,
//   value,
//   show,
// }) => {
//   const ImageStyle = {
//     display: 'block',
//   };

//   const NoImageStyle = {
//     display: 'none',
//   };

//   return (
//     <>
//       <div
//         className={`choice-card ${
//           value == choice ? 'selectStyle' : 'deselectStyle'
//         }`}
//         onClick={() => clickHandler()}
//         name={text}
//       >
//         <div className={`one ${show ? 'dont-show-radio' : 'show-radio'}`}>
//           <Radio
//             sx={{
//               color: '#CACACA',
//               '&.Mui-checked': {
//                 color: '#975169',
//               },
//               '& .MuiSvgIcon-root': {
//                 fontSize: 15,
//               },
//               name: { text },
//             }}
//             checked={value == choice}
//           />
//         </div>
//         <div className="two" style={noImage ? NoImageStyle : ImageStyle}>
//           <img src={image} className="image-section" alt="" />
//         </div>
//         <div
//           className={`three ${
//             value == choice ? 'selectTextStyle' : 'deselectTextStyle'
//           }`}
//         >
//           <div className="text">{text}</div>
//           <div className="subText">{subtext}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChoiceCard;
