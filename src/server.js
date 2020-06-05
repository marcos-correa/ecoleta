const express = require("express") //requisitando o express e salvando o retorno na variavel express
const server = express() //executando o objeto express salvo anteriormente | objeto servidor

//configurando pasta public pro layout achar
//use = configuração especifica do servidor
//static é uma função que epera um argumento
server.use(express.static("public"))

//utilizando o template engine || html com superpoderes
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//renderizar: passar pelo nunjucks e devolver html puro
//


//configurar caminhos da aplicação
//pagina inicial
//get é verbo http | protocolo http | barra é verbo get | jeito de cv com http
// "/" via get vai responder uma função | pedi a barra, rodar função
//(req ) é uma requisição, um pedido | (res)é uma rsposta

//rota pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html") //render |antes era sendFile(__dirname + "/views/index.html")
})

//rota para a create-point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

//rota para a search-results
server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})


// //configurar modal
// server.get("/modal", (req, res) => {
//     return res.render("partials/modal.html")
// })

//configurar a pasta /publics como tipo um home, pro layout achar...
// tem que ser antes do get


// TODA A VEZ QUE FAZ UMA ALTERAÇÃO NO SERVIDOR, PRECISAMOS REINICIAR ELE



//ligar o servidor |ouvindo a porta 3000
server.listen(3000)




// modulos extras pra poder ajudar no processo
