//
// app.js
//
import express from 'express'
import fs from 'fs'

const app = express()


function getRandomImage() {
   const files = fs.readdirSync('/var/www/html/yesno/img')
   const gifs = files.filter(f => f.endsWith('.gif'))
   const rand = Math.floor(Math.random() * gifs.length)
   return `/img/${gifs[rand]}`
}

function getAnswerImg() {
   const answer = Math.random() < 0.5 ? "yes" : "no"
   const image = getRandomImage()
   return { answer, image }
}

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


app.get('/api', function (request, response) {
   response.send(getAnswerImg());
});


app.listen(3000, function () {
  console.log('Server listening on port 3000')
});