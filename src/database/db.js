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
    //criar uma tabela || primeira linha da tabela id INTEGER PRIMARY KEY AUTOINCREMENT,
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image,
            name,
            address,
            address2,
            uf,
            state,
            uc,
            city,
            items,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            itemTotal
        );
    `)
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS items (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name,
    //         itemid
    //     );
    // `)
    
    // //começo de inserir dados na tabela
    // const query = `
    //     INSERT INTO items(
    //         name,
    //         itemid
    //     ) VALUES(?,?)
    // `

    // const values = [
    //     "Óleo de Cozinha",
    //     "Óleo de Cozinha"
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
    // ----------------------INSERIR DADOS
    
    
    // //consultar os dados da tabela
    // function consultRegs(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    // }            //  o * tá consultando TUDO, se trocado por name, ou id, ou uf, consulta somente os selecionados
    
    // // ------------------------ CONSULTAR DADOS

    function consultRegs(err,rows){
        if(err){
            return console.log(err)
        }
         const total = rows.length
         console.log("Total de cadastros")
         console.log(total)
         console.log("cadastros")
         console.log(rows)

    //  //    return res.render("search-results.html", {places: rows, total})
    }
    // db.all(`SELECT * FROM items`, consultRegs)
    db.all(`SELECT * FROM places`, consultRegs)
    // db.all(`SELECT * FROM places`, consultRegs)

    // ------ consultando itens

    // function consultRegs(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //      const total = rows.length
    //      console.log("Total de cadastros em ITEMS")
    //      console.log(total)
    //      console.log("cadastros")
    //      console.log(rows)

    // //    return res.render("search-results.html", {items: rows, total})
    // }
    // db.all(`SELECT * FROM items`, consultRegs)


    //deletar um dado da tabela
    // function deleteRegs(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registros deletados com sucesso")
    //     console.log(this)
    // }
    //------------------------------------------ DELETAR DADOS
    // db.exec(`DROP TABLE IF EXISTS items;`, deleteRegs) // db.all(`SELECT * FROM places`, consultRegs) //CONSULTANDO DEPOIS DA DELEÇÃO
    // db.run(`DELETE FROM places WHERE id = ?`, [8], deleteRegs) // 
    //db.all(`SELECT * FROM places`, consultRegs) //CONSULTANDO DEPOIS DA DELEÇÃO

})
