anime({
    targets: '.box',
    translateX: 250,
    translateY: 250,
    duration: 5000,
    easing: 'linear',
    loop: true
});

const box2El = document.querySelector(".box2");

box2El.animate([
    {transform: "translate(0,0)"},
    {transform: "translate(100px, 100px)"},
], 2000)