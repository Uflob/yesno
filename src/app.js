//
// app.js
//
import express from 'express'

const app = express()

app.get('/', function (request, response) {
   const {answer,image} = getAnswerImg();
   response.send(`
   <html>
      <div class="vertically-centered">
      <div class="horizontally-centered big">
         ${answer.toUpperCase()}
      </div>
      </div>

   <style>
      html {
         background-image : url('${image}');
         background-size : cover ;
      }
      .big {
         font-size : 72px;
         color : red;
      }
      .vertically-centered {
         display: flex;
         flex-direction: row;
         height: 100vh;
         align-items: center;
      }
      .horizontally-centered {
         display: flex;
         width: 100vw;
         justify-content: center;
      }
   </style>
   </html>`
   )
})

// app.get('/about', function (request, response) {
//    response.send(`
//        <h2>DU Fullstack Inc.</h2>
//        <a href='/'>Accueil</a>
//    `)
// })

//function aleatoire () {
//   let rand = Math.floor((Math.random)*2);
//   if (rand === 0) { 
//      return "Yes"
//   } else {
//      return "No"}
//}
// et dans ce cas, dans app.get, partie const data, on met "answer"=aleatoire()

const imageY = ["https://media1.tenor.com/m/uqz_oXiz8usAAAAC/pedro-pascal.gif",
   "https://media1.tenor.com/m/pYsjfAztEw8AAAAd/jack-nicholson-yes.gif"]
const imageN = ["https://media.tenor.com/qDp2jVc3J4UAAAAi/no-love-without-love.gif","https://media1.tenor.com/m/4LMHc8wJliQAAAAd/crying-hysterically-crying-meme.gif"]
// plutôt que de prendre des images moi-même sur le web, j'aurais pu aller sur le site officiel yesno.wtf/api, lancer ça dans mon Terminal avec npx bidule
// copier plusieurs de leurs lignes "answer" : "no" etc.
// les coller dans une variable ici

function getAnswerImg(){
   const rand = Math.floor((Math.random())*2)
   const answer = (rand === 0) ? 'no' : 'yes';
   const images = (answer === "yes") ? imageY : imageN
   const randImage = Math.floor((Math.random())*images.length)
   const image = images[randImage]

   return {answer,image};
}

app.get('/api', function (request, response) {
   
   response.send(getAnswerImg());
});

//app.get('/api', function (request, response) {
//   const data = { "answer":aleatoire(),"forced":false,
//      "image":"https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif" }
//   response.send(data)
//})

app.listen(3000, function () {
  console.log('Server listening on port 3000')
});