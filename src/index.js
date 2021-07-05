import movie from './movies.json'

import './main.css'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('cards')
    const aboutmovie = movie
    console.log(movie);

    aboutmovie.forEach(movien => {
        let cardDOM = buildCardDOM(movien)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})
function buildCardDOM(movien) {
    const icon = {
        bad: "https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png",
        good: "https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png",
        verygood: "https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png"
    };

    let i = movie.tomatoScore;
    let icons
    if (i <= 60) {
        icons = `<img class="icons" src="${icon.bad}" alt="#">`
    }
    else if (i <= 80) {
        icons = `<img class="icons" src="${icon.good}" alt="#">`
    }
    else {
        icons = `<img class="icons" src="${icon.verygood}" alt="#">`
    }

    return (
        `<div class="allmovie">
            <img src="${movien.posters.primary}" alt="#">
            <h1>${movien.title}</h1>
            <h2>${icons}${movien.tomatoScore}%</h2>
            <h3>${movien.dvdReleaseDate}</h3>
        </div>`
    )
}
//title: "The SpongeBob Movie: Sponge on the Run"
// tomatoScore: 66
//dvdReleaseDate: "Mar 4"
// primary: "https://resizing.flixster.com/atQgbSJHd7ING-1jk2d-0subV_Y=/130x0/v1.bTsxMzY5Njg1MTtqOzE4ODc4OzEyMDA7MjAwMDszMDAw"
// https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png
// https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png
// https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png
