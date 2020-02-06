fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=snowboarding&api-key=M55MxHkMSTR8YmBHMYPEIwpyJZpylOxp')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data.response.docs[2].headline.main)
    console.log(data.response.docs[2].snippet)
  })
  .catch(err => {

  })
