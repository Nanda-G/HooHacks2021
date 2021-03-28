const test = [
  {
    subject: "<SUBJECT_NAME>",
    test: [
      {
        id: 1,
        type: "mcq",
        q: "Which of the following is a country?",
        o: ["Delhi", "India", "Mumbai", "Chennai"],
        a: "India",
      },
      {
        id: 2,
        type: "mcq",
        q: "Which of the following is a water body?",
        o: ["Lava", "Lake", "City", "Whale"],
        a: "Lake",
      },
      {
        id: 3,
        type: "mcq",
        q: "Which of the following is a fabric?",
        o: ["Coffee", "Water", "Air", "Cotton"],
        a: "Cotton",
      },
      {
        id: 4,
        type: "sub",
        q: "What is the capital of India?",
        a: "New Delhi",
      },
    ],
  },
];

module.exports = test;
