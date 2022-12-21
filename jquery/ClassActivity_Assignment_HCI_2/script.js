// Add your answer here

$('.lesson').hover(function () {
    $(this).find('.lesson-icon').fadeIn();
    $(this).find('.text-contents').fadeIn();
}, fadeOut)

function fadeOut() {
    $('.text-contents').fadeOut();
    $('p').fadeOut();
};

// $('.lesson-icon').hover(function () {
//     $('.text-contents').fadeIn();
//     // $(this).find('p .text-contents').fadeIn();
// },
//     function () {
//         $('.text-contents').fadeOut();
//     });




