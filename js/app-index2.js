//VIDEO SETTINGS (RTC RECORDER)
const video = document.querySelector('video');
let recorder;
let miGuif;
const gifConstraints = {
      type: 'gif',
      width: 384,
      height: 200,
      frameRate: 12,
      quality: 10
};
//CAMERA CONTAINER (BTNS & STATUS)
let captCont = document.querySelector('.capt-cont');
let captureBtn = document.getElementById('capture-btn'); 
let btnCam = document.getElementById('capture-btn-cam'); 
let camBtnCont = document.getElementById('cam-btn-cont');
    camBtnCont.style.justifyContent = 'flex-end';
//DESCRIPTION BAR (H3)
let checkH = document.getElementById('h3-check'); 
const abortBtn = document.createElement('input');
//READY TO POST VIDEO
const repeat = document.createElement('input');
const upload = document.createElement('input');
const succesGuif = document.getElementById('gfo-upload');
let camContainer =  document.querySelector('.cam-screen');
//FORM & SUCCES POST
let form = new FormData();
//TIMER
let timer = document.querySelector('.timer');
    timer.style.display = 'none';
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;

function pad(val) {
         valString = val + "";
         if(valString.length < 2) {
            return "0" + valString;
         } else {
            return valString;
         };
};
function setTime(minutesLabel, secondsLabel) {
         totalSeconds++;
         secondsLabel.innerHTML = pad(totalSeconds%60);
         minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
};
function set_timer() {
        my_int = setInterval(function() { 
           setTime(minutesLabel, secondsLabel)
        }, 1000);
};
function stop_timer() {
         clearInterval(my_int);
};

//FUNCTION VIDEO  
function getStreamAndRecord () { 
      navigator.mediaDevices.getUserMedia({
           audio: false,
           video: {
                  width: 384,
                  height:200,
                  frameRate: { ideal: 12},
                  facingMode: "user"
          }
         })
         .then(function(stream) {
            video.srcObject = stream;
            video.play();
            recorder = new GifRecorder(stream, gifConstraints);
      })
      .catch(err =>{
         console.log(err)
      })
};
getStreamAndRecord();

//MY BLOB FUNCTION
function miBlob (){
      recorder.stop(blob => { 
         miGuif = blob
      });
};

