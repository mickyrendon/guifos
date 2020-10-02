//API'S CONST
const apiKey = 'kSlL2jxqguJWiR66SZXlQmklukboURZt';
const limit = '&limit=20&';
const rating = '&rating=G';
const searchKey = '&q=' ;
//THEME PATHS
const light = './styles/light-style.css';
const dark = './styles/dark-style.css';
//MENU BTNS CONTAINER
navCont = document.createElement('div');
//SEARCHING SUGGESTIONS LIST
let inputSrch = document.querySelector(".input-search");
//(it saves values from input search & suggest list buttons)
let inputValue = "";
const srchBtn = document.querySelector(".searching-button", "oninput-searching-btn");
const suggestBar = document.querySelector(".searching-suggest");
//CLEANING INPUT FUNCTION
const body = document.getElementById('body');
//SUGGEST LIST 
const cats = document.getElementById('cats');
const dogs = document.getElementById('dogs');
const horse = document.getElementById('horses');   
//RESULTS VAR
let imgResults = document.getElementsByClassName('results-img');
let hashtagRes = document.querySelectorAll('.results .tendences-gallery .description p');
//LOCALSTORAGE ARRAY
let imprimiendo = [];
//LOCALSTORAGE FETCH ARRAY
let arrayfragment = [];
//SESSIONSTORAGE CHECKING
function checkingTheme() {
    let change = sessionStorage.getItem("theme mode");

    (change === light || change === null) 
    ? (document.querySelector('.style').href = light, console.log('checkeando el tema'))
    : document.querySelector('.style').href = dark;
};
checkingTheme();

//LOCALSTORAGE GIF / MIS GUIFOS BTN
let videito = document.createElement('img', 'src');
const misGfsBtn = document.createElement('div');

//---------------HEADER----------------

//TO CREATE GUIF BTN
let clickCreate = document.getElementById('crear-gfo');
//clickCreate.onclick = 
function createClick () {
    creatingBox();
    createBtn();
};
clickCreate.addEventListener('click', createClick)
//CREATING 'CREAR GUIFOS BOX'
function creatingBox () {

    const createSection = document.createElement('section');
          createSection.setAttribute('class', 'crear-guifos-intro');
          createSection.setAttribute('id', 'making-gfs-window');
          createSection.style.display = 'block';
    //nav (back btn)
    const subheader = document.createElement('div');
          subheader.setAttribute('class', 'subheader');
    const logoArrow = document.createElement('div');
          logoArrow.setAttribute('class', 'logo-arrow');
    const arrowBack = document.createElement('a');
          arrowBack.href = 'index.html';
    const arrowImg = document.createElement('img');
          arrowImg.setAttribute('class', 'arrow-back');
          arrowImg.setAttribute('alt', 'back');
          arrowImg.src = './assets/arrow.svg';
    const divLink = document.createElement('a');
          divLink.href = 'index.html';
    const divLogo = document.createElement('div');
          divLogo.setAttribute('class', 'logo');
    //to create guifs box
    const stepsCont = document.createElement('div');
          stepsCont.setAttribute('class', 'steps-container');
    const subTitle = document.createElement('h3');
          subTitle.innerText = 'Crear Guifos';  
    //content box
    const stepsSubCont = document.createElement('div');
          stepsSubCont.setAttribute('class', 'steps');
    const windowImg = document.createElement('img');
          windowImg.setAttribute('class', 'window-img');
          windowImg.setAttribute('alt', 'window-img');
          windowImg.src = './assets/window_img.png';
    //content box(list)
    const steplist = document.createElement('div');
          steplist.setAttribute('class', 'step-list');
    const subSubTitle = document.createElement('h4');
          subSubTitle.innerText = 'Aquí podrás crear tus propios guifos'; 
    const breakOne = document.createElement('br');           
    const breakTWo = document.createElement('br');  
    const textLine = document.createElement('p');
          textLine.innerText = 'Crear tu guifo es muy fácil, graba cualquier imagen con tu cámara y obtén guifos personalizados. Los pasos para crear tu guifo son:';
    const OrgList = document.createElement('ol');
    const li = document.createElement('li');
          li.innerText = 'Dar permisos de acceso a la cámara (sólo por el tiempo de uso)'
    const liOne = document.createElement('li');
          liOne.innerText = 'Capturar tu momento guifo'
    const liTwo = document.createElement('li');
          liTwo.innerText = 'Revisar el momento'
    const liThree = document.createElement('li');
          liThree.innerText = 'Listo para subir y compartir!';
    const Qtext = document.createElement('p');
          Qtext.innerText = '¿Quieres comenzar a crear tu guifo ahora?';
    //btns
    const btnsCont = document.createElement('div');
          btnsCont.setAttribute('class', 'buttons-container');
    const btnsCancel = document.createElement('input');
          btnsCancel.type = 'button';
          btnsCancel.value = 'Cancelar';
          btnsCancel.setAttribute('class', 'menu-bottom btn-cancelar');
          btnsCancel.setAttribute('id', 'making-gfs-cancelar');
    const btnsStart = document.createElement('input');
          btnsStart.type = 'button'; 
          btnsStart.value = 'Comenzar';
          btnsStart.setAttribute('class', 'menu-bottom');
          btnsStart.setAttribute('id', 'comenzar');

    //assigning father
    //section
    document.querySelector('body').appendChild(createSection);
    createSection.appendChild(subheader);
    createSection.appendChild(stepsCont);
    //subheader
    subheader.appendChild(logoArrow);
    logoArrow.appendChild(arrowBack);
    arrowBack.appendChild(arrowImg);
    logoArrow.appendChild(divLink);
    divLink.appendChild(divLogo);
    //box
    stepsCont.appendChild(subTitle);
    stepsCont.appendChild(stepsSubCont);
    //box content(list)
    stepsSubCont.appendChild(windowImg);
    stepsSubCont.appendChild(windowImg);
    stepsSubCont.appendChild(steplist);
    //list & text
    steplist.appendChild(subSubTitle);
    steplist.appendChild(breakOne);
    steplist.appendChild(breakTWo);
    steplist.appendChild(textLine);
    steplist.appendChild(OrgList);
    steplist.appendChild(Qtext);
    steplist.appendChild(btnsCont);
    //ol
    OrgList.appendChild(li);
    OrgList.appendChild(liOne);
    OrgList.appendChild(liTwo);
    OrgList.appendChild(liThree);
    //btns
    btnsCont.appendChild(btnsCancel);
    btnsCont.appendChild(btnsStart);

    //btns events
    btnsCancel.onclick = function() { 
        location = 'index.html';
    console.log('esta funcionando')
  };
    btnsStart.onclick = function() { 
        location = 'index2.html';
  };
};
//(hidding main section & result section)
function createBtn () {
    const main = document.getElementById("main-galery");
        main.hidden = true;
   
    document.getElementById("header-ctnr").style.display = 'none';
    //results section
    document.getElementById("res").style.display = 'none';

    const myGfsSection = document.getElementById("my-gfs");
    (myGfsSection)
    ? myGfsSection.style.display = 'none'
    : console.log();
};

