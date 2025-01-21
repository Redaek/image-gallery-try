let nextBtn = document.getElementById('next');

let backBtn = document.getElementById('back');

let scroollContainer = document.querySelector('.gallery');
scroollContainer.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    scroollContainer.scrollLeft += evt.deltaY
    scroollContainer.style.scrollBehavior = 'auto'
})

nextBtn.addEventListener('click', ()=>{
    scroollContainer.style.scrollBehavior = 'smooth'
    scroollContainer.scrollLeft += 900
})

backBtn.addEventListener('click', ()=>{
    scroollContainer.style.scrollBehavior = 'smooth'
    scroollContainer.scrollLeft -=900;

})