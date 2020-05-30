/*-----------news api key 697ce2191a594a4ea16e1f44a40816d0 keep the key confidential-----------*/
/*go to newsapi.org -> news resources -> india ->sub category*/
let SportsApi = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=697ce2191a594a4ea16e1f44a40816d0`;
console.log(SportsApi);

let technologyApi = `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=697ce2191a594a4ea16e1f44a40816d0`;
let businessApi = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=697ce2191a594a4ea16e1f44a40816d0`;

/*cors is used for security purpose*/
/*sports section starts here*/
window // it fetch data from api
  .fetch(SportsApi)
  .then((SportsData) => {
    //readablestream it is covertd into json and then again to convert into arrayobject
    SportsData.json() //
      .then((Sports) => {
        console.log(Sports.articles); //output-articles, for fetching the object and loop it
        let sportsInfo = Sports.articles; //stores all value in sportsInfo

        let firstSportsBlock = Sports.articles;
        let sportsnewsBlockOne = firstSportsBlock[0];
        document.getElementById('sportsFirstTemplate').innerHTML = `
<ul>
<img src="${sportsnewsBlockOne.urlToImage}" />
<a href="${sportsnewsBlockOne.url}" target="_blank">

</a>

</ul>

        `;

        let output = [];
        for (let sport of sportsInfo) {
          // console.log(sport);
          output += `
        <ul class="list-group p-2 my-2">
        <a href="${sport.url}" target="_blank">
        <li class=" text-dark">${sport.title}</li></a>
        </ul>
          `;
          document.getElementById('sportsAllTemplate').innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*sports section ends here */
