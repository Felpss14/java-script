function contar() {
    var ini = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('res')

    if (ini.length == 0 || fim.length == 0) {
        res.innerHTML = "Impossível contar!"
        return
    }

    if (passo.length == 0 || passo == 0) {
        alert("Vamos considerar o passo como 1")
        passo = 1
    }

    res.innerHTML = 'Contando: <br> '
    var i = Number(ini)
    var f = Number(fim)
    var p = Number(passo)

    if (i < f) {
        // Contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉 `
        }
    } else {
        // Contagem regressiva
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} 👉 `
        }
    }

    res.innerHTML += `🏁`
}