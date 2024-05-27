let data;
let textbox;
let chosen;
let lives;

let lifeDisplay;

let keys;

function preload() {data = loadTable("data/most_common_transcribed_words.csv", "csv")}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    textbox.position(width*3/10, height/3);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('Roboto');

    textbox = createInput("");
    textbox.addClass("textbox");
    textbox.position(width*3/10, height/2 - 40);

    textbox.elt.addEventListener("keydown", function(event) {

        //b/c otherwise lose CTRL + SHIFT + I
        if(event.shiftKey && event.ctrlKey && event.keyCode == 73) {}

        else if(event.shiftKey && event.altKey) {
            if(event.keyCode == 69) insertChar(event, this, "ɝ");

        } else if(event.shiftKey) {
            switch(event.keyCode) {
                case 84: insertChar(event, this, "θ"); break;
                case 83: insertChar(event, this, "ʃ"); break;
                case 74: insertChar(event, this, "ʒ"); break;
                case 78: insertChar(event, this, "ŋ"); break;
                case 76: insertChar(event, this, "ɫ"); break;
                case 82: insertChar(event, this, "ɹ"); break;
                case 69: insertChar(event, this, "ə"); break;
                case 85: insertChar(event, this, "ʊ"); break;
                case 67: insertChar(event, this, "ɔ"); break;
                case 73: insertChar(event, this, "ɪ"); break;
                case 65: insertChar(event, this, "ɑ"); break;
            }
        } else if(event.altKey) {
            switch(event.keyCode) {
                case 84: insertChar(event, this, "ð"); break;
                case 222: insertChar(event, this, "ˈ"); break;
                case 188: insertChar(event, this, "ˌ"); break;
                case 69: insertChar(event, this, "ɛ"); break;
                case 65: insertChar(event, this, "æ"); break;
            }
        }
    });

    // textbox.elt.addEventListener("keyup", function(event) {console.log(event.shiftKey);});

    chosen = (int)(Math.random() * data.getRowCount());

    lives = 3;

    lifeDisplay = [20, 20, 20];

    inputtingShortcut = false;
}

function draw() {
    background(35, 25, 66);

    fill(224, 177, 203);
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text("US English IPA Transcription", width/2, height - 160);

    textAlign(CENTER, BOTTOM);
    textSize(80);
    text(data.getString(chosen, 0), width/2, height/2 - 40);

    noStroke();
    for(let i = 0; i < 3; i ++) {
        for(let j = 0; j < 3; j++) {
            rect(40 + 120 * j, height/4 + 120 * i, 80, 100, 15);
            rect(width - 120 - 120 * j, height/4 + 120 * i, 80, 100, 15);
        }
    }
    
    fill(35, 25, 66);
    textAlign(CENTER, CENTER);
    textSize(60);

    //CONSONANTS
    text("θ", 40 + 80/2, height/2 - 110);
    text("ð", 80 + 120, height/2 - 110);
    text("ʃ", 80 + 240, height/2 - 110);
    text("ʒ", 40 + 80/2, height/2  - 110 + 120);
    text("ŋ", 80 + 120, height/2 - 110 + 120);
    text("ɫ", 80 + 240, height/2 - 110 + 120);
    text("ɹ", 40 + 80/2, height/2  - 110 + 240);
    text("ˈ", 80 + 120, height/2 - 110 + 240);
    text("ˌ", 80 + 240, height/2 - 110 + 240);
    //VOWELS
    text("ɝ", width - 120 + 40, height/2 - 110);
    text("ɛ", width - 240 + 40, height/2 - 110);
    text("ə", width - 360 + 40, height/2 - 110);
    text("ʊ", width - 120 + 40, height/2 - 110 + 120);
    text("ɔ", width - 240 + 40, height/2 - 110 + 120);
    text("ɪ", width - 360 + 40, height/2 - 110 + 120);
    text("æ", width - 120 + 40, height/2 - 110 + 240);
    text("ɑ", width - 240 + 40, height/2 - 110 + 240);

    textSize(15);
    text("CHECK\nANSWER", width - 360 + 40, height/2 - 110 + 240);

    textSize(17);
    //CONSONANTS
    text("SHIFT+T", 80, height/2 - 70);
    text("ALT+T", 80 + 120, height/2 - 70);
    text("SHIFT+S", 80 + 240, height/2 - 70);
    text("SHIFT+J", 80, height/2 - 70 + 120);
    text("SHIFT+N", 80 + 120, height/2 - 70 + 120);
    text("SHIFT+L", 80 + 240, height/2 - 70 + 120);
    text("SHIFT+R", 80, height/2 - 70 + 240);
    text("ALT+'", 80 + 120, height/2 - 70 + 240);
    text("ALT+,", 80 + 240, height/2 - 70 + 240);
    //VOWELS
    text("ALT+E", width - 80 - 120, height/2 - 70);
    text("SHIFT+E", width - 80 - 240, height/2 - 70);
    text("SHIFT+U", width - 80, height/2 - 70 + 120);
    text("SHIFT+C", width - 80 - 120, height/2 - 70 + 120);
    text("SHIFT+I", width - 80 - 240, height/2 - 70 + 120);
    text("ALT+A", width - 80, height/2 - 70 + 240);
    text("SHIFT+A", width - 80 - 120, height/2 - 70 + 240);
    text("ENTER", width - 80 - 240, height/2 - 70 + 240);

    textSize(12);
    text("ALT+SHIFT+E", width - 80, height/2 - 70);

    for(let i = lives; i < 3; i++) {
        lifeDisplay[i] *= Math.pow(0.9, deltaTime/7);
    }

    if(lifeDisplay[0] <= 0.05) {
        fill(224, 177, 203, 255 / 0.05 * (0.05 - lifeDisplay[0]));
        textSize(40);
        textAlign(CENTER, TOP);
        text(data.getString(chosen, 1), width/2, height/2 + 40);
    } else {
        fill(244, 177, 203);
        ellipse(width/2 - 40, height/2 + 60, lifeDisplay[0], lifeDisplay[0]);
        ellipse(width/2, height/2 + 60, lifeDisplay[1], lifeDisplay[1]);
        ellipse(width/2 + 40, height/2 + 60, lifeDisplay[2], lifeDisplay[2]);
    }

    if(document.activeElement != textbox.elt) textbox.elt.focus();
}

function keyPressed() {
    if(keyCode == 13) {
        if(checkAnswer(textbox.value(),  data.getString(chosen, 1))) {
            chosen = (int)(Math.random() * data.getRowCount());
            textbox.value("");
            lives = 3;
            lifeDisplay = [20, 20, 20];
        } else {
            lives --;
        }
    }
}

function insertChar(event, elt, char) {
    event.preventDefault();

    let temp = elt.selectionStart;

    elt.value = elt.value.substring(0, elt.selectionStart) + char + elt.value.substring(elt.selectionEnd, elt.value.length) 

    elt.selectionStart = temp + 1;
    elt.selectionEnd = temp + 1;
}

function checkAnswer(str1, str2) {

    if(str1 == str2) return true;

    if(str1.replaceAll("g", "ɡ") == str2) return true;

    return false;

}
