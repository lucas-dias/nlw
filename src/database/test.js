const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    // inserir dados na tabela 
    /*await saveOrphanage(db, {
            lat: "-22.8914",
            lng: "-48.443",
            name: "Lar dos meninoes",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
            whatsapp: 29309823,
            images: [
                "https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1603138461788-8090d5c00bf7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar. ",
            opening_hours: "Horário de visitas das 8h às 18h",
            open_on_weekends: "1"
        
    })*/

    //consultar dados da tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   // console.log(selectedOrphanages)

    // consultar somente um orfanato pelo ID
    //const orfanato = await db.all('SELECT * FROM orphanages WHERE id  = "4"')

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))  

    
})