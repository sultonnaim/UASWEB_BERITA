document.addEventListener('DOMContentLoaded', function() {
    var hash = window.location.hash;

    var aboutImage0 = document.getElementById('about_image_0');
    var aboutImage1 = document.getElementById('about_image_1');
    var aboutImage2 = document.getElementById('about_image_2');
    var konten_1 = document.getElementById('konten_1');
    var konten_2 = document.getElementById('konten_2');

    if (hash === '#about_image_0') {
        aboutImage0.classList.remove('d-none');
        // aboutImage0.classList.add('pt-100');
        aboutImage1.classList.add('d-none');
        aboutImage2.classList.add('d-none');
        konten_1.classList.add('d-none');
        konten_2.classList.add('d-none');
    } else if (hash === '#about_image_1') {
        aboutImage0.classList.add('d-none');
        aboutImage1.classList.remove('d-none');
        aboutImage2.classList.add('d-none');
        konten_1.classList.add('d-none');
        konten_2.classList.add('d-none');
    } else if (hash === '#about_image_2') {
        aboutImage0.classList.add('d-none');
        aboutImage1.classList.add('d-none');
        aboutImage2.classList.remove('d-none');
        konten_1.classList.add('d-none');
        konten_2.classList.add('d-none');
    }
});