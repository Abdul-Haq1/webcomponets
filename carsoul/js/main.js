const images = []

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data.drinks[0])
        document.getElementById('carouselImg').src = data.drinks[0].strDrinkThumb
    })

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        images.push(data.drinks[0].strDrinkThumb)
    })
    
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        images.push(data.drinks[0].strDrinkThumb)
    }) 
    
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        images.push(data.drinks[0].strDrinkThumb)
    })
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        images.push(data.drinks[0].strDrinkThumb)
    })
    
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        images.push(data.drinks[0].strDrinkThumb)
    })

console.log(images)

let currentIndex = 0;
let autoSlideInterval;

function updateImage(){
    const imgElement = document.getElementById('carouselImg');
    imgElement.src = images[currentIndex];
}

function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImg(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function scheduleAutoSlide(){
    autoSlideInterval = setInterval(() => {
        nextImg();
    }, 3000)
}

// Initial rendering
updateImage();
scheduleAutoSlide();
