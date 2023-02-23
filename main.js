let GenerateJokeElement=document.getElementById('GenerateJokeBtn')
let jokeContent=document.getElementById('jokeId')




function GenerateJoke(){
    let jokeApiLink='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    fetch(jokeApiLink)
    .then(res=>res.json())
    .then(data=>display(data))
}

function display(data){
    //check joke 
    if(typeof  data.joke==='undefined'){
        GenerateJoke()
    }else{
        jokeContent.innerText=data.joke
        console.log(data)
    }
 
}

//btn click than call function 
GenerateJokeElement.addEventListener('click',GenerateJoke)
// page reload than function auto call
GenerateJoke()
