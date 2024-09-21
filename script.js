let vecp1 = [];
let vecp2 = [];
let tempvec1 = 0;
let tempvec2 = 0;
let vecfin = [];

function gen(tempvec1, tempvec2) {
    while (vecp1.length < 540) {
        tempvec1 = (Math.floor(Math.random() * 99999) + 1);
        
        if (tempvec1 % 2 == 0) {
            vecp1.push(tempvec1);
        }
    }
    
    while (vecp2.length < 460) {
        tempvec2 = (Math.floor(Math.random() * 99999) + 1);
    
        if (tempvec2 % 2 != 0) {
            vecp2.push(tempvec2);
        }
    }
}

function insSort(vecp1, vecp2) {
    for (let j = 1; j < vecp1.length; j++) {
        let keyv1 = vecp1[j];
        let i = j - 1;
        
        while (i >= 0 && vecp1[i] > keyv1) {
            vecp1[i + 1] = vecp1[i];
            i = i - 1;
        }
        vecp1[i + 1] = keyv1;
    }

    for (let j = 1; j < vecp2.length; j++) {
        let keyv2 = vecp2[j];
        let i = j - 1;
        
        while (i >= 0 && vecp2[i] > keyv2) {
            vecp2[i + 1] = vecp2[i];
            i = i - 1;
        }
        vecp2[i + 1] = keyv2;
    }
}

function ordenar(vecp1, vecp2) {
    let i = 0, j = 0;
    vecfin = [];

    while (i < vecp1.length && j < vecp2.length) {
        if (vecp1[i] <= vecp2[j]) {
            vecfin.push(vecp1[i]);
            i++;
        } else {
            vecfin.push(vecp2[j]);
            j++;
        }
    }

    while (i < vecp1.length) {
        vecfin.push(vecp1[i]);
        i++;
    }

    while (j < vecp2.length) {
        vecfin.push(vecp2[j]);
        j++;
    }
}

boton_generar.addEventListener("click", function() {
    vecp1 = [];
    vecp2 = [];
    vecfin = [];
    gen(tempvec1, tempvec2);
    llenarTabla(vecp1, vecp2, []);
});

boton_sort.addEventListener("click", function() {
    insSort(vecp1, vecp2);
    ordenar(vecp1, vecp2);
    llenarTabla([], [], vecfin); 
});

function llenarTabla(vecp1, vecp2, vecfin) {
    let tbody = document.querySelector("#tabla_nums tbody");
    tbody.innerHTML = "";

    if (vecfin.length === 0) {
        for (let i = 0; i < Math.max(vecp1.length, vecp2.length); i++) {
            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
            td1.textContent = vecp1[i] !== undefined ? vecp1[i] : "";
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.textContent = vecp2[i] !== undefined ? vecp2[i] : "";
            tr.appendChild(td2);

            tbody.appendChild(tr);
        }
    } 

    else {
        for (let i = 0; i < vecfin.length; i++) {
            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
            td1.textContent = vecfin[i];
            tr.appendChild(td1);

            tbody.appendChild(tr);
        }
    }
}