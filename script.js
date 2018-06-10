//Exo1_________________________________________________________________________
var exo1 = document.getElementsByClassName('exo')[0], champ1, champ2, bouton1;

champ1 = document.createElement('INPUT');
champ2 = document.createElement('INPUT');
bouton1 = document.createElement('BUTTON');

champ1.setAttribute('value', 'Ici');
champ2.setAttribute('value', 'Et pi là aussi');

exo1.appendChild(champ1);
exo1.appendChild(champ2);
exo1.appendChild(bouton1);


champ1.addEventListener('click', event =>{
   champ1.value="";
});
champ2.addEventListener('click', event =>{
    champ2.value="";
});
bouton1.addEventListener('click', event =>{
    var newP = document.createElement('P'),
        result = champ1.value*champ2.value,
        textToWrite = document.createTextNode(champ1.value+" x "+champ2.value+" = "+result);

    newP.appendChild(textToWrite);
    exo1.appendChild(newP);

    champ1.value="Ici";
    champ2.value="Et pi là aussi";
});




//Exo2__________________________________________________________________________
var exo2 = document.getElementsByClassName('exo')[1], colorBackgrd = 'white', champText2, bouton2;

champText2 = document.createElement('INPUT');
bouton2 = document.createElement('BUTTON');

champText2.setAttribute('value', 'Your Color');

exo2.appendChild(champText2);
exo2.appendChild(bouton2);


champText2.addEventListener('click', event =>{
    champText2.value="";
});
bouton2.addEventListener('click', event =>{
    var colorChoosed = champText2.value;

    exo2.style.backgroundColor = colorChoosed;
    champText2.value = "Your Color"
});




//Exo3__________________________________________________________________________
var exo3 = document.getElementsByClassName('exo')[2], champText3, bouton3;

champText3 = document.createElement('INPUT');
bouton3 = document.createElement('BUTTON');

champText3.setAttribute('value', ' img/.. .jpg  ou  Lien');

exo3.appendChild(champText3);
exo3.appendChild(bouton3);

champText3.addEventListener('click', event =>{
    champText3.value="";
});
bouton3.addEventListener('click', event =>{
    var adresse = champText3.value, newImage;

    newImage = document.createElement('IMG');
    newImage.src = adresse;
    newImage.style.minHeight = "auto";
    newImage.style.minWidth = "25%";
    exo3.appendChild(newImage);

    //Contrôle du chargement de l'image proposée
    var onloadCallback = function(){
        newImage.style.display="block";
    };
    var onerrorCallback = function(){
        newImage.style.display ="none";
    };
    newImage.onload = onloadCallback;
    newImage.onerror = onerrorCallback;


    champText3.value = " ex =   img/.. .jpg   ou   lien https";
});





//Exo4__________________________________________________________________________
var exo4 = document.getElementsByClassName('exo')[3], champText4, bouton4;

champText4 = document.createElement('INPUT');
bouton4 = document.createElement('BUTTON');

champText4.setAttribute('value', 'Your Number');

exo4.appendChild(champText4);
exo4.appendChild(bouton4);

champText4.addEventListener('click', event =>{
    champText4.value="";
});
bouton4.addEventListener('click', event =>{
    var newP4, result, textToWrite;
    newP4 = document.createElement('P');
    result = champText4.value % 5;
    textToWrite = document.createTextNode("Si l'on divise "+champText4.value+" par 5, le reste est de "+result);

    newP4.appendChild(textToWrite);
    exo4.appendChild(newP4);

    champText4.value = "Your Number";
});





//Exo5__________________________________________________________________________
var exo5 = document.getElementsByClassName('exo')[4], champText5, bouton5;

champText5 = document.createElement('INPUT');
bouton5 = document.createElement('BUTTON');

champText5.setAttribute('value', 'Your Age');

exo5.appendChild(champText5);
exo5.appendChild(bouton5);


