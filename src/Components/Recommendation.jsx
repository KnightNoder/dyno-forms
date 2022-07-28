import Header from "./Header";
import logo from "../images/mars-logo.png";
import doctor from "../images/doctor-small.png";
import phone from "../images/call.png";
import GenericButton from "./GenericButton";
import "../css/Recommendation.css";
import { useEffect, useState } from "react";
import "../css/ProceedTemplate.css";
const { getProductId, getSendMailData } = require("../common/utils");
const axios = require("axios");

const Callback = ({
  stateObj,
  assessment_type,
  bannerHeader,
  bannerSubText,
  bannerImageSrc,
}) => {
  console.log(stateObj, "state obj");
  const [image_1, Set_image_1] = useState("");
  const [price_1, Set_price_1] = useState("");
  const [compare_at_price_1, Set_compare_at_price_1] = useState("");
  const [title_1, Set_title_1] = useState("");
  const [product_link_1, Set_link_1] = useState("");

  // const [image_2, Set_image_2] = useState("");
  // const [price_2, Set_price_2] = useState("");
  // const [compare_at_price_2, Set_compare_at_price_2] = useState("");
  // const [title_2, Set_title_2] = useState("");
  // const [product_link_2, Set_link_2] = useState("");

  const [bmi, Set_bmi] = useState("");
  const [disp, Set_disp] = useState(true);
  const [variant_id, Set_variant_id] = useState("");
  const [product_subtext, Set_product_subtext] = useState("");

  useEffect(() => {
    const product_id = getProductId(stateObj, assessment_type);
    // if (assessment_type == "6 mins") {
    //   var product_id_1 = product_id[0];
    //   var product_id_2 = product_id[1];
    //   if (saturn_long_choice.category == "weight-management") {
    //     var weight = parseInt(stateObj[""]);
    //     var height = parseInt(stateObj[""]);
    //     var BMI = parseInt((weight * 10000) / (height * height));
    //     Set_bmi(BMI);
    //   }
    // } else {
    var product_id_1 = "7637440266488";
    if (stateObj["Select category for consultation"] == "Weightloss") {
      var weight = parseInt(stateObj.Weight);
      var height = parseInt(stateObj.Height);
      var BMI = parseInt((weight * 10000) / (height * height));
      Set_bmi(BMI);
    }
    // }

    setTimeout(() => {
      Set_disp(false);
    }, 4000);
    const getData = async () => {
      var config = {
        method: "get",
        url: `https://${process.env.REACT_APP_GET_PRODUCTS_BASE_URL}/${stateObj["Select category for consultation"]}/products.json`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios(config)
        .then((response) => {
          const product_recommended_1 = response.data["products"].filter(
            (item) => item.id == product_id_1
          );

          console.log(product_recommended_1, "reco1");
          let product_title_1 = product_recommended_1[0]["title"];
          const product_price_1 =
            product_recommended_1[0]["variants"][0]["price"];
          const compare_price_1 =
            product_recommended_1[0]["variants"][0]["compare_at_price"];
          const img_src_1 = product_recommended_1[0]["images"][0]["src"];
          const variant_id_1 = product_recommended_1[0]["variants"][0]["id"];
          const utm_tag =
            assessment_type == "30 sec"
              ? "utm_source=website-consultation&utm_medium=short-consultation&utm_campaign=recommended-product"
              : "utm_source=website-consultation&utm_medium=long-consultation&utm_campaign=highly-recommended-product";
          Set_link_1(`${variant_id_1}:1?checkout[shipping_address][first_name]=${stateObj["First Name"]}&
               checkout[shipping_address][last_name]=${stateObj["Last Name"]}&
               checkout[shipping_address][phone]=${stateObj["Phone Number"]}&${utm_tag}`);
          // checkout[contact_email]=${stateObj[""]}
          // Set_product_subtext(subtext)
          Set_title_1(product_title_1);
          Set_image_1(img_src_1);
          Set_price_1(product_price_1);
          Set_compare_at_price_1(compare_price_1);
          // Set_link(product_recommended[0]["handle"])

          // if (product_id_2) {
          //   const product_recommended_2 = response.data["products"].filter(
          //     (item) => item.id == product_id_2
          //   );
          //   console.log(product_recommended_2, "reco2");
          //   let product_title_2 = product_recommended_2[0]["title"];
          //   const product_price_2 =
          //     product_recommended_2[0]["variants"][0]["price"];
          //   const compare_price_2 =
          //     product_recommended_2[0]["variants"][0]["compare_at_price"];
          //   const img_src_2 = product_recommended_2[0]["images"][0]["src"];
          //   const variant_id_2 = product_recommended_2[0]["variants"][0]["id"];
          //   Set_link_2(`${variant_id_2}:1?checkout[shipping_address][first_name]=${stateObj[""]}&
          //      checkout[shipping_address][last_name]=${stateObj[""]}&
          //      checkout[shipping_address][phone]=${stateObj[""]}&
          //      utm_source=website-consultation&utm_medium=long-consultation&utm_campaign=recommended-product`);
          //   // checkout[contact_email]=${stateObj[""]}
          //   // Set_product_subtext(subtext)
          //   Set_title_2(product_title_2);
          //   Set_image_2(img_src_2);
          //   Set_price_2(product_price_2);
          //   Set_compare_at_price_2(compare_price_2);
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();

    const data = getSendMailData(assessment_type, stateObj);
    console.log(data, "mail data");
    const sendMail = async () => {
      const config = {
        method: "post",
        url: `https://${process.env.REACT_APP_SEND_MAIL_API_BASE_URL}/api/device/consultation`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log("success");
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    sendMail();
  }, []);

  return (
    <>
      <div
        className={`${false ? "show-overlay-screen" : "hide-overlay-screen"}`}
      >
        Our best minds are curating a personalized wellness plan for you
        <div className="progress-bar-saturn">
          <div class="in"></div>
        </div>
      </div>
      <Header
        bannerHeader={bannerHeader}
        bannerSubText={bannerSubText}
        bannerImageSrc={bannerImageSrc}
      />
      <div className="recommendation-section">
        <div className="doctor-info2" style={{ marginTop: "0%" }}>
          <div className="logo">
            <img src={logo} className="image" alt="" />
          </div>
          <div className="details2">
            {/* <div className="image-section">
                        <img src={doctor} className='image' alt="" />
                    </div> */}
            <div className="name-designation">
              <div className="name">
                Thank you for filling out the assessment!
              </div>
              {true ? (
                <div className="designation">
                  One of our physician’s assistants will call you shortly.
                </div>
              ) : (
                <div className="designation"> </div>
              )}
              <div className="designation">
                {true ? "Meanwhile," : ""} Check out our recommended products.
              </div>
            </div>
          </div>
          {/* <h2>
                    Audio Consultation
                </h2> */}
          {/* <div className="details" style={{marginTop:"10%"}}> 
                    <div className="image-section">
                        <img src={phone} className='image-call' alt="" />
                    </div>
                    <div className="name-designation">
                        <div className="booking" style={{color: "#12B435"}}>
                            Booking confirmed
                        </div>
                        <div className="booking">
                            Date: 7 May 2022
                        </div>
                        <div className="booking">
                            Time: 12:30 p.m
                        </div>
                    </div>
                </div> */}
        </div>
        <div className="product-info">
          <div className="product-header">
            <h3 className="shown-h3">We Recommend only the best for you</h3>
            <h3 className="hidden-h3">Our Recommendation</h3>
            {bmi ? (
              <div className="bmi">
                <div className="bmi-text">Your BMI</div>
                <div className="bmi-number">{bmi}</div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="product-card">
            <div className="image-section">
              <img src={image_1} className="image" alt="Product1" srcset="" />
            </div>
            <div className="details">
              <div className="reco-1">Highly Recommended</div>
              <div className="heading">
                {title_1}
                {/* Completete Hair Treatment */}
              </div>
              {/* <div className="subtext"> */}
              {/* {product_subtext} */}
              {/* Treats all hair concerns and improves overall hair growth */}
              {/* </div> */}
              <div className="price">
                Rs.{price_1}{" "}
                {compare_at_price_1 ? (
                  <span className="strike-text">
                    &nbsp;&nbsp;<strike>Rs.{compare_at_price_1}</strike>
                  </span>
                ) : null}
              </div>
              <div
                className={`${
                  assessment_type == "30 sec" ? "no-display" : ""
                } buy-button product-checkout-button`}
              >
                <GenericButton
                  productNavigate="true"
                  productLink={product_link_1}
                  radiusBottom="true"
                  text={"Buy Now"}
                />
              </div>
            </div>
          </div>

          {assessment_type == "6 mins" ? (
            <div className="product-card">
              <div className="image-section">
                <img src={image_2} className="image" alt="Product1" srcset="" />
              </div>
              <div className="details">
                <div className="reco-1">Recommended</div>
                <div className="heading">
                  {title_2}
                  {/* Completete Hair Treatment */}
                </div>
                {/* <div className="subtext"> */}
                {/* {product_subtext} */}
                {/* Treats all hair concerns and improves overall hair growth */}
                {/* </div> */}
                <div className="price">
                  Rs.{price_2}{" "}
                  {compare_at_price_2 ? (
                    <span className="strike-text">
                      &nbsp;&nbsp;<strike>Rs.{compare_at_price_2}</strike>
                    </span>
                  ) : null}
                </div>
                <div className="buy-button product-checkout-button">
                  <GenericButton
                    productNavigate="true"
                    productLink={product_link_2}
                    radiusBottom="true"
                    text={"Buy Now"}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {assessment_type == "30 sec" ? (
          <div className="product-checkout">
            <div className="proceed-container">
              <div className="proceed-button">
                <GenericButton
                  text="BUY NOW"
                  productNavigate="true"
                  productLink={product_link_1}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Callback;
