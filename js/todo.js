
function addTask() {
    var toDo = task.value;
    if (toDo == "" || toDo.length<5) {
        alert("Vauiller remplir le champ manquant");
    }
    else{
        var table = document.getElementById("tab");

        var ligne = table.insertRow(-1);


        
        var tagTr = document.getElementsByTagName('TR');
        var indexTr = tagTr.length - 1;

        var colonne1 = ligne.insertCell(0);
        colonne1.innerHTML += indexTr

        var colonne2 = ligne.insertCell(1);
        colonne2.innerHTML += toDo;
        
        var datee = new Date();
        var listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        var jourNom = listeJours[datee.getDay()];
        var jj = datee.getDate();
        var listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        var mois = listeMois[datee.getMonth()];
        var ans = datee.getFullYear();
        var colonne3 = ligne.insertCell(2);
        dateTime = jourNom + ' ' + jj + ' ' + mois + ' ' + ans; 
         
        colonne3.innerHTML =  dateTime;

        var colonne4 = ligne.insertCell(3);
        colonne4.innerHTML = "<input type='button' value='Do' onclick ='remove()' class='btn btn-success'> &nbsp; <input type='button' onclick='update()' value='Update' class='btn btn-warning'>";
    }

}
function remove() {
    var bar = document.querySelectorAll('td');
    bar.style.textDecoration = "line-through";
}

// else{
    //     var tr = document.createElement('tr');
    //     var id = tr.appendChild('td');
    //     var todo = tr.appendChild('td');
    //     var date = tr.appendChild('td');
    //     var Check = tr.appendChild('td');
    // }