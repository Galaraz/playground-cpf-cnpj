# Playground  Validação de CPF e CNPJ em JavaScript


Este documento explica a lógica utilizada na validação de CPF e CNPJ em JavaScript, fornecendo código de exemplo para ambas as situações.

## Validando CPF

A validação do CPF envolve o cálculo de dois dígitos verificadores a partir dos nove primeiros dígitos. O procedimento é o seguinte:

1. **Remoção de Caracteres Especiais**: Remove-se os caracteres especiais do CPF, mantendo apenas os dígitos numéricos.

2. **Verificação de Dígitos Repetidos**: Verifica se todos os dígitos são iguais. Se sim, o CPF é considerado inválido.

3. **Cálculo do Primeiro Dígito Verificador**:
   - Multiplica-se cada um dos nove primeiros dígitos por pesos decrescentes de 10 a 2.
   - Soma-se esses resultados e calcula-se o resto da divisão por 11.
   - Se o resto for menor que 2, o primeiro dígito verificador é 0; caso contrário, é 11 menos o resto.

4. **Cálculo do Segundo Dígito Verificador**:
   - O processo é semelhante ao do primeiro dígito, mas com pesos decrescentes de 11 a 2.

5. **Verificação dos Dígitos Verificadores**: Compara-se os dígitos verificadores calculados com os dois últimos dígitos do CPF original. Se não forem iguais, o CPF é considerado inválido.

Se todos esses passos são bem-sucedidos, o CPF é considerado válido.

## Validando CNPJ

A validação do CNPJ é semelhante, envolvendo o cálculo de dois dígitos verificadores a partir dos 12 primeiros dígitos. O procedimento é o seguinte:

1. **Remoção de Caracteres Especiais**: Remove-se os caracteres especiais do CNPJ, mantendo apenas os dígitos numéricos.

2. **Verificação de Dígitos Repetidos**: Verifica se todos os dígitos são iguais. Se sim, o CNPJ é considerado inválido.

3. **Cálculo do Primeiro Dígito Verificador**:
   - Multiplica-se cada um dos 12 primeiros dígitos por pesos específicos.
   - Soma-se esses resultados e calcula-se o resto da divisão por 11.
   - Se o resto for menor que 2, o primeiro dígito verificador é 0; caso contrário, é 11 menos o resto.

4. **Cálculo do Segundo Dígito Verificador**:
   - O processo é semelhante ao do primeiro dígito, mas com pesos específicos.

5. **Verificação dos Dígitos Verificadores**: Compara-se os dígitos verificadores calculados com os dois últimos dígitos do CNPJ original. Se não forem iguais, o CNPJ é considerado inválido.

Se todos esses passos são bem-sucedidos, o CNPJ é considerado válido.

---

**Observação**: Esta explicação é uma simplificação, e a validação real pode envolver considerações específicas adicionais.