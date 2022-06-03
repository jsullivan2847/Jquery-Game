
const $guy = $('.your-guy');
const $box = $('.box');

const checkKey = ((key) => {
});

const colorCheck = ((element, color) => {
    return element.css('background-color');
});


  


$(document).keydown( (event) => { 
    if(event.keyCode === 38){
        $guy.animate({
            transform: "translateY(+= -20)",
        }, 1);

    }
    if(event.keyCode === 40){
        $guy.animate({
            transform: "translateY(+= 20)",
        }, 1);
    }
    if(event.keyCode === 37){
        $guy.animate({
            transform: "translateX(+= -20)",
        }, 1);
    } 
    if(event.keyCode === 39){
        $guy.animate({
            transform: "translateX(+= 20)",
        }, 1);
    } 
});


// $box.animate({
//     width: '+=700px',
//     height: '+=700px',
// }, 1000);

