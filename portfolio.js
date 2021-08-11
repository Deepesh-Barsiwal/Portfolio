$(document).ready(function(){
    $('.name h2,.occupation h1,.social-list,').lettering();
});

anime({
    targets:'.name h2 ',
    delay:anime.stagger(100,{start:1500}),
    duration:1000,
    opacity:1,
    easing:'easeInSine',
})
anime({
    targets:'.line ',
    delay:anime.stagger(100,{start:1600}),
    duration:1000,
    opacity:1,
    easing:'easeInSine',
})
anime({
    targets:'.occupation h1',
    delay:anime.stagger(100,{start:2500}),
    duration:1000,
    opacity:1,
    easing:'easeInSine',
})
anime({
    targets:'.btn ',
    delay:anime.stagger(100,{start:3500}),
    duration:1000,
    opacity:1,
    translateX:100,
    easing:'easeInSine',
});

anime({
    targets:'.name-col .about ',
    delay:anime.stagger(100,{start:1500}),
    duration:1000,
    opacity:1,

    easing:'easeInSine',
});
anime({
    targets:'.social-list a ',
    delay:anime.stagger(100,{start:3500}),
    duration:1000,
     opacity:1,
     backgroundColor: 'black',
  
    easing:'easeInSine',
});
anime({
    targets:'.social-list  ',
    delay:anime.stagger(100,{start:5000}),
    duration:1000,
    translateY:50,
    
opacity:1,
    
    easing:'easeInSine',
});
anime({
    targets:'.icon-line  ',
    delay:anime.stagger(100,{start:4000}),
    duration:1000, 
    opacity:1,
    translateY:60,
    easing:'easeInSine',
});

anime({
    targets:'.name-col ',
    delay:anime.stagger(100,{start:1000}),
    duration:1000, 
    opacity:1,
    easing:'easeInSine',
});

anime({
    targets:'.img-div img ',
    delay:anime.stagger(100,{start:7000}),
    duration:1000, 
    opacity:1,
    translateX:30,
    easing:'easeInSine',

});