//MENU DROPDOWN
function dropdown() {
    const estado = document.querySelector('.dropdown-menu');
    (estado.style.display === 'none')
    ? estado.style.display = 'block'
    : estado.style.display = 'none';  
};

//MENU DROPDOWN (list)
function switching() {
    //dropdown menu with event
    document.querySelector('.dpdw-btn').addEventListener('click', dropdown);
    //dropdown list
    document.querySelector('.dropdown-menu').style.display = 'none';
        
    settingThemeSessionStorage();
};    
switching();
       
//SAVING THEME IN SESSION STORAGE
function settingThemeSessionStorage () { 
    //switch themes Btns - entra por el fichero y no pasa por el html
    const modoLight = document.querySelector('.light-side');
    const modoNight = document.querySelector('.dark-side');

    modoLight.addEventListener('click', (e) => {
         const lightMode = document.querySelector('.style').href = light;
         sessionStorage.setItem('theme mode', lightMode);
         console.log('modo día');
    });
                
    modoNight.addEventListener('click', (e) => {
         const nightMode = document.querySelector('.style').href = dark;
         sessionStorage.setItem('theme mode', nightMode);
         console.log('modo noche');
    });
};

//SEARCH BTN & INPUT (it changes the btn search color & shows the search-bar suggestions)
function searchBtnEffect() {
    (inputValue.length < 2)
    ? (srchBtn.classList.remove("oninput-searching-btn"), suggestBar.style.display = 'none')
    : (srchBtn.classList.add("oninput-searching-btn"), suggestBar.style.display = 'flex');
};

//SECTION RESULTS FUNCTION
 function responseSection () {
    document.getElementById("main-galery").hidden = true; 
    document.querySelector('.results').style.display = 'block';
 };

//ALLOWS SEARCHING WITH ENTER & SEARCH BTN
function busquedaBtn () { 
    searchingAnswer();
    document.getElementById("main-galery").hidden = true;
    document.querySelector('.results').style.display = 'block';
    document.getElementById('txt-input').value = 'el resultado de tu busqueda: ' + inputValue;
    console.log('estoy imprimiendo ' + inputValue);
};

//SEARCH BTN CONDITIONAL
let clicking =  srchBtn.addEventListener('click', function(event){
    (inputValue.length >= 2) 
    ? busquedaBtn()
    : alert('digite dos o mas caracteres para hacer la busqueda');
});

//SUGGEST LIST SEARCHING EVENTS & FUNCTIONS
let arrayOptions = [
    cats,
    dogs,
    horse
];

cats.addEventListener('click', click);
dogs.addEventListener('click', clickOne);
horse.addEventListener('click', clickTwo);
        
