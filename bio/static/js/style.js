let display = 0;
let navigatorlist = document.getElementById('displaynavigator')
let openmenu = document.getElementById('headeropenmenu')
let closemenu = document.getElementById('headerclosemenu')

function navigatoropen() {
    if (display == 0){
        navigatorlist.innerHTML = `
            <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
            <li><a href="#"><i class="fa fa-question-circle" aria-hidden="true"></i> About</a></li>
            <li><a href="#"><i class="fa fa-server" aria-hidden="true"></i> Services</a></li>
            <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</a></li>
        `
        openmenu.innerHTML = ''
        closemenu.innerHTML = `
            <i class="fa fa-times" aria-hidden="true"></i>
        `
        display = 0
    }
}
function navigatorclose() {
    if (display == 0){
        navigatorlist.innerHTML = ''
        openmenu.innerHTML = `
            <i class="fa fa-bars" aria-hidden="true"></i>
        `
        closemenu.innerHTML = ''
        display = 0
    }
}