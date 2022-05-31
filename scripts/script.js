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
let imagesCarousel = ['./images/kyogre.png', './images/groudon.png', './images/mewtwo.png'] // Primal reversion kyogre just toooo clean - declare variable with value = array of the images
let imagesContainer = document.getElementById('carouselContainer');
let activeImage = 0; // index of array - start from first item in array

imagesContainer.style.backgroundImage = `url(${imagesCarousel[activeImage]})` // to call variable and array defined on line 14 - to put variable as background
imagesContainer.style.backgroundRepeat = 'repeat-y' // repeat on y-axis
imagesContainer.style.backgroundSize = '400px'
imagesContainer.style.backgroundAttachment = 'fixed'
imagesContainer.style.backgroundPosition = 'center'
// imagesContainer.style.transition = 'all 2s'

setInterval(rotate, 2500) // images change every 2,5 seconds
function rotate() { // function to rotate between images
    if (activeImage < imagesCarousel.length - 1) { // if statement to start from image zero once 3 elements in array is reached -> [0,1,2] so length(3) - 1
        activeImage++ // to go to next image ++ means the same as +1
        imagesContainer.style.backgroundImage = `url(${imagesCarousel[activeImage]})` // call the array for next image
    } else {
        activeImage = 0 // reset images to start from 0 when last image in array is reached
        imagesContainer.style.backgroundImage = `url(${imagesCarousel[activeImage]})` // call the array to start from 0 again
    }
}

// collage
/*let imagesCollage = ['../images/1.png', '../images/2.png', '../images/3.png', '../images/4.png', '../images/5.png', '../images/6.png', '../images/7.png', '../images/8.png', '../images/9.png', '../images/10.png', '../images/11.png', '../images/12.png', '../images/13.png', '../images/14.png', '../images/15.png', '../images/16.png']
// I am leaving this here to remind myself how much of a fool I would be doing it this way...
let collageContainer1 = document.getElementById('1')
let collageImage1 = 0;
collageContainer1.style.backgroundImage = `url(${imagesCollage[collageImage1]})`
collageContainer1.style.backgroundRepeat = 'no-repeat'
collageContainer1.style.backgroundPosition = 'center'
collageContainer1.style.backgroundSize = 'cover'

let collageContainer2 = document.getElementById('2')
let collageImage2 = 1;
collageContainer2.style.backgroundImage = `url(${imagesCollage[collageImage2]})`
collageContainer2.style.backgroundRepeat = 'no-repeat'
collageContainer2.style.backgroundPosition = 'center'
collageContainer2.style.backgroundSize = 'cover'

let collageContainer3 = document.getElementById('3')
let collageImage3 = 2;
collageContainer3.style.backgroundImage = `url(${imagesCollage[collageImage3]})`
collageContainer3.style.backgroundRepeat = 'no-repeat'
collageContainer3.style.backgroundPosition = 'center'
collageContainer3.style.backgroundSize = 'cover'

let collageContainer4 = document.getElementById('4')
let collageImage4 = 3;
collageContainer4.style.backgroundImage = `url(${imagesCollage[collageImage4]})`
collageContainer4.style.backgroundRepeat = 'no-repeat'
collageContainer4.style.backgroundPosition = 'center'
collageContainer4.style.backgroundSize = 'cover'
*/

let collageContainer = document.getElementsByClassName('image');
for (let i = 0; i < collageContainer.length; i++) {
    let img = document.createElement('img')
    let click = false;
    img.src = `./images/${i + 1}.png`
    img.style.width = '100%'
    img.addEventListener('click', function () {
        this.style.transform = 'scale(1.1)'
        document.getElementById(`p${i + 1}`).style.display = 'block'
        document.getElementById(`p${i + 1}`).style.position = 'absolute'
        document.getElementById(`p${i + 1}`).style.zIndex = '42069'
        if (!click) {
            this.addEventListener("mouseout", function () {
                this.style.transform = 'scale(1)'
                document.getElementById(`p${i + 1}`).style.display = 'none'
            })
        }
    })
    collageContainer[i].appendChild(img)
}

// hover pokemon name
let show = document.querySelectorAll('.poke') // to get the classes .poke
console.log(show);
show.forEach((name) => { // forEach function, because 4 images
    name.addEventListener('mouseover', () => {
        let image = new Image(); // built-in js function
        image.src = `./images/${name.innerText}.png`; // path in the images
        image.style.position = 'absolute'; // no interference with the text
        image.style.left = '0%';
        image.style.transform = 'translateY(-100%)'; // images above text
        image.style.height = '400%' // height of images
        name.appendChild(image) //appends image as last child of the element
    })
})
show.forEach((name) => { // function to make images disappear when mouse left
    name.addEventListener('mouseleave', () => {
        name.innerHTML = name.innerText;
    })
})

// chaser
document.getElementsByClassName('box')[0].addEventListener('mousemove', follow);
let chaser = document.querySelector('.chaser');

function follow(e){
    chaser.style.visibility = 'visible';
    chaser.style.left = e.pageX - 25 + 'px';
    chaser.style.top = e.pageY - 25 + 'px';
}

// runner
/* let runner = document.getElementsByClassName('runner')[0];
document.getElementsByClassName('box')[1].addEventListener('mousemove',function (e){
    runner.style.left = e.pageX-25+'px';
    runner.style.top = e.pageY-25+'px';
}) */


// random letters
Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
