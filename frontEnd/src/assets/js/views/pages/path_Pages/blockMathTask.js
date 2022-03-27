import Component from '../../component';
import Task from '../../../model/task';

class BlockMathTask extends Component {
    constructor() {
        super();
        this.arr = 0;
    }

    getResponseServer() {
        return new Promise(resolve => new Task().getMathArr().then(arrDb => resolve(this.arr = arrDb)));
    }

    render() {
        let num = this.getRandomNumber();
        return new Promise(resolve => {
            resolve(`
            <div class="math__innerText">
                <h1>Let's go! Can you coun how much fruits in the pictures?</h1>
                <div class="math">
                    <div class="math__img">
                    <img src=${this.arr[num]} alt=""> 
                    </div>
                    <div class="math_discribe">
                        <div class="math__text">
                            <h3>What it's the number?: </h3>
                                <svg data-name="Layer" viewBox="0 0 32 32">
                                    <g  data-name="Layer" id=""><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>

                        </div>
                        <p id="paragraph">
                            ${++num}
                        </p>
                        <button math class="btn__math">I'm complited!!!</button>
                    </div>
                </div>
            </div>
            `);
        });
    }

    afterRender() {
        this.showNewTask();
    }

    showNewTask() {
        let sum = 0;
        document.getElementById('001').addEventListener('click', (event) => {
            const blockInnerText = document.getElementsByClassName('math__innerText')[0];
            if (event.target.attributes[0].nodeName === 'math') {
                sum++
                const blockMath = document.getElementsByClassName('math')[0];
                let num = this.getRandomNumber();
                blockMath.remove();
                blockInnerText.insertAdjacentHTML('beforeend',
                    `<div class="math">
                            <div class="math__img">
                                <img src=${this.arr[num]} alt="">  
                            </div>
                            <div class="math_discribe">
                                <div class="math__text">
                                    <h3>What it's the number?: </h3>
                                        <svg data-name="Layer"  viewBox="0 0 32 32">
                                            <g   data-name="Layer" id=""><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                                <path data-name="Layer" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                                <path data-name="Layer" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                                <path data-name="Layer" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                                <path data-name="Layer" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                            </g>
                                        </svg>
                                </div>
                                <p id="paragraph">
                                    ${++num}
                                </p>
                                <button math class="btn__math">I'm complited!!!</button>
                            </div>
                    </div>`);
                if (sum === 10) {
                    localStorage.setItem('page', JSON.stringify(document.getElementById('001').innerHTML))
                    this.showFinishPage(blockInnerText, blockMath);
                    sum = 0;
                }
            };
            if (event.target.dataset.name === 'Layer') {
                this.addSpeakVoice();
            };
        });
    }

    getRandomNumber() {
        let [min, max] = [0, this.arr.length];
        return Math.floor(Math.random() * (max - min) + min);
    }

    addSpeakVoice() {
        const message = new SpeechSynthesisUtterance();
        message.text = document.getElementById('paragraph').innerText;
        window.speechSynthesis.speak(message);
    }

    showFinishPage(blockInnerText) {
        const mainBlock = document.getElementById('001');
        blockInnerText.remove();
        mainBlock.insertAdjacentHTML('beforeend',
            `<div class="finish">
                <div class="finish__block">
                    <div class="finish__text">
                        <h2><br><b>*Perfect!*</b></br> You learned new numbers!</h2>
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
            </div>`);
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
export default BlockMathTask;