'use strict';

const mssg = document.querySelector('.msg');
const contact = document.querySelector('.contact');



const hue = (min, max) => Math.floor(Math.random() * (max - min) +1) + min;
const colour = `rgb(${hue(0, 255)}, ${hue(0, 255)}, ${hue(0, 255)})`;

// Contact me DOM
mssg.addEventListener('click', function(e){
        mssg.style.backgroundColor = colour;
        const rect = contact.getBoundingClientRect();
        e.target.getBoundingClientRect();
        contact.scrollIntoView({behaviour: 'smooth'});
});