champText5.addEventListener('click', event =>{
    champText5.value="";
});
bouton5.addEventListener('click', event =>{
    var newP5, result, textToWrite;

    newP5 = document.createElement('P');
    result = champText5.value * 365;
    textToWrite = document.createTextNode("Vous avez vécu "+result+" jours" );

    newP5.appendChild(textToWrite);
    exo5.appendChild(newP5);

    champText5.value = "Your Age"
});




//Exo6__________________________________________________________________________
var exo6 = document.getElementsByClassName('exo')[5], champText6_1, champText6_2, bouton6;

champText6_1 = document.createElement('INPUT');
champText6_2 = document.createElement('INPUT');
bouton6 = document.createElement('BUTTON');

champText6_1.setAttribute('value', 'Your Age');
champText6_2.setAttribute('value', 'Your targeted Futur');

exo6.appendChild(champText6_1);
exo6.appendChild(champText6_2);
exo6.appendChild(bouton6);


champText6_1.addEventListener('click', event =>{
    champText6_1.value="";
});
champText6_2.addEventListener('click', event =>{
    champText6_2.value="";
});
bouton6.addEventListener('click', event =>{
    var newP6, result, textToWrite;

    newP6 = document.createElement('P');

    if (parseInt(champText6_1.value) >= parseInt(champText6_2.value)){

        textToWrite = document.createTextNode("Your futur is ahead, not behind.. Try again");

        newP6.appendChild(textToWrite);
        exo6.appendChild(newP6);
    }
    else if ((champText6_1.value=="" || champText6_1.value=="Your Age" ) || (champText6_2.value=="" || champText6_2.value=="Your targeted Futur")){
        textToWrite = document.createTextNode("Remplis bien les 2 champs");

        newP6.appendChild(textToWrite);
        exo6.appendChild(newP6);
    }
    else {
        result = (champText6_2.value - champText6_1.value) * 365;
        textToWrite = document.createTextNode("Vous avez vécu " + champText6_1.value*365 + " jours. Bravo! Il y a encore " + result + " jours avant vos " + champText6_2.value + " ans!!");

        newP6.appendChild(textToWrite);
        exo6.appendChild(newP6);
    }

    champText6_1.value = "Your Age";
    champText6_2.value = "Your targeted Futur";
});



//Exo7__________________________________________________________________________
var exo7 = document.getElementsByClassName('exo')[6], bouton7;

bouton7 = document.createElement('BUTTON');

exo7.appendChild(bouton7);

bouton7.addEventListener('click', (event) => {
        var  smileyUp = new Image(), smileyDown = new Image(), newImage, imagesDisplayed, lastResult;

        smileyUp.src = "https://icon2.kisspng.com/20180328/tsw/kisspng-thumb-signal-job-clip-art-thumb-up-5abc4493a4e935.5684640015222877636755.jpg";
        smileyUp.alt = "Thumb signal Job Clip art - thumb up @kisspng";

        smileyDown.src = "https://icon2.kisspng.com/20180519/irs/kisspng-butt-head-beavis-daria-morgendorffer-animated-seri-5b00d91f8ee976.5620201715267822395854.jpg";
        smileyDown.alt = "Butt-head Beavis Daria Morgendorffer Animated series Television - others @kisspng";

        newImage = document.createElement('IMG');
        newImage.style.minHeight = "auto";
        newImage.style.minWidth = "80%";
        newImage.style.margin = "20px 10%";
        newImage.style.alignSelf = "center";

        exo7.appendChild(newImage);

        imagesDisplayed = document.getElementsByTagName('IMG');
        lastResult = confirm('Oui ou Non ?');

        if (lastResult == true){
            newImage.src = smileyUp.src;
            for (var i=0; i<imagesDisplayed.length-1; i++){
                imagesDisplayed[i].style.display = "none";
            }
        }
        else {
            newImage.src = smileyDown.src;
            for (var i=0; i<imagesDisplayed.length-1; i++){
                imagesDisplayed[i].style.display = "none";
            }
        }
});





