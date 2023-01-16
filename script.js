let switcher = document.getElementById('switcher')
let sideBar= document.querySelector('.side-bar')
let hide= document.querySelectorAll('.hid')
let footer = document.querySelector('footer')
let check = true

switcher.addEventListener('click', function(){
    hide.forEach(e=> e.classList.toggle('hide'))
    sideBar.classList.toggle('wid')
    footer.classList.toggle('wid')

    // if(check)
    // {

    //     sideBar.style.setProperty("width", "90px");
    //     footer.style.setProperty("width", "90px");
    //     hide.forEach(e => e.style.setProperty("display", 'none'));
    //     check = false
    // }

    // else{

    //     sideBar.style.setProperty("width", "250px");
    //     footer.style.setProperty("width", "250px");
    //     hide.forEach(e => e.style.setProperty("display", 'block'));
    //     check = true
    // }

})