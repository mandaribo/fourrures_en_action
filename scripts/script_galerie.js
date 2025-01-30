let photoIndex = 1;
let intervalAuto;

montrerPhoto(photoIndex);

function changerPhoto(n) {
    montrerPhoto(photoIndex += n)
}

function photoActive(n) {
    montrerPhoto(photoIndex = n)
}

function montrerPhoto(n) {
    let i;
    let photos = document.getElementsByClassName("photo-galerie")
    let points = document.getElementsByClassName("point");
    if (n > photos.length) { photoIndex = 1 }
    if (n < 1) { photoIndex = photos.length }
    for (i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }
    for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace("active", "");
    }
    photos[photoIndex - 1].style.display = "block";
    points[photoIndex - 1].className += " active";

    photos[photoIndex - 1].addEventListener('click', zoomPhoto);

    demarrerAuto();
}

function changementAuto() {
    changerPhoto(1);
}
function demarrerAuto(interval = 4000) {
    arreterAuto();
    if (intervalAuto) {
        clearInterval(intervalAuto);
    }
    intervalAuto = setInterval(changementAuto, interval)
}

function arreterAuto() {
    if (intervalAuto) {
        clearInterval(intervalAuto);
        intervalAuto = null;
    }
}

function zoomPhoto(event) {
    const elem = event.target;

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) { elem.requestFullscreen(); }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', controllerZoom);

function controllerZoom() {
    if (!document.fullscreenElement) {
        // quitter le fullscreen
        demarrerAuto();
    } else {
        // entrer le fullscreen
        arreterAuto();
    }
}

demarrerAuto();