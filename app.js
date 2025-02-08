$(document).ready(function(){
    $('.home-slider').owlCarousel({
        items: 1, // Başlangıçta tek bir öğe gösterilsin
        loop: true, // Sonsuz döngü
        margin: 20, // Öğeler arası boşluk
        responsive:{
            0:{
                items: 1 // 0px ve üzeri için 1 öğe göster
            },
            576:{
                items: 1 // 576px ve üzeri için 1 öğe göster
            },
            768:{
                items: 3 // 768px ve üzeri için 3 öğe göster
            },
            992:{
                items: 3 // 992px ve üzeri için 3 öğe göster
            }
        }
    });
});


