{
    let lastIndex = 0;
    let images = document.querySelectorAll('.slide__images img')
    let bullets = document.querySelectorAll('.bullets__bullet-single')

    images.forEach((item, index) => {

        document.querySelectorAll('.bullets__bullet-single')[index].addEventListener('click', function () {
            for (var i = 0; i < images.length; i++) {
                if (i != index) {

                    images[index].style.display = 'block'
                    images[i].style.display = 'none'

                    /* active bullets */
                    bullets[index].classList.add('bullets__active-bullet')
                    bullets[i].classList.remove('bullets__active-bullet')

                }
            }


        })
    })
}