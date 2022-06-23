/*!
*
* Evgeniy Ivanov - 2021
* busforward@gmail.com
* Skype: ivanov_ea
*
*/

var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    touchDevice: function() { return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i); }
};

window.onload = () => {
    // Запрет "отскока" страницы при клике по пустой ссылке с href="#"
    document.querySelectorAll('[href="#"]').forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
        });
    });

    $('.review__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        nextArrow: '<img src="img/next.svg" class="slick-next">',
        prevArrow: '<img src="img/prev.svg" class="slick-prev">',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('[data-sendsay-form-subscribe]').on('click', function() {
        const form = $(this).data('sendsayFormSubscribe');
        // console.log(form);
        SENDSAY.activatePopup("https://sendsay.ru/form/"+form+"");
    })
};

// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
function stikyMenu() {
    const header = document.querySelector('.header');

    setNavbarPosition();

    window.addEventListener('scroll', () => {
        setNavbarPosition();
    });

    function setNavbarPosition() {
        // console.log(document.body.style);
        if ( window.scrollY > header.clientTop ) {
            document.body.style.paddingTop = header.offsetHeight + 'px';
            header.classList.add('stiky');
        } else {
            document.body.style.paddingTop = '';
            header.classList.remove('stiky');
        }

    }
}
stikyMenu();

function openMobileNav() {
    document.querySelector('.navbar__toggle').addEventListener('click', ev => {
        document.querySelector('.nav').classList.toggle('open');
        document.body.classList.toggle('navbar__open');
        ev.target.classList.toggle('active');
    });
}
openMobileNav();

// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
function srollToId() {
    const el = document.querySelectorAll('[data-scroll-to]');
    el.forEach((item, i) => {
        item.addEventListener('click', e => {
            document.body.classList.remove('navbar__open');
            document.querySelector('.nav').classList.remove('open');
            document.querySelector('.navbar__toggle').classList.remove('active');
        });
    });
}
srollToId();
