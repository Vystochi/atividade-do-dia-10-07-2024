let peso = 60, altura = 1.76, imc = peso / (altura ** 2);

let classificacao;
if (imc < 18.5) {
    classificacao = 'Magreza';
} else if (imc < 25) {
    classificacao = 'Normal';
} else if (imc < 30) {
    classificacao = 'Sobrepeso';
} else if (imc < 35) {
    classificacao = 'Obesidade grau I';
} else if (imc < 40) {
    classificacao = 'Obesidade grau II';
} else {
    classificacao = 'Obesidade grau III';
}

console.log('Seu IMC é =',imc, 'e sua classificação é =',classificacao );
