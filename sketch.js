let data;
let textbox;
let chosen;
let lives;

let lifeDisplay;

let keys;

let textboxWidth;

function preload() {data = loadTable("data/most_common_transcribed_words.csv", "csv")}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    textSize(30);
    textboxWidth = Math.max(width * 2 / 5, textWidth("US English IPA Transcription") + 100);
    textbox.size(textboxWidth);
    textbox.position(width/2 - textboxWidth/2, height/2 - 40);

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('Roboto');

    textbox = createInput("");
    textbox.addClass("textbox");

    textSize(30);
    textboxWidth = Math.max(width * 2 / 5, textWidth("US English IPA Transcription") + 100);
    textbox.size(textboxWidth);
    textbox.position(width/2 - textboxWidth/2, height/2 - 40);

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

    chosen = (int)(Math.random() * data.getRowCount());

    lives = 3;

    lifeDisplay = [20, 20, 20];
}

function draw() {
    background(35, 25, 66);

    fill(224, 177, 203);
    textSize(30);
    textAlign(CENTER, BOTTOM);
    text("US English IPA Transcription", width/2, height/2 + 40 + 120);

    textAlign(CENTER, BOTTOM);
    textSize(80);
    text(data.getString(chosen, 0), width/2, height/2 - 40);

    noStroke();
    //CONSONANT, VOWEL SHORTCUT BOXES
    for(let i = 0; i < 3; i ++) {
        for(let j = 0; j < 3; j++) {
            rect(width/2 - 402 - 120 * j, height/2 - 150 + 120 * i, 80, 100, 15);
            rect(width/2 + 322 + 120 * j, height/2 - 150 + 120 * i, 80, 100, 15);
        }
    }
    
    fill(35, 25, 66);
    textAlign(CENTER, CENTER);
    textSize(60);
    //CONSONANT LABELS
    text("θ", width/2 - 362 - 240, height/2 - 110);
    text("ð", width/2 - 362 - 120, height/2 - 110);
    text("ʃ", width/2 - 362, height/2 - 110);
    text("ʒ", width/2 - 362 - 240, height/2  - 110 + 120);
    text("ŋ", width/2 - 362 - 120, height/2 - 110 + 120);
    text("ɫ", width/2 - 362, height/2 - 110 + 120);
    text("ɹ", width/2 - 362 - 240, height/2  - 110 + 240);
    text("ˈ", width/2 - 362 - 120, height/2 - 110 + 240);
    text("ˌ", width/2 - 362, height/2 - 110 + 240);
    //VOWEL LABELS
    text("ɝ", width/2 + 362 + 240, height/2 - 110);
    text("ɛ", width/2 + 362 + 120, height/2 - 110);
    text("ə", width/2 + 362, height/2 - 110);
    text("ʊ", width/2 + 362 + 240, height/2 - 110 + 120);
    text("ɔ", width/2 + 362 + 120, height/2 - 110 + 120);
    text("ɪ", width/2 + 362, height/2 - 110 + 120);
    text("æ", width/2 + 362 + 240, height/2 - 110 + 240);
    text("ɑ", width/2 + 362 + 120, height/2 - 110 + 240);

    textSize(15);
    text("CHECK\nANSWER", width/2 + 362, height/2 - 110 + 240);

    textSize(17);
    //CONSONANT SHORTCUTS
    text("SHIFT+T", width/2 - 362 - 240, height/2 - 70);
    text("ALT+T",  width/2 - 362 - 120, height/2 - 70);
    text("SHIFT+S", width/2 - 362, height/2 - 70);
    text("SHIFT+J", width/2 - 362 - 240, height/2 - 70 + 120);
    text("SHIFT+N", width/2 - 362 - 120, height/2 - 70 + 120);
    text("SHIFT+L", width/2 - 362, height/2 - 70 + 120);
    text("SHIFT+R", width/2 - 362 - 240, height/2 - 70 + 240);
    text("ALT+'", width/2 - 362 - 120, height/2 - 70 + 240);
    text("ALT+,", width/2 - 362, height/2 - 70 + 240);
    //VOWEL SHORTCUTS
    text("ALT+E", width/2 + 362 + 120, height/2 - 70);
    text("SHIFT+E", width/2 + 362, height/2 - 70);
    text("SHIFT+U", width/2 + 362 + 240, height/2 - 70 + 120);
    text("SHIFT+C", width/2 + 362 + 120, height/2 - 70 + 120);
    text("SHIFT+I", width/2 + 362, height/2 - 70 + 120);
    text("ALT+A", width/2 + 362 + 240, height/2 - 70 + 240);
    text("SHIFT+A", width/2 + 362 + 120, height/2 - 70 + 240);
    text("ENTER", width/2 + 362, height/2 - 70 + 240);

    textSize(12);
    text("ALT+SHIFT+E", width/2 + 362 + 240, height/2 - 70);

    //shrink life indicator if corresponding life gone
    for(let i = lives; i < 3; i++) {
        lifeDisplay[i] *= Math.pow(0.9, deltaTime/7);
    }

    //if third life gone, transition to answer
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
