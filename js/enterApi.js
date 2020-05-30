let entertainmentApi = `http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=697ce2191a594a4ea16e1f44a40816d0`;
console.log(entertainmentApi);
window // it fetch data from api
  .fetch(entertainmentApi)
  .then((entertainmentData) => {
    //readablestream it is covertd into json and then again to convert into arrayobject
    entertainmentData
      .json() //
      .then((entertainment) => {
        // console.log(Sports.articles); //output-articles, for fetching the object and loop it
        let entertainmentInfo = entertainment.articles; //stores all value in sportsInfo

        let firstentertainmentBlock = entertainment.articles;
        let output = [];
        for (let enter of entertainmentInfo) {
          // console.log(enter);
          let date = new Date(enter.publishedAt).toDateString();
          output += `
        <div class="row">
        <div class="col-md-5">
        <img src="${enter.urlToImage}" class="enterImg" />
        </div>
        <div class="col-md-7">
        <ul class="list-group">
        <a href="${enter.url}" target="_blank">
        <li class="text-dark">
        ${enter.title}</li></a>
        <span class="text-muted text-right">publishedAt :${date}</span>
        </ul>
        </div>
        </div>
          `;
          document.getElementById(
            'entertainmentAllTemplate'
          ).innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
