function getWins(wins, losers) {
  let result;
  let saldo = wins - losers;

  if (wins <= 10) {
    result = "Ferro";
  } else if (wins <= 20) {
    result = "Bronze";
  } else if (wins <= 50) {
    result = "Prata";
  } else if (wins <= 80) {
    result = "Ouro";
  } else if (wins <= 90) {
    result = "Diamante";
  } else if (wins <= 100) {
    result = "Lendario";
  } else {
    result = "Imortal";
  }

  return { saldo: saldo, nivel: result };
}

const { saldo, nivel } = getWins(101, 10);
console.log(`O heroi tem um saldo de ${saldo} e está no nivel de ${nivel}`);
