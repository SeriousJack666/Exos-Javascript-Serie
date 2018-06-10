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
    var valKey, word_s = "";;

    console.log("choice = "+choice);
    console.log("splittedChoice = "+splittedChoice);

    //Pour construire word à afficher, concaténer chaque valeur correspondant à chaque valKey entrée (mot correspondant au caractère numérique) traduit en fr
    for (var i = 0; i < splittedChoice.length; i++) {

        valKey = splittedChoice[i];

        console.log("valKey = "+ valKey);
        console.log("parseInt(valKey) = "+parseInt(valKey));

        if (valKey == ".") {
            word_s += "Virgule ";
        }
        else {
            word_s += brutalLexiq.unities[valKey]+" ";
        }
        console.log("constructeur de word = "+word_s);
    }
    return  word_s;
};





//Exo9__________________________________________________________________________
var exo9 = document.getElementsByClassName('exo')[8];





//Exo10__________________________________________________________________________
var exo10 = document.getElementsByClassName('exo')[9];





//Exo11__________________________________________________________________________
var exo11 = document.getElementsByClassName('exo')[10];

