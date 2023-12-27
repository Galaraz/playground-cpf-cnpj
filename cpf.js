function valida_cpf0(cpf) {
    //versao mais simples apenas verifica tamanho e se numeros se repetem
    const cpfLimpo = cpf.toString().replace(/[.-]/g, "");

    if (cpfLimpo.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpfLimpo)) {
        return false;
    }

   
    return true;
}

function valida_cpf1(cpf) {
   //versao com calculo do ministerio da fazenda
    const cpfLimpo = cpf.toString().replace(/[^\d]/g, "");

    const digitos = Array.from(cpfLimpo, Number);

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += digitos[i] * (10 - i);
    }
    const resto1 = soma % 11;
    const digito1 = (resto1 < 2) ? 0 : 11 - resto1;

    // Verifica o primeiro dígito verificador
    if (digitos[9] !== digito1) {
        console.log("Digito 1 inválido");
        return false;  // CPF inválido
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += digitos[i] * (11 - i);
    }
    const resto2 = soma % 11;
    const digito2 = (resto2 < 2) ? 0 : 11 - resto2;

    // Verifica o segundo dígito verificador
    if (digitos[10] !== digito2) {
        return false;  // CPF inválido
    }

    return true;  // CPF válido
}


function valida_cpf2(cpf) {
    // outra abordagem
    exp = /\.|-/g;
    cpf = cpf.toString().replace(exp, "");
    if(cpf.length != 11) return false; 
    var digitoDigitado  = eval(cpf.charAt(9) + cpf.charAt(10));
    console.log(digitoDigitado)
    var digitoGerado    = 0;
    var soma1   = 0, soma2 = 0;
    var vlr     = 11;
    for (i = 0; i < 9; i++) {
        soma1 += eval(cpf.charAt(i) * (vlr - 1));
        soma2 += eval(cpf.charAt(i) * vlr);
        vlr--;
    }
    soma1   = (soma1 % 11) < 2 ? 0 : 11 - (soma1 % 11);
    aux     = soma1 * 2;
    soma2   = soma2 + aux;
    soma2   = (soma2 % 11) < 2 ? 0 : 11 - (soma2 % 11);
    if (cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999" || cpf == "00000000000") digitoGerado = null;
    else digitoGerado = eval(soma1.toString().charAt(0) + soma2.toString().charAt(0)); 
    if (digitoGerado != digitoDigitado) return false;
    return true;
  

}


// Testando o CPF ""
const cpf = "";
console.log(valida_cpf1(cpf));

// Testando o cpf "025.698.311-08"
//0 * 10 + 2 * 9 + 5 * 8 + 6 * 7 + 9 * 6 + 8 * 5 + 3 * 4 + 1 * 3 + 1 * 2  = 211
// var teste = ((5 * 11 + 2 * 10 + 9 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 2 * 5 + 4 * 4 + 7 * 3 + 2 * 2)*10)%11 

