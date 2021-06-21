const http = require("http")
const fs = require("fs")

const url = "http://www.ans.gov.br/images/stories/Plano_de_saude_e_Operadoras/tiss/Padrao_tiss/tiss3/Padr%C3%A3o_TISS_Componente_Organizacional_202103.pdf"

http.get(url, function(res) {
    const fileStream = fs.createWriteStream("arquivo_padrao_tiss_componente_organizacional_[marco].pdf")
    res.pipe(fileStream)
    fileStream.on("finish", function() {
        fileStream.close()
        console.log("Done!")
    })
})