//---ONCLICK EVENTS & FUNCTIONS---
//CAPTURE
captCont.onclick = function() { 
      recording();
      set_timer();
}
//REPEAT BTN
repeat.onclick = function () {
      abort();
};
//UPLOAD BTN 
upload.onclick = function () { 
      uploadGfo();
      gifPost();
};
//ABORT
abortBtn.onclick = function () {
      abort();
};
//CAPTURE BTN
function recording () {
      recorder.record(
            console.log('grabando')
      );
      //changing text bar
      checkH.innerHTML = 'creando guifos';
      //remove classes
      camBtnCont.style.justifyContent = 'space-between';
      captureBtn.classList.remove('menu-bottom');
      btnCam.classList.remove('menu-bottom');
      btnCam.setAttribute('src', ('./assets/recording.svg'));
      //adding new classes
      captureBtn.classList.add('btn-ready');
      btnCam.classList.add('btn-ready-cam');
      captureBtn.value = 'Listo';
      timer.style.display = 'flex';
      
      //ok btn (boton listo)
      captCont.onclick = function() {
            ready();
            stop_timer();
      };      
};
//STOP RECORD --> SAVE RECORD ---> SHOW RECORD
function ready() {
      miBlob(
            console.log('video pausado')
      );

      video.style.display = 'none';
      videito.style.width = '100%';
      videito.controls;
      videito.src = URL.createObjectURL(miGuif);

      camContainer.appendChild(videito);
      sessionStorage.setItem('videaso', videito.src);
        
      //status camera container, preview, repeat & upload btn
      captureBtn.style.display = 'none';
      btnCam.style.display = 'none';
      captCont.classList.remove('capt-cont');
      checkH.innerHTML = 'vista previa';

      video.style.display = 'none';
                             
      repeat.setAttribute('type', 'button');
      repeat.value = 'repetir guifo';

      upload.setAttribute('type', 'button');
      upload.value = 'subir guifo';
      //giving class
      repeat.classList.add('repetir-style');    
      upload.classList.add('subir-style');  
      //assigning father
      camBtnCont.appendChild(repeat);
      camBtnCont.appendChild(upload);
};
//UPLOAD BTN FUNCTION
function uploadGfo() {
      const lastCont = document.createElement('div', 'class');
      const lastImg = document.createElement('img');
      const imgP = document.createElement('p');
      const barra = document.createElement('div');
      const colorB = document.createElement('div');
            colorB.setAttribute('class', 'color-b');  
      const lastP = document.createElement('p');
      const middleline = document.createElement('span');

      //removing btns
      repeat.remove();
      upload.remove();
      timer.remove();

      checkH.innerHTML = 'Subiendo Guifo';
      video.style.display = 'none';

      //creating new btn
      abortBtn.setAttribute('type', 'button');
      abortBtn.value = 'Cancelar';
      abortBtn.classList.add('menu-bottom', 'btn-cancelar');

      videito.style.display = 'none';

      imgP.innerText = 'Estamos subiendo tu guifo...';
      imgP.style.marginTop = '8px';
       
      barra.style.margin = '40px 0 10px';
      barra.style.display = 'flex';
      barra.style.alignItems = 'center'
                                                     
      lastP.innerText = 'Tiempo restante';
      lastP.style.display = 'inline-flex';
      lastP.style.color = 'rgba(17,0,56,0.64)';
                  
      middleline.innerText = '38 años';      
      middleline.style.textDecoration = 'line-through';
      
      lastCont.classList.add('globe-cont');
      lastImg.classList.add('globe');
      imgP.classList.add('img-p');
      barra.classList.add('background-bar');
      barra.style.width = '324px';
      
      camBtnCont.appendChild(abortBtn);
      camContainer.appendChild(lastCont);
      lastCont.appendChild(lastImg);
      lastCont.appendChild(imgP);
      lastCont.appendChild(barra);
      barra.appendChild(colorB);
      lastCont.appendChild(lastP);
      lastP.appendChild(middleline);
 
      formFunction();      
}; 
//FORM TO FETCH
function formFunction () {
      console.log('subiendo guifo')
      form.append('file', miGuif, 'myGif.gif');
      console.log(form.get('file')) ;
};
//ABORT FUNCTION  
function abort () {
      location = 'index2.html';
};
//POSTING FORM
async function gifPost() {
  
      fetch('https://upload.giphy.com/v1/gifs?api_key=' + apiKey + '&source_image_url=' + miGuif, {
            method: "POST",
            body: form,
      })
      .then(async res => {
            jsonRes = await res.json(); 
            hiddingLoading();

            return jsonRes;
      })
      .catch(error => 
            console.error('Error:', error)
      )
      .then(response => {
            saveGifInLocalStorage();
            checkingLocalStorage();
            console.log('Success:', response);
      });                   
};
//SAVING GIF ID IN LOCALSTORAGE
function saveGifInLocalStorage() {
      let time = new Date().getTime();
      let idGif = 'id gif ' + time;
      let idResponse = jsonRes.data.id;
      localStorage.setItem(idGif, JSON.stringify(idResponse));
};
//LOCALSTORAGE CONDITIONAL (checking & moving gifs from LS to array)
function checkingLocalStorage () { 
      (localStorage.length > 0)
      ? (
            Object.getOwnPropertyNames(localStorage).forEach(function(val) {
            let idVal = (localStorage[val]);
            imprimiendo.push(idVal.replace(/['"]+/g, ''));
            }), 
            gettingGifId() 
         )
      : console.log('no esta pusheando nada');
};

function gettingGifId (){ 
      imprimiendo.forEach(async function(val){
            let gifName = await val;
            console.log('estoy imprimiendo cada id del array del fetch "imprimiendo" ', gifName)
            const consultGuif = await fetch('https://api.giphy.com/v1/gifs/' + gifName + '?api_key=' + apiKey)
            .then(response => {
                  return response.json();
            })
            .catch(error => {
                  return error;
            })
            .then(res=> {
                  let rutaGif = res.data.images.original.url;
                  arrayfragment.unshift(rutaGif);
                  //arrayfragment.reverse();
                  return arrayfragment;
            });
                  
            gfoUploaded();

            return consultGuif;
      });
      misGfosSection();
      return arrayfragment;
};
//LAST STATUS
function gfoUploaded () {     
      const loadedImg = document.getElementById('succes-screen');
      loadedImg.appendChild(videito);

      videito.style.width = '100%';
      videito.style.display = 'flex';
      videito.controls;
      
      succesGuif.style.display = 'flex';
      console.log('gif subido con exito');
};
//HIDING LOADING STATUS
function hiddingLoading () {
      const statusSection = document.getElementById('making-gfs');      
      statusSection.style.display = 'none';
};
//MIS GUIFOS SECTION
function misGfosSection () {      
      //container & classes
      const misGfsCont = document.createElement('section');
            misGfsCont.setAttribute('class', 'mis-guifos');
            misGfsCont.classList.add('mis-guifos-btm');
            misGfsCont.id = 'my-gfs';
      //nav container (logo & menu btns)
            navCont.setAttribute('class', 'logo-arrow');
            navCont.classList.add('menu-cont'); 
      const vinculoUno = document.createElement('a');
            vinculoUno.href = 'index.html';
      const logo = document.createElement('div');
            logo.setAttribute('class', 'logo');
      //menu btn container
      const menuBtnsCont = document.createElement('div');
            menuBtnsCont.setAttribute('class', 'menu');
      //making guif btn
      const labell = document.createElement('label');
      const input = document.createElement('input');
            input.type = 'button';
            input.value = 'Crear Guifos';
            input.setAttribute('class', 'menu-bottom');
            input.addEventListener('click', createGfSecondClick);
      //dropdown menu
      const containerDropDwn = document.createElement('div');
            containerDropDwn.setAttribute('class', 'chose-topic menu-bottom dpdw-btn');
      const inputTheme = document.createElement('input');
            inputTheme.setAttribute('class', 'menu-bottom chose-themes-btn elegir-tema');
            inputTheme.type = 'button';
            inputTheme.value = 'Elegir tema';
      const arrowBtn = document.createElement('div');
            arrowBtn.setAttribute('class', 'chose-themes-btn arrow-theme dropdown-btn dpdw-btn');
      const ol = document.createElement('ol');
            ol.setAttribute('class', 'dropdown-menu');
      const li = document.createElement('li');
      const inputLi = document.createElement('input');
            inputLi.setAttribute('class', 'light-side');
            inputLi.type = 'button';
            inputLi.value = 'Sailor day';
      const liI = document.createElement('li');
      const inputLiI = document.createElement('input');
            inputLiI.setAttribute('class', 'dark-side');
            inputLiI.type = 'button';
            inputLiI.value = 'Sailor night';
      // mis guifos btn
            misGfsBtn.setAttribute('class', 'btn-mis-gfs');
            misGfsBtn.setAttribute('id', 'btn-mis-gfs');
      const p = document.createElement('p');
      const u = document.createElement('u');
            u.innerHTML = 'M';
            p.innerHTML = 'is Guifos';
            
            document.querySelector('body').appendChild(misGfsCont);
            misGfsCont.appendChild(navCont);
            //logo back
            navCont.style.display = 'none';
            navCont.appendChild(vinculoUno);
            vinculoUno.appendChild(logo);
            navCont.appendChild(menuBtnsCont);
            menuBtnsCont.appendChild(labell);
            menuBtnsCont.appendChild(containerDropDwn);
            menuBtnsCont.appendChild(misGfsBtn);

            labell.appendChild(input);
            containerDropDwn.appendChild(inputTheme);
            containerDropDwn.appendChild(arrowBtn);
            containerDropDwn.appendChild(ol);

            ol.appendChild(li);
            ol.appendChild(liI);

            li.appendChild(inputLi);
            liI.appendChild(inputLiI);

            misGfsBtn.appendChild(u);
            misGfsBtn.appendChild(p);

            galery(misGfsCont);
            switching();
};
//GALERIA DE GUIFS
function galery (misGfsCont) {
      //subcontainer & classes
      const misGfosSubCont = document.createElement('div'); 
            misGfosSubCont.setAttribute('class', 'mis-guifos-container');
      //input bar & classes
      const label = document.createElement('label');
      const inputBar = document.createElement('input', 'text');
            inputBar.placeholder = 'mis guifos';
            inputBar.readOnly = true;
      //gallery gfs container
      const galleryGfsCont = document.createElement('div');
            galleryGfsCont.setAttribute('class', 'gallery-gfs');
      //gallery gfs subcontainer    
      const galleryGfsSubCont = document.createElement('div');
            galleryGfsSubCont.setAttribute('class', 'container2 img-father');
            galleryGfsSubCont.style.width = '100%';
            galleryGfsSubCont.style.height = 'auto';

            misGfsCont.appendChild(misGfosSubCont);
            misGfosSubCont.appendChild(label);
            misGfosSubCont.appendChild(galleryGfsCont);
            label.appendChild(inputBar);
            galleryGfsCont.appendChild(galleryGfsSubCont);
        
      setTimeout(function(){
            renderizing();
            console.log('respuesta retrasada');
      }, 1000);
};
//ASSIGNING URL TO EVERY IMG SRC
function renderizing (){ 
      i = 1;         // FUÉ UNA TORTURA...PERO POR FIN TERMINE LA SECCIÓN MIS GUIFOS!!! WOOOH!!!
      arrayfragment.forEach(element => {
            console.log('creando el fragment del array');

            const dadContainer = document.querySelector('.img-father');
                  dadContainer.style.justifyContent = 'space-between';
            //img container
            const imgCont = document.createElement('div');
                  imgCont.setAttribute('class', 'img-container');
                  imgCont.setAttribute('id', 'img-id');
                  imgCont.style.margin = '9px 0';
            //img
            const img = document.createElement('img');
                  img.src = element;
                  console.log('url del nuevo gif ', img.src);
            //description
            const descrip = document.createElement('div');
                  descrip.setAttribute('class', 'description');
            //paragraph
            const p = document.createElement('p');
                  p.innerText = '# gif nro ' +  i++;
                  
                  dadContainer.appendChild(imgCont);
                  imgCont.appendChild(img);
                  imgCont.appendChild(descrip);
                  descrip.appendChild(p);  
        });
};
//MIS GUIFOS BTN ONCLICK HTML
function misGfsSectionLS() {
      checkingLocalStorage();
      //hidding();
      switching();
      //setting header
      document.getElementById('header-ctnr').style.padding = '30px 0 14px';
      //hidding
      document.querySelector('.results').style.display = 'none' ;
      //btn disabled
      document.getElementById('btn-mis-gfs').onclick = null; 
      //searching bar
      document.querySelector(".search-container").style.display = 'none';
      //main
      document.getElementById("main-galery").hidden = true; 
};
//ONCLICK HTML(listo btn)
function okMyGif () {
      succesGuif.style.display = 'none';
      navCont.style.display = 'flex';
};
//COPY GUIF
function copyGif() {
      let miGuifUrl = arrayfragment[0];
      navigator.clipboard.writeText(miGuifUrl, console.log('url copiada'));
      alert('guifo copiado');
      console.log('guifo copiado', miGuifUrl);
};
//DOWNLOAD GUIF
function downloadGif () {
      let miGuifur = sessionStorage.getItem('videaso');
      document.getElementById('download').href = miGuifur;
      console.log('descargando guifo');
};
//CREATE GUIF BTN(from my gfs)
function createGfSecondClick (){
      console.log('se muestra otra vez el box crear');
      document.getElementById("my-gfs").style.display = 'none';
      creatingBox();
  };