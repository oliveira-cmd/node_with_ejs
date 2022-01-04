const express = require("express");
const app = express();
app.set("view engine", "ejs") // a ferramenta de renderização (view engine) vai usar o ejs

app.get("/", function(req, res){
    const items = [
        {
            title: 'D',
            message: ' Desenvolvimento em Node com Ejs'
        },
        {
            title: 'E',
            message: ' Ejs usa JavaScript para renderizar Html'
        },
        {
            title: 'M',
            message: ' Gostei da parte de incluir partes do HTML '
        },
        {
            title: 'A',
            message: ' Isso é muito grande'
        },
        {
            title: 'I',
            message: ' Cansei'
        },
        {
            title: 'S',
            message: ' AAAAAAAAAAAAAAAAAA'
        },
    ]
    res.render("pages/index",{
        qualitys: items,
    }); // quando abrir a rota ("/") - home do site, vai renderizar o index.ejs -- Para rodar com o comando "node", o arquivo index.ejs precisa estar dentro de uma pasta "views"
})

app.get("/sobre", function(req, res){
    res.render("pages/about");// quando abrir a rota ("/sobre") - home do site, vai renderizar o about.ejs
})
app.listen(7359)
console.log('Server is run in 7359')