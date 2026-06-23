/**
 * Verifica se um número é primo de forma eficiente.
 * @param {number} num - O número a ser verificado.
 * @returns {boolean} - Verdadeiro se for primo.
 */
function ehPrimo(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * Encontra o n-ésimo número primo.
 * @param {number} n - A posição do primo desejada.
 * @returns {number} - O n-ésimo número primo.
 */
function encontrarNesimoPrimo(n) {
    if (n === 1) return 2;
    
    let contagem = 1;
    let candidato = 1;
    
    while (contagem < n) {
        candidato += 2;
        if (ehPrimo(candidato)) {
            contagem++;
        }
    }
    return candidato;
}

/**
 * Função principal para capturar o input e exibir o resultado na tela.
 */
function calcularPrimo() {
    const input = document.getElementById('n-input');
    const resultadoDiv = document.getElementById('resultado');
    const n = parseInt(input.value);
    
    // Validação do input
    if (isNaN(n) || n < 1 || n > 10000) {
        resultadoDiv.innerHTML = '<span style="color: #ff4444;">Por favor, insira um número entre 1 e 10.000.</span>';
        return;
    }
    
    resultadoDiv.innerHTML = 'Calculando...';
    
    // Usar setTimeout para permitir que o navegador mostre "Calculando..." antes da trava do loop
    setTimeout(() => {
        const inicio = performance.now();
        const primo = encontrarNesimoPrimo(n);
        const fim = performance.now();
        const tempo = (fim - inicio).toFixed(4);
        
        resultadoDiv.innerHTML = `
            <p>O ${n}º número primo é: <strong>${primo}</strong></p>
            <p><small>Tempo de cálculo: ${tempo} ms</small></p>
        `;
    }, 10);
}

// Suporte para a tecla Enter no input
document.getElementById('n-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calcularPrimo();
    }
});
