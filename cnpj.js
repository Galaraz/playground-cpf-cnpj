function valida_cnpj(cnpj) {
    const cnpjLimpo = cnpj.toString().replace(/[^\d]/g, '');

    // Verifica se o CNPJ tem 14 dígitos
    if (cnpjLimpo.length !== 14) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpjLimpo)) {
        return false;
    }

    return true;
}


function valida_cnpj1(cnpj) {
    const cnpjLimpo = cnpj.toString().replace(/[^\d]/g, "");
    const digitos = Array.from(cnpjLimpo, Number);

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cnpjLimpo)) {
        return false;  // CNPJ inválido
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    let peso = 5;
    for (let i = 0; i < 12; i++) {
        soma += digitos[i] * peso;
        peso = (peso === 2) ? 9 : peso - 1;
    }
    const resto1 = soma % 11;
    const digito1 = (resto1 < 2) ? 0 : 11 - resto1;

    // Verifica o primeiro dígito verificador
    if (digitos[12] !== digito1) {
        return false;  // CNPJ inválido
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    peso = 6;
    for (let i = 0; i < 13; i++) {
        soma += digitos[i] * peso;
        peso = (peso === 2) ? 9 : peso - 1;
    }
    const resto2 = soma % 11;
    const digito2 = (resto2 < 2) ? 0 : 11 - resto2;

    // Verifica o segundo dígito verificador
    if (digitos[13] !== digito2) {
        return false;  // CNPJ inválido
    }

    return true;  // CNPJ válido
}


// Testando o CNPJ "11.144.888/1000-28"
const cnpjTeste = "11.144.888/1000-48";
console.log(valida_cnpj(cnpjTeste)); 