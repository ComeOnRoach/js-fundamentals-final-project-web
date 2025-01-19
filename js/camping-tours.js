const mediaQuery = window.matchMedia('(min-width: 460px)');

const campingTours = document.querySelector('.camping_tours')
const campingToursH2 = document.querySelector('.camping_tours-h2');
const campingToursContrainer = document.querySelector('.camping_tours--container');
const items = document.querySelectorAll('.camping_tours--item');

const imgs = [
    "/img/index/camping-tours/index.yellowstone-tetons.jpeg",
    "/img/index/camping-tours/index.utah_arizona.jpeg",
    "/img/index/camping-tours/index.montana.jpeg",
    "/img/index/camping-tours/index.banff_yoho.jpeg"
];

items.forEach( (item, index) => {
    const img = document.createElement('img');
    img.src = imgs[index];
    img.alt = `camping-tours picture${index}`;
    item.height = "100%";
    img.style.objectFit = 'cover';    
    item.append(img);
});

campingTours.style.display = 'grid';
campingTours.style.justifyItems = 'center';
campingTours.style.gap = '20px';
campingToursContrainer.style.display = 'grid';

mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
        campingToursContrainer.style.gridTemplateColumns = '1fr 1fr'
} else {
    campingToursContrainer.style.gridTemplateColumns = '1fr'
}
});

campingToursContrainer.style.gap = '15px';

