let scienceApi = `http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=697ce2191a594a4ea16e1f44a40816d0`;
console.log(scienceApi);
window // it fetch data from api
  .fetch(scienceApi)
  .then((scienceData) => {
    //readablestream it is covertd into json and then again to convert into arrayobject
    scienceData
      .json() //
      .then((science) => {
        // console.log(Sports.articles); //output-articles, for fetching the object and loop it
        let scienceInfo = science.articles; //stores all value in sportsInfo

        let firstscienceBlock = science.articles;
        let sciencenewsBlockOne = firstscienceBlock[0];
        document.getElementById('scienceFirstTemplate').innerHTML = `
<ul>
<img src="${sciencenewsBlockOne.urlToImage}" />
<a href="${sciencenewsBlockOne.url}" target="_blank">

</a>

</ul>

        `;

        let output = [];
        for (let science of scienceInfo) {
          // console.log(sport);
          output += `
        <ul class="list-group p-2 my-2">
        <a href="${science.url}" target="_blank">
        <li class=" text-dark">${science.title}</li></a>
        </ul>
          `;
          document.getElementById('scienceAllTemplate').innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
