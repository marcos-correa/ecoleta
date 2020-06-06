//  importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//  criar o objeto que irá fazer operações no baco de dados | todo o new é um OBJETO!!!!!!!!
//  new em uma classe/constructor => inicia um objeto sqlite......) é um constructor ou um objeto
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para as nossas operações
//serialize rodar sequencia de dado
//função anonima dentro de ()
db.serialize(() =>{
    // ----- COM COMANDOS SQL
    //criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         uf TEXT,
    //         state TEXT,
    //         uc TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    
    
    // //começo de inserir dados na tabela
    // const query = `
    //     INSERT INTO places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         uf,
    //         state,
    //         uc,
    //         city,
    //         items
    //     ) VALUES(?,?,?,?,?,?,?,?,?)
    // `

    // const values = [
    //     "http://127.0.0.1:3000/images/papersider.jpg",
    //     "Papersider",
    //     "Jardim Ameria",
    //     "numero 237",
    //     "21",
    //     "Paraná",
    //     "210002301",
    //     "Rio do Sul",
    //     "Outras coisas"
    // ]
    // //função callback(posição 3) | chame de volta | espera na loja de roupa qdo func vai no depósito 
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)

    // }
    
    // // ----------------------INSERIR DADOS
    // db.run(query, values, afterInsertData)
    // // ----------------------INSERIR DADOS
    
    
    // //consultar os dados da tabela
    // function consultRegs(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // }            //  o * tá consultando TUDO, se trocado por name, ou id, ou uf, consulta somente os selecionados
    
    // // ------------------------ CONSULTAR DADOS

    // // function consultRegs(err,rows){
    // //     if(err){
    // //         return console.log(err)
    // //     }
    // //  //     const total = rows.length
    // //  //     console.log("Total de cadastros")
    // //  //     console.log(total)
    // //  //     console.log("cadastros")
    // //  //     console.log(rows)
        


    // //    // return res.render("search-results.html", {places: rows, total})
    // // }
    // // db.all(`SELECT * FROM places`, consultRegs)
    // // db.all(`SELECT * FROM places`, consultRegs)


    // //deletar um dado da tabela
    // function deleteRegs(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     // console.log("Registros deletados com sucesso")
    //     // console.log(this)
    // }
    // //------------------------------------------ DELETAR DADOS
    // db.run(`DELETE FROM places WHERE id = ?`, [8], deleteRegs) // db.all(`SELECT * FROM places`, consultRegs) //CONSULTANDO DEPOIS DA DELEÇÃO

})
