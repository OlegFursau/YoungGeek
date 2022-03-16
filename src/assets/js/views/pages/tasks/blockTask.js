import { returnArrEnglish } from '../../../helper/utils';
import Component from '../../component';

class BlockTaskEnglish extends Component {
    render() {

        return new Promise(resolve => {
            let firstWord = this.getRandomNumber(),
                secondWord = this.getRandomNumber(),
                threeWord = this.getRandomNumber(),
                fourWord = this.getRandomNumber();
            resolve(`
            <div id="mainEnglish">
            <div class="english">
                <div class="english__blocks" id="1">
                    ${returnArrEnglish()[firstWord].picture}
                    <div class="english__voice">
                        <svg data-name="Layer1" viewBox="0 0 32 32">
                            <g  data-name="Layer1" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                <path data-name="Layer1" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                <path data-name="Layer1" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                <path data-name="Layer1" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                <path data-name="Layer1" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                            </g>
                        </svg>
                        <h2 id="text1" class="english__words">
                        ${returnArrEnglish()[firstWord].word}
                        </h2>
                    </div>
                    <div class="english__block-translater">
                        <h3>${returnArrEnglish()[firstWord].translater}</h3>
                    </div>
                </div>
        
                <div class="english__blocks" id="2">
                ${returnArrEnglish()[secondWord].picture}
                    <div class="english__voice">
                        <svg data-name="Layer2" viewBox="0 0 32 32">
                            <g data-name="Layer2" data-name="Layer"><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                <path data-name="Layer2" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                <path data-name="Layer2" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                <path data-name="Layer2" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                <path data-name="Layer2" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                            </g>
                        </svg>
                        <h2 id="text2" class="english__words">
                        ${returnArrEnglish()[secondWord].word}
                        </h2>
                    </div>
                    <div class="english__block-translater">
                        <h3>${returnArrEnglish()[secondWord].translater}</h3>
                    </div>
                </div>
            
                <div class="english__blocks" id="3">
                ${returnArrEnglish()[threeWord].picture}
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
                        ${returnArrEnglish()[threeWord].word}
                        </h2>
                    </div>
                    <div class="english__block-translater">
                        <h3>${returnArrEnglish()[threeWord].translater}</h3>
                    </div>
                </div>
        
                <div class="english__blocks" id="4">
                ${returnArrEnglish()[fourWord].picture}
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
                        ${returnArrEnglish()[fourWord].word}
                        </h2>
                    </div>
                    <div class="english__block-translater">
                        <h3>${returnArrEnglish()[fourWord].translater}</h3>
                    </div>
                </div>
            </div>
            <div class="btn-block__english">
                <a id="btnNext" class="english__btn"> I learned, Next!
                </a>
            </div>
            </div>
            `)

        })

    }
    afterRender() {
        this.addEventListner()
    }
    addEventListner() {
        let sum = 0;
        let text;
        const mainEnglish = document.getElementById('mainEnglish').addEventListener('click', () => {

            switch (true) {
                case event.target.id === 'btnNext':
                    sum++
                    this.renderNextList();
                    break;
                case event.target.dataset.name === 'Layer1':
                    const textBlock1 = document.getElementById('text1');
                    text = textBlock1.innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer2':
                    const textBlock2 = document.getElementById('text2');
                    text = textBlock2.innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer3':
                    const textBlock3 = document.getElementById('text3');
                    text = textBlock3.innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer4':
                    const textBlock4 = document.getElementById('text4');
                    text = textBlock4.innerText;
                    this.addSpeakVoice(text);
                    break;
            }
            if (sum === 10) {
                this.showFinishPage()
            }
        });
    }

    renderNextList() {
        let firstWord = this.getRandomNumber(),
            secondWord = this.getRandomNumber(),
            threeWord = this.getRandomNumber(),
            fourWord = this.getRandomNumber();
        const englishBlock = document.getElementsByClassName('english')[0],
            blockMainEnglish = document.getElementById('mainEnglish'),
            blockBtn = document.getElementsByClassName('btn-block__english')[0];
        englishBlock.remove();
        blockBtn.remove();
        blockMainEnglish.insertAdjacentHTML('beforeend', `
        
                                                    <div class="english">
                                                        <div class="english__blocks" id="1">
                                                            ${returnArrEnglish()[firstWord].picture}
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
                                                                ${returnArrEnglish()[firstWord].word}
                                                                </h2>
                                                            </div>
                                                            <div class="english__block-translater">
                                                                <h3>${returnArrEnglish()[firstWord].translater}</h3>
                                                            </div>
                                                        </div>

                                                        <div class="english__blocks" id="2">
                                                        ${returnArrEnglish()[secondWord].picture}
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
                                                                ${returnArrEnglish()[secondWord].word}
                                                                </h2>
                                                            </div>
                                                            <div class="english__block-translater">
                                                                <h3>${returnArrEnglish()[secondWord].translater}</h3>
                                                            </div>
                                                        </div>
                                                    
                                                        <div class="english__blocks" id="3">
                                                        ${returnArrEnglish()[threeWord].picture}
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
                                                                ${returnArrEnglish()[threeWord].word}
                                                                </h2>
                                                            </div>
                                                            <div class="english__block-translater">
                                                                <h3>${returnArrEnglish()[threeWord].translater}</h3>
                                                            </div>
                                                        </div>

                                                        <div class="english__blocks" id="4">
                                                        ${returnArrEnglish()[fourWord].picture}
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
                                                                ${returnArrEnglish()[fourWord].word}
                                                                </h2>
                                                            </div>
                                                            <div class="english__block-translater">
                                                                <h3>${returnArrEnglish()[fourWord].translater}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btn-block__english">
                                                        <a id="btnNext" class="english__btn"> I learned, Next!
                                                        </a>
                                                    </div>
                                                    `);
    }

    addSpeakVoice(text) {
        const message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
    }

    getRandomNumber() {
        const arr = returnArrEnglish(),
            [min, max] = [0, arr.length];
        return Math.floor(Math.random() * (max - min) + min);
    }

    showFinishPage() {
        const mainBlock = document.getElementById('001'),
            englishBlock = document.getElementsByClassName('english')[0],
            blockBtn = document.getElementsByClassName('btn-block__english')[0];
        englishBlock.remove();
        blockBtn.remove();
        mainBlock.innerHTML =
            `<div class="finish">
                <div class="finish__block">
                    <div class="finish__text">
                        <h2><br><b>*Perfect!*</b></br> You learned new words!</h2>
                        <div class="finish__picture">
                            <img src="./assets/images/transparent-medal-icon-digital-marketing-icon-5fc9bc51d4f575.5816096416070564658723.png" alt="">
                        </div>
                    </div>
                    <div class="finish__img">
                        <img src="./assets/images/imgbin_binary-option-automated-trading-system-aerobot-computer-program-png.png" alt="">
                    </div>
                </div>      
                <div class="finish__botton">
                    <a   data-name ="home" ><img data-name ="home" src="./assets/images/house_home_icon_181525.ico" alt=""></a>
                    <a  data-name ="back"><img data-name ="back" src="./assets/images/pngegg.png" alt=""></a>
                </div>
            </div>`;
        this.checkButtonNomeOrBack();
    }

    checkButtonNomeOrBack() {
        const blockButtonHomeOrBack = document.getElementsByClassName('finish__botton')[0].addEventListener('click', () => {
            switch (event.target.dataset.name) {
                case 'home':
                    location.hash = '/choose';
                    break;
                case 'back':
                    location.hash = '/choose';
                    location.hash = '/english';
                    break;
            }
        })
    }








}




export default BlockTaskEnglish;