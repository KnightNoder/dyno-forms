export default allPages = {
  choice: [
    {
      name: "category",
      type: "radio",
      setFormValue: setFormValue,
      options: [
        {
          value: "hair",
          displayText: "Hair",
        },
        {
          value: "skin",
          displayText: "Skin",
        },
        {
          value: "weight-management",
          displayText: "Weight Loss",
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
};
