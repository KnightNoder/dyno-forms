[
  {
    title: 'Personal Information',
    components: [
      {
        title: 'First Name',
        type: 'text',
      },
      {
        title: 'Last Name',
        type: 'text',
      },
      {
        title: 'Age',
        type: 'text',
      },
    ],
  },
  {
    title: 'Issues',
    components: [
      {
        title: 'Category',
        type: 'radio',
        options: [
          {
            displayText: 'Hair',
            value: 'hair',
          },
          {
            displayText: 'Skin',
            value: 'skin',
          },
          {
            displayText: 'Weight Loss',
            value: 'weight',
          },
          {
            displayText: 'Performance',
            value: 'performance',
          },
          {
            displayText: 'Beard',
            value: 'beard',
          },
        ],
      },
      {
        title: 'Sub Category',
        type: 'checkbox',
      },
    ],
  },
  {
    title: 'Appointment',
    components: [
      {
        title: 'Date',
        type: 'date',
      },
    ],
  },
];
