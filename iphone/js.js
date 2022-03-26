let li = document.querySelectorAll('.characteristics__list > li');
let dexc = document.querySelectorAll('.characteristics__description');
let d = document.querySelectorAll('.characteristics__title');
li.forEach((li, index) => {
    li.addEventListener('click', () => {

        dexc.forEach(li => li.classList.remove('active'))
        dexc[index].classList.add('active')
        d.forEach(d => d.classList.remove('active'));
        d[index].classList.add('active')

    })
})



let btn = document.querySelectorAll('.card-details__wrap-btn');
let btns = document.querySelectorAll('.card-detail__change');
let img = document.querySelector('.card__image');
let arr = [
    '<img class="card__image_item" src="img/iPhone-graphite.webp" alt="iPhone12"></img>',
    '<img class="card__image_item" src="img/iPhone-sierra_blue.webp" alt="iPhone12"></img>',
    '<img class="card__image_item" src="img/iPhone-silver.webp" alt="iPhone12"></img>'
]

btn.forEach((item, index)=>{
    item.addEventListener('click' , ()=>{
        btns.forEach(i => i.classList.remove('active'))
        btns[index].classList.add('active');

        img.innerHTML = arr[index]
    })
})