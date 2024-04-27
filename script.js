async function buscarCep() {
    var input = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/00000000/json/";
    var novaUrl = url.replace(/\d{8}(?=\/json\/$)/, input);
    const requisicao = await fetch(novaUrl);
    const resposta = await requisicao.json();
    if (resposta.erro) {
        console.log("CEP INVALIDO")
    } else {
        document.getElementById("resposta").innerHTML=resposta.logradouro + ", " + resposta.bairro+ ", " + resposta.localidade + " - " + resposta.uf, ".";
    }
}
