document.querySelector(".slider");

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        let el = document.querySelector('li').style.background-image;
        el.url = data.drinks[0].strDrinkThumb;
    })
