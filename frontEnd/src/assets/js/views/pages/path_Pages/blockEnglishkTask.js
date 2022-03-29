import Component from '../../component';
import Task from '../../../model/task';

class BlockTaskEnglish extends Component {
    constructor() {
        super();
        this.arr = 0;
    }

    getResponseServer() {
        return new Promise(resolve => new Task().getEnglishArr().then(arrDb => resolve(this.arr = arrDb)));
    }

    render() {
        return new Promise(resolve => {
            let [firstWord, secondWord, threeWord, fourWord] = this.generateAnswerRandomNumber();
            resolve(`
            <div id="mainEnglish">
                <div class="english">
                    <div class="english__blocks" id="1">
                        <img src=${this.arr[firstWord].picture} alt="">"
                            <div class="english__voice">
                                <svg id ="1" data-name="Layer1" viewBox="0 0 32 32">
                                    <g  data-name="Layer1" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                                <h2 id="text1" class="english__words">
                                ${this.arr[firstWord].word}
                                </h2>
                            </div>
                            <div class="english__block-translater">
                                <h3>${this.arr[firstWord].translater}</h3>
                            </div>
                    </div>
                    <div class="english__blocks" id="2">
                        <img src=${this.arr[secondWord].picture} alt="">"
                            <div class="english__voice">
                                <svg id ="2" data-name="Layer2" viewBox="0 0 32 32">
                                    <g data-name="Layer2" data-name="Layer"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                                <h2 id="text2" class="english__words">
                                ${this.arr[secondWord].word}
                                </h2>
                            </div>
                            <div class="english__block-translater">
                                <h3>${this.arr[secondWord].translater}</h3>
                            </div>
                    </div>
                    <div class="english__blocks" id="3">
                        <img src=${this.arr[threeWord].picture} alt="">"
                            <div class="english__voice">
                                <svg data-name="Layer3" viewBox="0 0 32 32">
                                    <g data-name="Layer3"  data-name="Layer" id="Layer_34"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                                <h2 id="text3" class="english__words">
                                ${this.arr[threeWord].word}
                                </h2>
                            </div>
                            <div class="english__block-translater">
                                <h3>${this.arr[threeWord].translater}</h3>
                            </div>
                    </div>
                    <div class="english__blocks" id="4">
                        <img src=${this.arr[fourWord].picture} alt="">"
                            <div class="english__voice">
                                <svg data-name="Layer4" viewBox="0 0 32 32">
                                    <g  data-name="Layer4" data-name="Layer" id="Layer_34"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                                <h2 id="text4" class="english__words">
                                ${this.arr[fourWord].word}
                                </h2>
                            </div>
                            <div class="english__block-translater">
                                <h3>${this.arr[fourWord].translater}</h3>
                            </div>
                    </div>
                </div>
                <div class="btn-block__english">
                    <a id="btnNext" class="english__btn"> I learned, Next!
                    </a>
                </div>
            </div>
            `);
        });
    }

    afterRender() {
        this.addEventListner();
    }

    addEventListner() {
        let sum = 0;
        let text;
        document.getElementById('001').addEventListener('click', () => {
            switch (true) {
                case event.target.id === 'btnNext':
                    sum++
                    this.renderNextPage();
                    break;
                case event.target.dataset.name === 'Layer1':
                    text = document.getElementById('text1').innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer2':
                    text = document.getElementById('text2').innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer3':
                    text = document.getElementById('text3').innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer4':
                    text = document.getElementById('text4').innerText;
                    this.addSpeakVoice(text);
                    break;
            }
            if (sum === 10) {
                localStorage.setItem('page', JSON.stringify(document.getElementById('001').innerHTML))
                this.renderFinishPage();
                sum = 0;
            }
        });
    }

