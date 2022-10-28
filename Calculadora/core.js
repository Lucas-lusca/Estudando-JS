// Essa função recebe e armazenas os valores recebidos do HTML
function calcular(tipo, valor) {
    if(tipo === 'acao'){
        switch (valor) {

            case 'c':
                document.getElementById('resultado').value = ''
                break

            case '=':
                // eval transforma valor string em numero.
                // Aqui salva o valor em numero das strings digitadas pelo usuario
                var valorCampo = eval(document.getElementById('resultado').value);

                // Aqui passamos aquele valor salvo para o id 'resultaddo'
                document.getElementById('resultado').value = valorCampo;
                break;
            
                // Por default ele apanas adiciona o valor no id resultado
            default :
                document.getElementById('resultado').value += valor;
                break
        }
    }else if(tipo === 'valor'){
        // Passamos o valor salvo no parametro valor para o id resultado
        document.getElementById('resultado').value += valor;

    }
}