{
    let headerOptions = document.querySelector('.header__options');
    let menuBurguer = document.querySelector('.options__menuBurguer');
    let listUnitys = document.querySelectorAll('.list__unity');


    function Active() {
        for (let listUnity of listUnitys) {
            listUnity.classList.toggle('openOptionsMenu')
        }
    }
    menuBurguer.addEventListener('click', () => {
        headerOptions.classList.toggle('openMenu')
        setTimeout(Active, 500)

    })

    let ak = document.querySelector('.options__menuBurguer')
    ak.addEventListener('click', () => {
        ak.classList.toggle('active')
    })

}