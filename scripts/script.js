// light/dark mode
const button = document.getElementById('switch');
button.addEventListener('click', () => {
    if (document.body.classList.contains('darkMode')) {
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode')
    } else {
        document.body.classList.remove('lightMode');
        document.body.classList.add('darkMode')
    }
})

// parallax carousel
let imagesCarousel = ['../images/kyogre.png','../images/groudon.png','../images/mewtwo.png'] // Primal reversion kyogre just toooo clean - declare variable with value = array of the images
let imagesContainer = document.getElementById('carouselContainer');
let activeImage = 0; // index of array - start from first item in array

imagesContainer.style.backgroundImage = `url(${imagesCarousel[activeImage]})` // to call variable and array defined on line 14 - to put variable as background
imagesContainer.style.backgroundRepeat = 'repeat-y' // repeat on y-axis
imagesContainer.style.backgroundSize = '400px'
imagesContainer.style.backgroundAttachment = 'fixed'
imagesContainer.style.backgroundPosition = 'center'
// imagesContainer.style.transition = 'all 2s'

setInterval(rotate,2500) // images change every 2,5 seconds
function rotate (){ // function to rotate between images
    if(activeImage<imagesCarousel.length-1){ // if statement to start from image zero once 3 elements in array is reached -> [0,1,2] so length(3) - 1
        activeImage++ // to go to next image ++ means the same as +1
        imagesContainer.style.backgroundImage = `url(${imagesCarousel[activeImage]})` // call the array for next image
    }
    else{
        activeImage = 0 // reset images to start from 0
        imagesContainer.style.backgroundImage = `url(${imagesCarousel[activeImage]})` // call the array to start from 0 again
    }
}

// random letters
Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
