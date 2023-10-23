const signUpAsset = require("./module")






const subpage = (id)=> { return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sub.css" type="text/css">
    <title>Document</title>
  </head>
  <body>
    <form method="post" action="/send" id="like">
      <div class='pp'><span class="cc">${id}</span>님! 반갑습니다. 저에게 편지를 보내주세요!</div>
      <div>
       Title : <input type="text" id="tibox" name="title" placeholder=""></div>
       <br>
       <div>Text : <input type="text" id="tbox" name="text" placeholder=""></div>
      <input class=btn type="submit" id="send">
    </form>
    <script>
     let p = document.querySelector(".pp")
     let c = document.querySelector(".cc")
     let title = document.getElementById("tibox")
     let text = document.getElementById("tbox")
     let send = document.getElementById("send")
     title.style.width="30vw"
     title.style.height="30vh"
     title.style.color="${signUpAsset.id}"
     text.style.width="30vw"
     text.style.height="30vh"
    
     send.style.width= "5vw"
     send.style.height= "5vw"
     send.style.color="white"
     
    </script>
  </body>
  </html>`}

module.exports= subpage
