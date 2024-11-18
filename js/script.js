function show(num) {
    var x = "imgs/" + num + ".jpg";
    // alert(document.getElementById("pngImgForDevice"));
    document.getElementById("pngImgForDevice").setAttribute("src", x);
    document.getElementById("img1").classList.remove('actived');
    document.getElementById("img2").classList.remove('actived');
    document.getElementById("img3").classList.remove('actived');
    document.getElementById("img4").classList.remove('actived');
    document.getElementById("img5").classList.remove('actived');
    document.getElementById("img6").classList.remove('actived');
    document.getElementById("img7").classList.remove('actived');
    if (num == 7) {
        document.getElementById("img7").classList.add('actived');
    } else {
        var y = "img" + num;
        document.getElementById(y).classList.add('actived');
    }
}

function details(lang) {
    if (lang == 'Ar') {
        document.getElementById("En").classList.remove("details");
        document.getElementById("Ar").classList.remove("details");
        document.getElementById("Ar").classList.add("details");
        document.getElementById("top-border").style.display = "block";
        document.getElementById("top-border1").style.display = "none";
    } else {
        document.getElementById("Ar").classList.remove("details");
        document.getElementById("En").classList.remove("details");
        document.getElementById("En").classList.add("details");
        document.getElementById("top-border").style.display = "none";
        document.getElementById("top-border1").style.display = "block";
    }
}
function video() {
    document.getElementById("adfjks").style.display = "block";
    document.getElementById("video21233").play();
}
function exit() {
    document.getElementById("adfjks").style.display = "none";
    document.getElementById("video21233").pause();
}
document.getElementById("video21233").pause();

function alertMSG() {
    var alertBox = document.getElementById("myAlert");
    alertBox.style.display = "block";
}

function closeAlert() {
    var alertBox = document.getElementById("myAlert");
    alertBox.style.display = "none";
    window.location.href = "https://www.whatsapp.com/catalog/966569717738/?app_absent=0";
}
