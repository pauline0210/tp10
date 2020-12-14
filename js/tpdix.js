var bieres= {
    a100: {degre:"5.2%", nom:"Jupiler", prix:"1"},
    a101:{degre:"5.2%", nom:"Maes", prix:"1"},
    a102:{degre:"5.2%", nom:"Stella artois", prix:"1"},
    a103:{degre:"8%", nom:"Kasteel red", prix:"2"},
    a104:{degre:"9%", nom:"Chimay", prix:"2.5"}
};

var commandes={};

function ajouterBoisson(a){
    let ref = a.name;
    if (ref in commandes) {
        commandes[ref]++;
    } else {
        commandes[ref] = 1;
    }
    afficherAchats();
}

function afficherBieres() {
    let phrase;
    let index =faireBieres();
    for (var i of index) {
        phrase = "<tr>";
        phrase += "<td class=ref>" + i + "</td> ";
        phrase += "<td class=degre>" + bieres[i].degre + "</td>";
        phrase += "<td class=nom>" + bieres[i].nom + "</td>";
        phrase += "<td class=prix>" + bieres[i].prix + "</td>";
            var button = "<input type='button' value='Add' name='" + i + " '  onclick='ajouterBoisson(a);'>"
        phrase += "<td class=Ajt>" + button + "</td>";
        phrase += "</tr>";
            addElem("tableBieres", phrase);
    }
}

function afficherAchats() {
            setElem("tableAchats", "");
            var phrase;
            for (var i in commandes) {
                phrase = "<tr>";
                phrase += "<td class=ref>" + i + "</td>";
                phrase += "<td class=nom>" + bieres[i].nom + "</td>";
                for (let sElement of phrase += `<td class=prix>${bieres[i].prix * commandes[i]}`) {
                } "</td>";
                phrase += "<td class=nombre>" + commandes[i]+ "</td>";
                phrase += "</tr>";
                addElem("tableAchats", phrase);
            }
            totalAchats();
}

function totalAchats(){
            let total = 0;
            for (var a in commandes){
                total+= commandes[a]* bieres[a].prix;
            }
            setElem("total", total.toFixed(2));
}

function faireBieres() {
            return Object.keys(bieres).sort(function (x, y) {
                return bieres[x].nom > bieres[y].nom ? 1 : bieres[x].nom < bieres[y].nom ? -1 : 0;
            });
 }



function setElem(id, v){
    document.getElementById(id).innerHTML = v;
}

function addElem(id, v){
    document.getElementById(id).innerHTML += v;
 }

function getElem(id){
    return document.getElementById(id).innerHTML;
}
