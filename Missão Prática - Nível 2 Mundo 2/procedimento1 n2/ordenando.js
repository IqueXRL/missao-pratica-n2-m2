
var swap = (lista, n1, n2) => {
    var temp = lista[n1]
    lista[n1] = lista[n2]
    lista[n2] = temp
}

var shuffle = (lista, int) => {
    for (var i=0; i <= int; i++) {
        lista.sort(() => Math.random() - 0.5)
    }
    return lista
}

var bubbleSort = (lista) => {
    var validate = true,
        len = lista.length-1
        lista.map((e) => (Number.isInteger(e)) ? {} : validate=false)
        if (validate == true) {
            for(var x = 0; x < len; x++){
                for(var i = 0; i < len; i++) {
                    if(lista[i] > lista[i+1]) {
                        swap(lista,i,i+1)
                    }
                }
            }
    }
}

var selectionSort = (lista) => {
    var validate = true
        len = lista.length
        lista.map((e) => (Number.isInteger(e)) ? {} : validate=false);
    if (validate == true) {
        for(var s=0; s < len; s++) {
            var temp=s;
            for(var i = s+1; i < len; i++){
                if(lista[temp] > lista[i]) {
                    temp = i
                }
            }
            if(lista[s] != lista[temp]) {swap(lista,s,temp)}
        }
    }
    else {
        return "Use apenas números inteiros!"
    }
}

var quickSort = (lista,pri,ult) => {
    var validate = true;
    lista.map((e) => (Number.isInteger(e)) ? {} : validate=false);
    if (validate == true) {
        var n;
        var pivot = lista[Math.floor((pri + ult) / 2)]
        if(lista.length > 1) {
            n = partition(lista, pri, ult, pivot)
            if (pri < n - 1) {
                quickSort(lista, pri, n - 1)
            }
            if (n < ult) {
                quickSort(lista, n, ult)
            }
        }
    }
    else {
        return "Use apenas números inteiros!"
    }
}

var partition = (lista, pri, ult, pivot) => {
    while(pri <= ult) {
        while (lista[pri] < pivot) {
            pri++;
        }
        while (lista[ult] > pivot) {
            ult--;
        }
        if (pri <= ult) {
            swap(lista, pri, ult)
            pri++
            ult--
        }
    }
    return pri
}



function add() {
    var valor = document.getElementById("valor").value
    if(valor != '') {
        var lista = document.getElementById("valores")
        var node = document.createElement("li")
        var textnode = document.createTextNode(valor)
        node.appendChild(textnode)
        lista.appendChild(node)
    }
}
function ordenar(){
    var lista = Array.from(document.getElementById("valores").children)
    var vetor = lista.map((e) => {
        return +e.textContent
    })
    var method = document.getElementById("method").value
    switch(method) {
        case "1":
            bubbleSort(vetor)
            break;
        case "2":
            selectionSort(vetor)
            break;
        case "3":
            quickSort(vetor,0,vetor.length-1)
            break;
    }
    vetor = vetor.map((e) => {
        var node = document.createElement("li")
        var textnode = document.createTextNode(e)
        node.appendChild(textnode)
        return node
    })

    replace = vetor.reduce((replace,element) =>{
        let list = document.getElementById("valores")
        list.replaceChild(element,list.children[replace])
        return replace + 1
    },0)

}
function misturar(){
    var lista = document.getElementById("valores").children;
    var vetor = [];
    for(var li = 0; li <= lista.length-1; li++) {
        vetor.push(+(lista.item(li).innerHTML))
    }
    vetor = shuffle(vetor,5)
    vetor = vetor.map((e) => {
        var node = document.createElement("li")
        var textnode = document.createTextNode(e)
        node.appendChild(textnode)
        return node
    })
    replaced = vetor.reduce((replace,element) =>{
        var list = document.getElementById("valores")
        list.replaceChild(element,list.children[replace])
        return replace + 1
    },0)
}