//Exo8__________________________________________________________________________
var exo8 = document.getElementsByClassName('exo')[7], brutalLexiq = new Object(), champText8, bouton8;


//Dans le but qu'un jour, ça serve à quelque-chose________
brutalLexiq = {sep: {".": "virgule"}, unities: {0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq", 6: "six", 7: "sept", 8: "huit", 9: "neuf"}, dozens: {11: "onze", 12: "douze", 13: "treize", 14: "quatorze", 15: "quinze", 16: "seize"}, factor10: {10: "dix", 20: "vingt", 30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante"}, factor100: {100: "cent", 1000: "mille", 1000000: "million", 1000000000: "milliard"}};


/*Ecriture des éléments dans le DOM*/

champText8 = document.createElement('INPUT');
bouton8 = document.createElement('BUTTON');
champText8.setAttribute('value', 'Your choice, use a dot for floats');
exo8.appendChild(champText8);
exo8.appendChild(bouton8);


/*Accrochages d'events aux clics*/

champText8.addEventListener('click', event => {
    champText8.value = "";
});
bouton8.addEventListener('click', event => {
    var choice = champText8.value, splittedChoice =  choice.split(""), newP8, word_s, textToWrite;

    if (choice<0 || choice>5) {
        alert('Tu as pourtant 5000000 possibilités de tomber juste');
    }
    else if (choice == ""|| choice == "Your choice, use a dot for floats"){
        alert("C'mon Man");
    }
    else if (isNaN(choice)) {
        alert("chiffres\nET/OU\npoint");
    }
    else {
        newP8 = document.createElement('P');

        word_s = translateToFr(choice, splittedChoice, brutalLexiq);

        textToWrite = document.createTextNode(word_s);
        newP8.appendChild(textToWrite);
        exo8.appendChild(newP8);
    }
    champText8.value = "Your choice, use a dot for floats";
});


/*Fonction 'Transcription d'input numérique en français'*/

function translateToFr(choice, splittedChoice, brutalLexiq) {
    var valKey, word_s = "";

    //Pour construire word à afficher, concaténer chaque valeur correspondant à chaque valKey entrée (mot correspondant au caractère numérique) traduit en fr
    for (var i = 0; i < splittedChoice.length; i++) {

        valKey = splittedChoice[i];


        if (valKey == ".") {
            word_s += "Virgule ";
        }
        else {
            word_s += brutalLexiq.unities[valKey]+" ";
        }
    }
    return  word_s;
};





//Exo9__________________________________________________________________________
var exo9 = document.getElementsByClassName('exo')[8], champText9, bouton9, newDiv9, newUl9;

champText9 = document.createElement('INPUT');
bouton9 = document.createElement('BUTTON');
newDiv9 = document.createElement('DIV');
newUl9 = document.createElement('UL');

champText9.setAttribute('value', 'Next most important thing');
newDiv9.setAttribute('class', 'shopList');

exo9.appendChild(champText9);
exo9.appendChild(bouton9);
newDiv9.appendChild(newUl9);
exo9.appendChild(newDiv9);


champText9.addEventListener('click', ev => {
   champText9.value = "";
});
bouton9.addEventListener('click', (event) => {
    if (champText9.value != "" && champText9.value != "More more more" && champText9.value != "Next most important thing") {
        var newLI9 = document.createElement('LI'),
            ajout = champText9.value;
        textToWrite = document.createTextNode(ajout);

        newLI9.appendChild(textToWrite);
        newUl9.appendChild(newLI9);

        champText9.value = "More more more";
    }
    else {
        champText9.value = "Next most important thing";
    }
});






//Exo10 et 11__________________________________________________________________________
var exo10 = document.getElementsByClassName('exo')[9], labelInput, labelToWrite,champText10_1, consigne, consigneToWrite,  champText10_2,  bouton10_1, bouton10_2;

