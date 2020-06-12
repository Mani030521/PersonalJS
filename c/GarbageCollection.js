const arr = [
    {
      surveyId: "50",
      questions: [
        { questionId: 196, 
          questionName: "Metamucil CA Campaign Locale", 
          questionnaireJSON: null, 
          helpText: null, 
        },
        {
          questionId: 197,
          questionName: "Metamucil CA Campaign Interest ID ",
          questionnaireJSON: null,
          helpText: null,
        },
        {
          questionId: 198,
          questionName: "Where did you hear about our campaign",
          questionnaireJSON: null,
          helpText: null,
          options: [
            {
              optionId: "1393",
              helptext: null,
              optiontext: "Friend/Family Member",
              parentOptionId: null,
              sequenceOrder: 1,
              questionId: 198,
              contentFullId: null
            },
          ]
        }
      ],
      surveyType: "PREFSV"
    }
  ]
  

  const a = arr[0].questions.find(question => !!question.options)

  console.log(a)