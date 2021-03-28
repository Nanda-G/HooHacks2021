const test = [
  {
      subject: "math",
      test: [
      {
        id: 1,
        type: "mcq",
        q: "What is the sum of 20+35+14?",
        o: ["71", "56", "69", "68"],
        a: "69",
      },
      {
        id: 2,
        type: "mcq",
        q: "Which of the following is an integer?",
        o: ["85.1", "339", "69.420", "23.15"],
        a: "339",
      },
      {
        id: 3,
        type: "mcq",
        q: "50 times of 8 is equal to",
        o: ["500", "400", "40", "4000"],
        a: "400",
      },
      {
        id: 4,
        type: "sub",
        q: "What is a triangle with all unequal sides?",
        a: "Scalene"
      }
    ]
  },
  {
    subject: "ec",
    test: [
    {
      id: 1,
      type: "mcq",
      q: "Which of the following is not a processor?",
      o: ["Intel Core i9-10980XE", "AMD Ryzen 9 5900X", "Nvidia GeForce RTX 2080 SUPER ", "Intel 8080"],
      a: "Nvidia GeForce RTX 2080 SUPER",
    },
    {
      id: 2,
      type: "mcq",
      q: "In a p-channel JFET, the charge carriers are",
      o: ["Holes", "Electrons", "Both electrons and holes", "None of the above"],
      a: "Holes",
    },
    {
      id: 3,
      type: "mcq",
      q: "Which number system has a base 16?",
      o: ["Octal", "Binary", "Hexadecimal", "Decimal"],
      a: "Hexadecimal",
    },
    {
      id: 4,
      type: "sub",
      q: " What is a DC-to-DC power converter which steps down voltage?",
      a: "Buck converter"
    }
    ]
  },
  {
    subject: "cs",
    test: [
    {
      id: 1,
      type: "mcq",
      q: "Which of the following is not a programming language?",
      o: ["C#", "HTML", "Scala", "Python"],
      a: "HTML",
    },
    {
      id: 2,
      type: "mcq",
      q: "What is binary form for 10?",
      o: ["0111", "0100", "0010", "1010"],
      a: "1010",
    },
    {
      id: 3,
      type: "mcq",
      q: "Which number system has a base 8?",
      o: ["Octal", "Binary", "Hexadecimal", "Decimal"],
      a: "Octal",
    },
    {
      id: 4,
      type: "sub",
      q: "Which statement is used to break out of a loop?",
      a: "Break"
    }
    ]
  },
  {
    subject: "eng",
    test: [
    {
      id: 1,
      type: "mcq",
      q: "Which of the following is a pronoun?",
      o: ["Aneesh", "He", "Nandu", "Karan"],
      a: "He",
    },
    {
      id: 2,
      type: "mcq",
      q: "How many alphabets are there in english language?",
      o: ["26", "10000", "0", "35"],
      a: "26",
    },
    {
      id: 3,
      type: "mcq",
      q: "How many vowels are there in english language?",
      o: ["5", "33", "69", "1000"],
      a: "5",
    },
    {
      id: 4,
      type: "sub",
      q: "He is ___ good boy. Fill the blank with appropriate article.",
      a: "a"
    }
    ]
  }
];

module.exports = test;