    renderNextPage() {
        let [firstWord, secondWord, threeWord, fourWord] = this.generateAnswerRandomNumber();
        const englishBlock = document.getElementsByClassName('english')[0],
            blockMainEnglish = document.getElementById('mainEnglish'),
            blockBtn = document.getElementsByClassName('btn-block__english')[0];
        englishBlock.remove();
        blockBtn.remove();
        blockMainEnglish.insertAdjacentHTML('beforeend', `<div class="english">
                                                            <div class="english__blocks" id="1">
                                                                <img src=${this.arr[firstWord].picture} alt="">"
                                                                <div class="english__voice">
                                                                    <svg data-name="Layer1" viewBox="0 0 32 32">
                                                                        <g  data-name="Layer1" id="Layer_34"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                                                            <path data-name="Layer1" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                                                            <path data-name="Layer1" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                                                            <path data-name="Layer1" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                                                            <path data-name="Layer1" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                                                        </g>
                                                                    </svg>
                                                                    <h2 id="text1" class="english__words">
                                                                    ${this.arr[firstWord].word}
                                                                    </h2>
                                                                </div>
                                                                <div class="english__block-translater">
                                                                    <h3>${this.arr[firstWord].translater}</h3>
                                                                </div>
                                                            </div>
                                                            <div class="english__blocks" id="2">
                                                                <img src=${this.arr[secondWord].picture} alt="">"
                                                                <div class="english__voice">
                                                                    <svg data-name="Layer2" viewBox="0 0 32 32">
                                                                        <g  data-name="Layer2" id="Layer_34"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                                                            <path data-name="Layer2" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                                                            <path data-name="Layer2" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                                                            <path data-name="Layer2" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                                                            <path data-name="Layer2" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                                                        </g>
                                                                    </svg>
                                                                    <h2 id="text2" class="english__words">
                                                                    ${this.arr[secondWord].word}
                                                                    </h2>
                                                                </div>
                                                                <div class="english__block-translater">
                                                                    <h3>${this.arr[secondWord].translater}</h3>
                                                                </div>
                                                            </div>
                                                            <div class="english__blocks" id="3">
                                                                <img src=${this.arr[threeWord].picture} alt="">"
                                                                <div class="english__voice">
                                                                    <svg data-name="Layer3" viewBox="0 0 32 32">
                                                                        <g data-name="Layer3" data-name="Layer" id="Layer_34"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                                                            <path data-name="Layer3" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                                                            <path data-name="Layer3" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                                                            <path data-name="Layer3" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                                                            <path data-name="Layer3" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                                                        </g>
                                                                    </svg>
                                                                    <h2 id="text3" class="english__words">
                                                                    ${this.arr[threeWord].word}
                                                                    </h2>
                                                                </div>
                                                                <div class="english__block-translater">
                                                                    <h3>${this.arr[threeWord].translater}</h3>
                                                                </div>
                                                            </div>
                                                            <div class="english__blocks" id="4">
                                                                <img src=${this.arr[fourWord].picture} alt="">"
                                                                <div class="english__voice">
                                                                    <svg data-name="Layer4" viewBox="0 0 32 32">
                                                                        <g  data-name="Layer4" data-name="Layer" id="Layer_34"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                                                            <path data-name="Layer4 " class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                                                            <path data-name="Layer4" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                                                            <path data-name="Layer4" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                                                            <path data-name="Layer4" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                                                        </g>
                                                                    </svg>
                                                                    <h2 id="text4" class="english__words">
                                                                    ${this.arr[fourWord].word}
                                                                    </h2>
                                                                </div>
                                                                <div class="english__block-translater">
                                                                    <h3>${this.arr[fourWord].translater}</h3>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div class="btn-block__english">
                                                        <a id="btnNext" class="english__btn"> I learned, Next!
                                                        </a>
                                                    </div>`);
    }

    addSpeakVoice(text) {
        const message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
    }

    generateAnswerRandomNumber() {
        let totalNumbers = this.arr.length,
            arrayTotalNumbers = [],
            arrayRandomNumbers = [],
            tempRandomNumber;
        while (totalNumbers--) {
            arrayTotalNumbers.push(totalNumbers + 0);
        }
        while (arrayTotalNumbers.length) {
            tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
            arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
            arrayTotalNumbers.splice(tempRandomNumber, 1);
        }
        return arrayRandomNumbers;
    }

    renderFinishPage() {
        const mainBlock = document.getElementById('001'),
            englishBlock = document.getElementsByClassName('english')[0],
            blockBtn = document.getElementsByClassName('btn-block__english')[0];
        englishBlock.remove();
        blockBtn.remove();
        mainBlock.innerHTML =
            `<div class="finish">
                <div class="finish__block">
                    <div class="finish__text">
                        <h2 class="text"><br><b>Perfect!!!</b></br> You learned new words!! <br>Maybe Would you like to try test? </h2>
                        <div class="finish__picture">
                            <img src="./assets/images/transparent-medal-icon-digital-marketing-icon-5fc9bc51d4f575.5816096416070564658723.png" alt="">
                        </div>
                    </div>
                    <div class="finish__img">
                        <img src="./assets/images/imgbin_binary-option-automated-trading-system-aerobot-computer-program-png.png" alt="">
                    </div>
                </div>      
                <div class="finish__botton">
                    <a  data-name ="home" ><img data-name ="home" src="./assets/images/house_home_icon_181525.ico" alt=""></a>
                    <a  data-name ="back"><img data-name ="back" src="./assets/images/pngegg.png" alt=""></a>
                </div>
            </div>`;
        this.addSpeakVoice(document.getElementsByClassName('text')[0].innerText);
        this.checkButtonHomeOrBack();
    }

    checkButtonHomeOrBack() {
        document.getElementsByClassName('finish__botton')[0].addEventListener('click', () => {
            switch (event.target.dataset.name) {
                case 'home':
                    location.hash = '/choose';
                    break;
                case 'back':
                    document.getElementById('001').innerHTML = JSON.parse(localStorage.getItem('page'));
                    localStorage.clear();
                    break;
            }
        });
    }
}

export default BlockTaskEnglish;