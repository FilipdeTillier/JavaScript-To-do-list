const mylist = document.getElementById('list'),
    but = document.getElementById('do'),
    text = document.getElementById('txt');
del = document.getElementById('delete');
tim = document.getElementById('time');
roll = document.getElementById('scrolled');

but.addEventListener('click', function() {

    if (txt.value.length > 0) {
        var point = document.createElement('li');
        mylist.appendChild(point);
        if (tim.value.length > 0) {
            point.innerHTML = text.value + ' at ' + tim.value;
            point.classList.add("goal");
        } else {
            point.innerHTML = text.value;
            point.classList.add("goal");
        }
    } else return;



}, false);

del.addEventListener('click', function(e) {
    while (mylist.hasChildNodes) {
        mylist.removeChild(mylist.firstChild);
    }
});