labelInput = document.createElement('LABEL');
labelToWrite = document.createTextNode('La taille de ton univers est de : ');
champText10_1 = document.createElement('INPUT');
bouton10_1 = document.createElement('BUTTON');
consigne = document.createElement('P');
consigneToWrite = document.createTextNode("Trouve le hotspot avant de changer de taille d'univers");
champText10_2 = document.createElement('INPUT');
bouton10_2 = document.createElement('BUTTON');

champText10_1.setAttribute('value', 100);
champText10_2.setAttribute('value', 'Choose well');

exo10.appendChild(labelToWrite);
exo10.appendChild(labelInput);
exo10.appendChild(champText10_1);
exo10.appendChild(bouton10_1);
consigne.appendChild(consigneToWrite);
exo10.appendChild(consigne);
exo10.appendChild(champText10_2);
exo10.appendChild(bouton10_2);


var uDefault = 100, hotSpotDefault = Math.floor(Math.random()*Math.floor(uDefault)), universe, hotSpot;

champText10_1.addEventListener('click', ev => {
    champText10_1.value = "";
});
bouton10_1.addEventListener('click', ev => {
    var lastU = champText10_1.value;

    if (lastU == "" || (lastU != "" && isNaN(lastU)) || lastU == 0){
        universe = uDefault;
        hotSpot = hotSpotDefault;
    }
    else {
        universe = champText10_1.value;
        hotSpot = Math.floor(Math.random()*Math.floor(universe));
    }
    champText10_1.value = universe;

    console.log('universe = '+universe);
    console.log(buildMarginGuides(universe));
    console.log('hotSpot = ' +hotSpot);
});


var buildMarginGuides = function (universe) {
    var tooFar = universe*(4/5),
        farCloser = universe*(3/5),
        closeFar = universe*(2/5),
        soClose = universe*(1/5);
    return [soClose, closeFar, farCloser, tooFar];
};


champText10_2.addEventListener('click', ev => {
    champText10_2.value = "";
});
bouton10_2.addEventListener('click', ev => {
    var universe = champText10_1.value, choice = champText10_2.value, totalClick = 0,
        howFar = Math.abs(hotSpot-choice);

    var marginGuides = buildMarginGuides(universe),
        soClose = marginGuides[0],
        closeFar = marginGuides[1],
        farCloser = marginGuides[2],
        tooFar = marginGuides[3];

    console.log('____________________');
    console.log('universe = '+universe);
    console.log(marginGuides);
    console.log('hotSpot = ' +hotSpot);
    console.log('choice ='+choice);
    console.log('howFar ='+howFar);
    
    
    if (choice == "" || isNaN(choice)){
        alert("Un nombre entier. Fais pas le malin, ou on arrondit le jeu aux centièmes");
    }
    else if (choice > universe || choice < 0){
        alert("Si tu vises hors-cible, tu ne risques pas de toucher...");
    }
    else {
        totalClick += 1;

        if (howFar == 0){
            alert('gagné');
            console.log('gagné');
        }
        else if (howFar > 0 && howFar <= soClose){
            alert('Brûlant!');
        }
        else if (howFar > soClose && howFar <= closeFar){
            alert('Chaud');
        }
        else if (howFar > closeFar && howFar <= farCloser){
            alert('Plus chaud que froid');
        }
        else if (howFar > farCloser && howFar <= tooFar){
            alert('Plus froid que chaud');
        }
        else if (howFar > tooFar){
            alert('Glacé!');
        }

        /*if (howFar > tooFar){
            alert('Glacé!');
            console.log('glacé');
        }
        else if (tooFar >= howFar > farCloser){
            alert('Plus froid que chaud');
            console.log('froid2');

        }
        else if (farCloser > howFar >= closeFar){
            alert('Plus chaud que froid');
            console.log('froid 1');

        }
        else if (closeFar > howFar >= soClose){
            alert('Chaud');
            console.log('chaud');

        }
        else if (soClose > howFar > 0){
            alert('Brûlant!');
            console.log('brûlant');

        }
        else {
            alert('Gagné en '+totalClick+' coups!!!!!');
            console.log('gagné');

        }*/
    }
    champText10_2.value = "Choose well";
});





