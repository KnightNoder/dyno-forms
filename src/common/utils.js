const recommendations = [
  {
    "What best describes your current hair condition?": "Receding hairline",
    id: "6933666726052",
  },
  {
    "What best describes your current hair condition?": "Thinning at the crown",
    id: "6920580530340",
  },
  {
    "What best describes your current hair condition?":
      "Overall hair loss/thinning",
    "Do you have any past allergy reactions to medicines?": "No",
    id: "6920192950436",
  },
  {
    "What best describes your current hair condition?":
      "Receding + Overall thinning",
    "Do you have any past allergy reactions to medicines?": "No",
    id: "6920192950436",
  },
  {
    "What best describes your current hair condition?":
      "Overall hair loss/thinning",
    "Do you have any past allergy reactions to medicines?": "Yes",
    id: "6920580530340",
  },
  {
    "What best describes your current hair condition?":
      "Receding + Overall thinning",
    "Do you have any past allergy reactions to medicines?": "Yes",
    id: "6920580530340",
  },
  {
    "How is your beard condition currently?": "Patchy beard",
    id: "6980058677412",
  },
  {
    "How is your beard condition currently?": "No Beard",
    id: "6980058677412",
  },
  {
    "How is your beard condition currently?":
      "Very less (Only mustaches and chin hair)",
    id: "6980058677412",
  },

  //None
  {
    id: "7524809375992",
  },
  {
    "Are you allergic to any of the ingredients below?": "None",
    "What are you concerned about?": "Pigmentation",
    id: "7524809375992",
  },
  {
    "Are you allergic to any of the ingredients below?": "None",
    "What are you concerned about?": "Active Acne",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "None",
    "What are you concerned about?": "Aging",
    id: "6877087105188",
  },
  {
    "Are you allergic to any of the ingredients below?": "None",
    "What are you concerned about?": "Dark circles",
    id: "7524809375992",
  },
  {
    "Are you allergic to any of the ingredients below?": "None",
    "What are you concerned about?": "Acne marks & spots",
    id: "7524809375992",
  },
  {
    "Are you allergic to any of the ingredients below?": "None",
    "What are you concerned about?": "Dull Skin",
    id: "7524809375992",
  },

  //Vitamic C

  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Open pores",
    id: "7637440266488",
  },
  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Pigmentation",
    id: "7524810391800",
  },
  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Active Acne",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Aging",
    id: "6825877635236",
  },
  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Dark circles",
    id: "7637452128504",
  },
  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Acne marks & spots",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Vitamin C",
    "What are you concerned about?": "Dull Skin",
    id: "7516963406072",
  },

  //Salicylic acid
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Open pores",
    id: "7637440266488",
  },
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Pigmentation",
    id: "7524810391800",
  },
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Active Acne",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Aging",
    id: "6825877635236",
  },
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Dark circles",
    id: "7637452128504",
  },
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Acne marks & spots",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Salicylic Acid",
    "What are you concerned about?": "Dull Skin",
    id: "7516963406072",
  },

  //Retinol
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Open pores",
    id: "7637440266488",
  },
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Pigmentation",
    id: "7524810391800",
  },
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Active Acne",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Aging",
    id: "6825877635236",
  },
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Dark circles",
    id: "7637452128504",
  },
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Acne marks & spots",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Retinol",
    "What are you concerned about?": "Dull Skin",
    id: "7516963406072",
  },

  //Kojic acid
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Open pores",
    id: "7637440266488",
  },
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Pigmentation",
    id: "7524810391800",
  },
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Active Acne",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Aging",
    id: "6825877635236",
  },
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Dark circles",
    id: "7637452128504",
  },
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Acne marks & spots",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Kojic Acid",
    "What are you concerned about?": "Dull Skin",
    id: "7516963406072",
  },

  //Niacinamide

  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Open pores",
    id: "7637440266488",
  },
  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Pigmentation",
    id: "7524810391800",
  },
  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Active Acne",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Aging",
    id: "6825877635236",
  },
  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Dark circles",
    id: "7637452128504",
  },
  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Acne marks & spots",
    id: "6826093478052",
  },
  {
    "Are you allergic to any of the ingredients below?": "Niacinamide",
    "What are you concerned about?": "Dull Skin",
    id: "7516963406072",
  },
];

