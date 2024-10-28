let nomePersonagem = "Rafael";
let quantidadeXP = 0;
let nivelPersonagem = "";

if (quantidadeXP <= 1000) {
    nivelPersonagem = "Ferro";
}
else if (quantidadeXP <= 2000) {
    nivelPersonagem = "Bronze";
}
else if (quantidadeXP <= 5000) {
    nivelPersonagem = "Prata";
}
else if (quantidadeXP <= 7000) {
    nivelPersonagem = "Ouro";
}
else if (quantidadeXP <= 8000) {
    nivelPersonagem = "Platina";
}
else if (quantidadeXP <= 9000) {
    nivelPersonagem = "Ascendente";
}
else if (quantidadeXP <= 10000) {
    nivelPersonagem = "Imortal";
}
else {
    nivelPersonagem = "Radiante";
}

console.log("O herói " + nomePersonagem + " está no nivel " + nivelPersonagem)