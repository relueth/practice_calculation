// ローカルストレージから範囲を取得
let memorization_range = localStorage.getItem('range');
if (memorization_range == null) {
    // 初期は13~99の範囲
    localStorage.setItem('range', '13,99');
    memorization_range = localStorage.getItem('range');
}
let = [rand_min, rand_max] = memorization_range.split(',').map(Number)

//時間計測
let end_time;
let start_time;
start_time = new Date();

//問題生成
var counter = 0

const answer_audiourl = 'answer_audio.mp3';

const Incorrect_answerurl = 'Incorrect_answer.mp3';

const answer_audio = new Audio(answer_audiourl);

const Incorrect_answer = new Audio(Incorrect_answerurl);

let a, b;

var user_input = ''

display_input = document.getElementById("input");

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//問題生成関数
function make_question() {
    counter += 1

    a = rand(rand_min, rand_max);

    b = rand(rand_min, rand_max);
    
    question = String(a) + ' * ' + String(b)
    
    answer = a * b;
    
    a_string = document.getElementById("a_write");
    
    a_string.innerHTML = question;
}

//各ボタンの関数
function buttonClick1() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '1'
    display_input.innerHTML = user_input;
}

function buttonClick2() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '2'
    display_input.innerHTML = user_input;
}

function buttonClick3() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '3'
    display_input.innerHTML = user_input;
}

function buttonClick4() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '4'
    display_input.innerHTML = user_input;
}

function buttonClick5() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '5'
    display_input.innerHTML = user_input;
}

function buttonClick6() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '6'
    display_input.innerHTML = user_input;
}

function buttonClick7() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '7'
    display_input.innerHTML = user_input;
}

function buttonClick8() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '8'
    display_input.innerHTML = user_input;
}

function buttonClick9() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '9'
    display_input.innerHTML = user_input;
}

function buttonClick0() {
    if (user_input === '違います' || user_input === '[入力]') {
        user_input = ''
    }
    user_input += '0'
    display_input.innerHTML = user_input;
}

function buttonClickEnd() {
    user_input = user_input.slice(0, user_input.length -1)
    if (user_input.length === 0){
        user_input = '[入力]'
    }
    display_input.innerHTML = user_input;
}

// 問題数
let count_size = 10

function buttonClickDecision() {
    if (parseInt(user_input) === answer) {
        user_input = '[入力]'
        answer_audio.play();
        if (counter !== count_size) {
            make_question()
        } else {
            end_time = new Date();
            user_input = String((end_time - start_time) / 1000) + '秒です';
            display_input.innerHTML = user_input;
        }
    } else {
        Incorrect_answer.play()
        user_input = '違います'
    }
    display_input.innerHTML = user_input;
}

function set_range() {
    let input_range = prompt('範囲をコンマで区切って入力');
    if (!(input_range == null || input_range == '' || input_range == 'end')) {
        localStorage.setItem('range', input_range);
    }
}

make_question()

let button1 = document.getElementById('1');

let button2 = document.getElementById('2');

let button3 = document.getElementById('3');

let button4 = document.getElementById('4');

let button5 = document.getElementById('5');

let button6 = document.getElementById('6');

let button7 = document.getElementById('7');

let button8 = document.getElementById('8');

let button9 = document.getElementById('9');

let button0 = document.getElementById('0');

let buttonEnd = document.getElementById('end');

let buttonDecision = document.getElementById('decision');

let buttonStting = document.getElementById('setting');

button1.onclick = buttonClick1;

button2.onclick = buttonClick2;

button3.onclick = buttonClick3;

button4.onclick = buttonClick4;

button5.onclick = buttonClick5;

button6.onclick = buttonClick6;

button7.onclick = buttonClick7;

button8.onclick = buttonClick8;

button9.onclick = buttonClick9;

button0.onclick = buttonClick0;

buttonEnd.onclick = buttonClickEnd;

buttonDecision.onclick = buttonClickDecision;

buttonStting.onclick = set_range;

// PC用
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'Enter') {
            buttonClickDecision();
        } else if (event.key === '1') {
            buttonClick1();
        } else if (event.key === '2') {
            buttonClick2();
        } else if (event.key === '3') {
            buttonClick3();
        } else if (event.key === '4') {
            buttonClick4();
        } else if (event.key === '5') {
            buttonClick5();
        } else if (event.key === '6') {
            buttonClick6();
        } else if (event.key === '7') {
            buttonClick7();
        } else if (event.key === '8') {
            buttonClick8();
        } else if (event.key === '9') {
            buttonClick9();
        } else if (event.key === '0') {
            buttonClick0();
        } else if (event.key === 'Backspace') {
            buttonClickEnd();
        }
        
    });
