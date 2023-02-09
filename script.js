// alert - document.write - console.log
var numeroSecreto = parseInt(Math.random() * 10)
//alert (numeroSecreto)
var tentativas = 3 

while (tentativas > 0) { // while em PT significa: enquanto

  var chute = parseInt(prompt ("Digte um número entre 0 e 10"))

    if (numeroSecreto == chute) {
        alert("Acertou " + numeroSecreto)
        break 
      } else if (chute > numeroSecreto){
        alert("O número secreto é menor")
      } else if (chute < numeroSecreto) {
        alert("O número secreto é maior")
        tentativas = tentativas - 1
      }
}

if (chute != umeroSecreto){   // != significa:diferente
  alert("Suas tentativas acabaram. O Número secreto era" + numeroSecreto)
}