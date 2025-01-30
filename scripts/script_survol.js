const element = document.getElementById("soumettre");

element.addEventListener('mouseover', function(){
    element.style.backgroundColor = '#78b37c';
});

element.addEventListener('mouseout', function(){
    element.style.backgroundColor = '';
});