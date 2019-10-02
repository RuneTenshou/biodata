function max(x,y,z) {
    return Math.max(x,y,z);
}
function min(x,y,z) {
    let data = new Array(x,y,z).sort();
    return Math.min(x,y,z);
}

function mean(x, y, z) {
    
    return (x+y+z)/3;
}
function median(x, y, z) {
    let data = new Array(x, y, z).sort();
    return data[1];
}
function modus(x, y, z) {
    let data = new Array(x, y, z);
    let hitung = 0, max_hitung = 0, modus = 0;
    for (let i = 0; i < data.length; i++) {
        hitung = 0;
        for (let j = 0; j < data.length; j++) {
            if(data[i] == data[j]) {
                hitung++;
            }
        }
        if(hitung > max_hitung) {
            max_hitung = hitung;
            modus = data[i];
        }
    }
    if(max_hitung > 1) {
        return modus;
    }
    else {
        return "Gaada Modus";
    }
    
}

function pitung() {
    let x = parseInt(document.querySelector("#X").value);
    let y = parseInt(document.querySelector("#Y").value);
    let z = parseInt(document.querySelector("#Z").value);
    let hasil = document.getElementById("sembarang");
    hasil.innerHTML = "<table>\
    <tr>\
    <td>\
    Max\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ max(x,y,z) +"\
    </td>\
    </tr>\
    <td>\
    Min\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ min(x,y,z) +"\
    </td>\
    </tr>\
    <td>\
    Modus\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ modus(x,y,z) +"\
    </td>\
    </tr>\
    <td>\
    Mean\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ mean(x,y,z) +"\
    </td>\
    </tr>\
    <td>\
    Median\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ median(x,y,z) +"\
    </td>\
    </tr>\
    </table>"
}
function nyapu() {
    let x = document.querySelector("#X").value = "";
    let y = document.querySelector("#Y").value = "";
    let z = document.querySelector("#Z").value = "";
    let hasil = document.getElementById("sembarang");
    hasil.innerHTML = "";
}