// import { getProductIdFromEngine } from "./engine";

const getProductId = (stateObj, assessment_type) => {
  // const hair_current_condition = window.localStorage.getItem(
  //   "hair_current_condition"
  // );
  // const past_allergy = window.localStorage.getItem("past_allergy");
  // const big_event_120_days = window.localStorage.getItem("big_event_120_days");
  // const age = window.localStorage.getItem("age");
  // switch (choice) {
  //   case "Hairfall":
  //     if (hair_current_condition == "Condition one") {
  //       return "6933666726052";
  //     } else if (hair_current_condition == "Condition two") {
  //       return "6920580530340";
  //     } else if (
  //       (hair_current_condition == "Condition three" ||
  //         hair_current_condition == "Condition four") &&
  //       past_allergy == "no" &&
  //       parseInt(age) > 30
  //     ) {
  //       return "6920192950436";
  //     } else if (
  //       (hair_current_condition == "Condition three" ||
  //         hair_current_condition == "Condition four") &&
  //       (past_allergy == "yes" || big_event_120_days == "yes")
  //     ) {
  //       return "6920580530340";
  //     } else {
  //       return "6732124520612";
  //     }
  //   case "Beard":
  //     const beard_stage = window.localStorage.getItem("beard_condition");
  //     if (
  //       beard_stage == "Patchy Beard" ||
  //       beard_stage == "No Beard growth" ||
  //       beard_stage == "Very less"
  //     )
  //       return "6980058677412";
  //     else return "6743341072548";
  //   case "WeightLoss":
  //     const weight = parseInt(window.localStorage.getItem("weight"));
  //     const height = parseInt(window.localStorage.getItem("height"));
  //     const BMI = (weight * 10000) / (height * height);
  //     if (BMI > 25) return "6679222288548";
  //     else if (BMI > 22 && BMI <= 25) return "6774754902180";
  //     else return "6766304428196";
  //   case "Performance":
  //     const erection_case = window.localStorage.getItem("erection_problem");
  //     const ejaculation_case = window.localStorage.getItem("ejaculation_case");
  //     const history_of_heart_issues = window.localStorage.getItem(
  //       "history_of_heart_issues"
  //     );
  //     if (
  //       (erection_case ==
  //         "Sometimes, I have issues with maintaining erection" ||
  //         erection_case ==
  //           "Most of the times, I have issues with getting & maintaining an erection") &&
  //       ejaculation_case == "Ejaculate too early during performance" &&
  //       history_of_heart_issues == "No"
  //     )
  //       return "5805028966564";
  //     else if (
  //       (erection_case ==
  //         "Sometimes, I have issues with maintaining erection" ||
  //         erection_case ==
  //           "Most of the times, I have issues with getting & maintaining an erection") &&
  //       ejaculation_case == "Ejaculate too early during performance" &&
  //       history_of_heart_issues != "No"
  //     )
  //       return "6734347174052";
  //     else if (
  //       erection_case == "No issues in maintaining erection" &&
  //       ejaculation_case == "Ejaculate too early during performance"
  //     )
  //       return "6734347174052";
  //     else if (
  //       erection_case == "No issues in maintaining erection" &&
  //       history_of_heart_issues == "No"
  //     )
  //       return "6718215651492";
  //     else return "6734347174052";
  //   case "Skin":
  //     const skin_concern = window.localStorage.getItem("skin_concern");
  //     const skin_allergy_to = window.localStorage.getItem("skin_allergy_to");
  //     if (skin_allergy_to == "None") {
  //       if (skin_concern == "Open pores") return "7524809375992";
  //       if (skin_concern == "Pigmentation") return "7524809375992";
  //       if (skin_concern == "Active Acne") return "6826093478052";
  //       if (skin_concern == "Aging") return "6877087105188";
  //       if (skin_concern == "Dark circles") return "7524809375992";
  //       if (skin_concern == "Acne marks & spots") return "7524809375992";
  //       if (skin_concern == "Dull Skin") return "7524809375992";
  //     } else if (skin_allergy_to == "Vitamin C") {
  //       if (skin_concern == "Open pores") return "7637440266488";
  //       if (skin_concern == "Pigmentation") return "7524810391800";
  //       if (skin_concern == "Active Acne") return "6826093478052";
  //       if (skin_concern == "Aging") return "6825877635236";
  //       if (skin_concern == "Dark circles") return "7637452128504";
  //       if (skin_concern == "Acne marks & spots") return "6826093478052";
  //       if (skin_concern == "Dull Skin") return "7516963406072";
  //     } else if (skin_allergy_to == "Salicylic Acid") {
  //       if (skin_concern == "Open pores") return "7516963406072";
  //       if (skin_concern == "Pigmentation") return "7524810391800";
  //       if (skin_concern == "Active Acne") return "7637452128504";
  //       if (skin_concern == "Aging") return "6973442228388";
  //       if (skin_concern == "Dark circles") return "7637473067256";
  //       if (skin_concern == "Acne marks & spots") return "7524810391800";
  //       if (skin_concern == "Dull Skin") return "7516963406072";
  //     } else if (skin_allergy_to == "Retinol") {
  //       if (skin_concern == "Open pores") return "7516963406072";
  //       if (skin_concern == "Pigmentation") return "7524810391800";
  //       if (skin_concern == "Active Acne") return "6826093478052";
  //       if (skin_concern == "Aging") return "6825877635236";
  //       if (skin_concern == "Dark circles") return "7637452128504";
  //       if (skin_concern == "Acne marks & spots") return "6826093478052";
  //       if (skin_concern == "Dull Skin") return "7637440266488";
  //     } else if (skin_allergy_to == "Niacinamide") {
  //       if (skin_concern == "Open pores") return "7524809375992";
  //       if (skin_concern == "Pigmentation") return "7524810391800";
  //       if (skin_concern == "Active Acne") return "7637452128504";
  //       if (skin_concern == "Aging") return "6825877635236";
  //       if (skin_concern == "Dark circles") return "6906399129764";
  //       if (skin_concern == "Acne marks & spots") return "7524810391800";
  //       if (skin_concern == "Dull Skin") return "6906399129764";
  //     } else if (skin_allergy_to == "Kojic Acid") {
  //       if (skin_concern == "Open pores") return "7516963406072";
  //       if (skin_concern == "Pigmentation") return "7524810391800";
  //       if (skin_concern == "Active Acne") return "6876951576740";
  //       if (skin_concern == "Aging") return "6825877635236";
  //       if (skin_concern == "Dark circles") return "6877027401892";
  //       if (skin_concern == "Acne marks & spots") return "6826093478052";
  //       if (skin_concern == "Dull Skin") return "7516963406072";
  //     }
  // }
  // const productId = getProductIdFromEngine(
  //   stateObj["questionnaire"],
  //   stateObj["Select category for consultation"]
  // );
};

const getSendMailData = (assessment_type, stateObj) => {
  const questionnaire = [];

  for (const key in stateObj) {
    questionnaire.push({
      question: key,
      answer: stateObj[key],
    });
  }

  const data = JSON.stringify({
    firstName: stateObj["First Name"],
    lastName: stateObj["Last Name"],
    age: stateObj["Age"],
    phone: stateObj["Phone Number"],
    email: stateObj["Email"],
    consultation_type: assessment_type,
    category: stateObj["Select category for consultation"],
    booking: stateObj["Wasn’t that easy? Would you like a free consultation?"],
    image: "",
    user_survey: questionnaire,
  });

  return data;
};
module.exports = { getProductId, getSendMailData };
