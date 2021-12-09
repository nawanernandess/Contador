function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[ERRO] Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){     //contagem crescente
            for(c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }else{          // Contagem decrescente
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
      
}