function click () {
    (arrayOptions[0])
    //?(  val = arrayOptions[0].innerText, document.getElementById('txt-input').value = 'el resultado de ' + val)
    ?(inputValue = arrayOptions[0].innerText, document.getElementById('txt-input').value = 'el resultado de ' + inputValue)
    : console.log('falso el elemento 0');
    console.log('clickeando la busqueda ', inputValue);

    searchingAnswer();
    responseSection();
    searchBtnEffect();
};
function clickOne () {
    (arrayOptions[1])
    ? (inputValue = arrayOptions[1].innerText, document.getElementById('txt-input').value = 'el resultado de ' + inputValue)
    : console.log('falso el elemento 1');
    console.log('clickeando la busqueda ', inputValue);
    
    searchingAnswer();
    responseSection();
    searchBtnEffect();
};
function clickTwo () {
    (arrayOptions[2])
    ? (inputValue = arrayOptions[2].innerText, document.getElementById('txt-input').value = 'el resultado de ' + inputValue)
    : console.log('falso el elemento 2'); 
    console.log('clickeando la busqueda ', inputValue);
    
    searchingAnswer();
    responseSection();
    searchBtnEffect();
};

//SEARCH FUNCTION
function searching() {
    inputValue = inputSrch.value.trim();//OR
    searchBtnEffect();
};

//HIDINGSUGGESSTLIST
body.addEventListener('click', hidingSuggestList);
function hidingSuggestList(){
    suggestBar.style.display = 'none';
    inputSrch.value = "";

    srchBtn.classList.remove("oninput-searching-btn")
}; 

//ENTER FUNCTION
document.querySelector('.results').style.display = 'none';
function enter () { 
    inputSrch.addEventListener("keyup", function(event) {
            
        if(event.keyCode === 13) { 
            srchBtn.click();
        }; 
    });
};
enter();

//SEARCHING FETCH (input search & suggest list buttons)
async function lookingForGifs() {
    const  searchingQuery = await fetch('https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + searchKey + inputValue + limit + '&offset=0' + rating + '&lang=en')
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        })
    return searchingQuery;
  };
  
async function searchingAnswer() {
    let resultsGfs = await lookingForGifs();
  
    for (let ubication = 0; ubication < imgResults.length; ubication++) { 
        let arrayResults = resultsGfs;
  
        imgResults[ubication].setAttribute('src', arrayResults.data[ubication].images.original.url);
        hashtagRes[ubication].innerHTML = hashtagCreator(arrayResults.data[ubication].title.slice(0, 12));
    };
    searching();
  }; 
searchingAnswer();
      
//HASHTAG FUNCTION
function hashtagCreator(stringToConvert) {
    let finalString = '';
    let index = stringToConvert.indexOf(' ');

    while(index !== -1) {
        finalString = finalString + stringToConvert.slice(0, index);
        stringToConvert = stringToConvert.slice(index + 1);
        index = stringToConvert.indexOf(' ');
    };
    return '#' + finalString + stringToConvert;
};

//RANDOM GIFS SUGGESTIONS
async function getRandomGif() {
    const consultRandom = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&rating=G')
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        })
    return consultRandom;
};

async function loadRandomGif() {
    const suggestionImg = document.querySelectorAll('.suggest .suggest-img-container img');
    const suggestionHashtag = document.querySelectorAll('.suggest .description p');
    
    for (let i = 0; i < suggestionImg.length; i++) {
        const gif = await getRandomGif();

        suggestionImg[i].setAttribute('src', gif.data.images.downsized.url);
        suggestionHashtag[i].innerHTML = hashtagCreator(gif.data.title);
        
    };
    for (let i = 0; i < imgResults.length; i++) {
        const giff = await getRandomGif();

        imgResults[i].setAttribute('src', giff.data.images.downsized.url);
        hashtagRes[i].innerHTML = hashtagCreator(giff.data.title.slice(0, 12));
    };
};
loadRandomGif(); 

// SEE MORE BTNS 
function seeMore () {
    let seeMoreBtn = document.getElementsByClassName('see-more');

    for(let i = 0; i < seeMoreBtn.length; i++){
        seeMoreBtn[i].addEventListener('click', (evento) => {
           console.log('estoy clickeando en see more', seeMoreBtn);
            
           responseSection()
           document.getElementById('txt-input').value = 'el resultado de "ver mas"... ';
        });
    };
};
seeMore();

//TRENDING  GIFS 
async function trenddingPetition() {
    let queryTrend = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey + limit + rating);
    let queryTrendJson = await queryTrend.json();
    return queryTrendJson.data;
};

async function gifsAssignment() {
    let trendImg = document.getElementsByClassName('tendences-img');
    let hashtagDesc = document.querySelectorAll('.tendences-gallery .description p');
    let misGifs = await trenddingPetition();
  
    for (let ubication = 0; ubication < trendImg.length; ubication++) {
        let unGif = misGifs;
        let gifHashtag = unGif;
        
        trendImg[ubication].setAttribute('src', unGif[ubication].images.original.url);
        hashtagDesc[ubication].innerHTML = hashtagCreator(gifHashtag[ubication].title.slice(0, 12));
    };
}; 
gifsAssignment();
