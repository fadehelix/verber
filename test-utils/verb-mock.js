const getVerb = (
  firstForm = 'be', 
  secondForm = 'was', 
  thirdForm = 'been') => ({
    infinitive: firstForm,
    past: secondForm,
    pastParticiple: thirdForm
  })


  export {getVerb}