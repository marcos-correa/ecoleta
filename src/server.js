const express = require("express") //requisitando o express e salvando o retorno na variavel express
const server = express() //executando o objeto express salvo anteriormente | objeto servidor

//pegar o bando de dados
const db = require("./database/db")


//configurando pasta public pro layout achar
//use = configuração especifica do servidor
//static é uma função que epera um argumento
server.use(express.static("public"))

//habilitar o uso do req.boy para usar na app
server.use(express.urlencoded({extended: true}))

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
    // para fazer uma requisição, que por enquanto era só /createpoit, quando cadastra tem que vir um req. e esse req é o req.query
    // req.query: Query Strings da URL | os dados que ficam na URL qdo SUBMIT | console.log(req.query)
    // req.query
    // console.log(req.query)


    return res.render("create-point.html")
})
//só o fomulário POST pode colocar o /savepoint
server.post("/savepoint", (req, res) =>{
    
    //req.body: corpo do formulário
    // console.log(req.body) //teste de require body
    //inserir dados DO banco de dados
    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            uf,
            state,
            uc,
            city,
            items
        ) VALUES(?,?,?,?,?,?,?,?,?)
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.uf,
        req.body.state,
        req.body.city,
        req.body.currentCity,
        req.body.items
    ]
    //função callback(posição 3) | chame de volta | espera na loja de roupa qdo func vai no depósito 
    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro")
            //tarefa criar tela de erro
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("/create-point.html", { saved: true})

    }
    
    // ----------------------INSERIR DADOS
    db.run(query, values, afterInsertData)
    // ----------------------INSERIR DADOS
  
})




//rota para a search-results ;; JAVA
server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }



    //pegar os dados do banco de dados -- INTEGRAÇÃO COM A FUNCTION DO BD!! TOOOOP
    function consultRegs(err,rows){
        if(err){
            return console.log(err)
        }
        const total = rows.length
        // console.log("Total de cadastros") // console.log(total) // console.log("cadastros") // console.log(rows)
        return res.render("search-results.html", {places: rows, total})
    }
    //
    //db.all(`SELECT * FROM places WHERE city = '${search}'`, consultRegs)
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, consultRegs)

    // TAREFA.... Deixar só o db.all aqui e chamar a função no BD | eu coloquei no return um , {places:rows} que é um nunjucks
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
