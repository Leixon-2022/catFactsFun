console.log("Im linked to html, says app.js!");


const buttonClicked = document.getElementById('getNewCatFact');

buttonClicked.addEventListener('click', function (event) {
//Här skriver vi vad som ska hända när vi klickar på knappen.
    //Vi anropar funktionen för att hämta kattfakta
    getRandomCatFacts();
    //Här kallar vi på funktionen som räknar vår knapptryckningar
    increment();
    //Här kallar vi på funktionen getKanyneQuotes
    getKanyeQuotes();
    //Här kallar vi på vår knappanimering
    buttonAnimation();

});



//New cat fact function
function getRandomCatFacts() {
    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let data = response;
            console.log(data);
            document.querySelector('.catFact').innerHTML = "😸 " + data.fact + " 😸";
        })
        .catch(function (err) {
            console.log('Error: ' + err);
            document.querySelector(".catFact").innerHTML =
                "😿" + "Sorry, vi kan inte hämta data just nu. Försök senare!" + " 😿";
     
        });
}//End function getRandomCatFacts();

/**
 * Håller reda på antaler knapptryckningar
 */
let count = 1;
function increment() {
    document.querySelector(".counting").innerHTML =
        "You have read " + count + " facts today!";
    count += 1;
}//End increment();

/**
 * Här är funktionen getKanyneQuotes
 */
function getKanyeQuotes() {
    fetch("https://api.kanye.rest")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let dataK = response;
            console.log(dataK);
            document.querySelector(".kayneQoutes").innerHTML =
                'Kanye says: "' + dataK.quote + '" 🙄';
        })
        .catch(function (err) {
            console.log("Error: " + err);
            document.querySelector(".kayneQoutes").innerHTML =
                '😵 Kayne is out! Try later... 😵';
        });
}

/**
 * Här är funktionen för knappanimation
 * Vi återanvänder vår buttonAnimation-function fråm projektet DrumKit
 * DRY = Don´t Repeat Yourself
 */
function buttonAnimation() {
    let activeButton = document.querySelector("#getNewCatFact");
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}