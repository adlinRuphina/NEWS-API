let healthApi = `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=697ce2191a594a4ea16e1f44a40816d0`;
console.log(healthApi);
window // it fetch data from api
  .fetch(healthApi)
  .then((healthData) => {
    //readablestream it is covertd into json and then again to convert into arrayobject
    healthData
      .json() //
      .then((health) => {
        console.log(health.articles); //output-articles, for fetching the object and loop it
        let healthInfo = health.articles; //stores all value in sportsInfo

        let firsthealthBlock = health.articles;
        let healthnewsBlockOne = firsthealthBlock[0];
        document.getElementById('healthFirstTemplate').innerHTML = `
<ul>
<img src="${healthnewsBlockOne.urlToImage}" />
<a href="${healthnewsBlockOne.url}" target="_blank">

</a>

</ul>

        `;

        let output = [];
        for (let health of healthInfo) {
          // console.log(sport);
          output += `
        <ul class="list-group p-2 my-2">
        <a href="${health.url}" target="_blank">
        <li class=" text-dark">${health.title}</li></a>
        </ul>
          `;
          document.getElementById('healthAllTemplate').innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
