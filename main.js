const btn = document.querySelector(".waltuh");

function jaime() {
    var walter = document.body.className;
    if(walter == "walterwhite"){
        jesse = walter.replace("walterwhite", "walterblack");
        resultado = document.body.className = jesse;

        pitongo = document.getElementById("saul").textContent;
        bisturi = pitongo.replace("White", "Black");
        canavial = document.getElementById("saul").textContent = bisturi;

        escada = document.getElementById("waltuh").src;
        degrau = escada.replace("waltuh", "hutlaw");
        ladeira = document.getElementById("waltuh").src = degrau;

    } else {
        jesse = walter.replace("walterblack", "walterwhite");
        resultado = document.body.className = jesse;

        bisturi = pitongo.replace("Black", "White");
        canavial = document.getElementById("saul").textContent = bisturi;

        escada = document.getElementById("waltuh").src;
        degrau = escada.replace("hutlaw", "waltuh")
        ladeira = document.getElementById("waltuh").src = degrau;
    }
}