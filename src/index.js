const {response} = require("express")
const express = require("express")

const app = express();

app.get("/veiculo",(request, response) =>{
    return response.send("Veliculos")
}
);
app.get("/fabricante",(request, response) =>{
    return response.send("Fabricante")
}
);

console.log("Começo a putaria lá no 3k")
app.listen(3000);