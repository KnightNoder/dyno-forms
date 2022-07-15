import React from "react";
import Header from "./Header";
import SelfAssessmentSection from "./SelfAssessmentSection";
import { useEffect } from "react";

const LandingPage = ({
  bannerHeader,
  bannerSubText,
  bannerImageSrc,
  set_url_function,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        bannerHeader={bannerHeader}
        bannerSubText={bannerSubText}
        bannerImageSrc={bannerImageSrc}
      />
      <SelfAssessmentSection set_url_function={set_url_function} />
    </>
  );
};

export default LandingPage;
