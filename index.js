// console.log('Hello world!')

//https://api.thecatapi.com/v1/images/search

const TOKEN = 'live_Rea2xLZ0Q7wXQVGVD72kqZ0ZUhksaYBbhy24AzInXRtqwiUAVHitbpq4McGgc2hW'
const catImageDiv = document.getElementById('catImageDiv')
const catImage = document.getElementById('catImage')

const getCuteKitty = () => {
    fetch('https://api.thecatapi.com/v1/images/search/?limit=2&api_key=${TOKEN}')
    .then(response => response.json())
    .then(json => {
        console.log(json[0]) //an array
        console.log('helo') 

        // catImageDiv.innerHTML = `<img src='${json[0].url}'>`
        catImage.src = json[0].url
    })
}


//  <br> <p>${json[0]}</p>    width="400px" height="400px"