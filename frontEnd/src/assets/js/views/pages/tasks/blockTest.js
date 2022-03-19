import Component from '../../component';
import Task from '../../../modal/task';
class BlockTest extends Component {
    constructor() {
        super();
        this.arr;
        this.cartoons;
        this.answer = 0;
        this.mistakes = 0;
        this.correct = 0;
        this.taskArr = [];
        this.random = this.getRandomNumber();
        this.genRandomNumber = this.generateAnswerRandomNumber();
    }

    getResponseServer() {
        return new Promise(resolve => new Task().getEnglishArr().then(arrDb => resolve(this.arr = arrDb)));

    }

    getResponsCartoonsServer() {
        return new Promise(resolve => new Task().getCartoonsArr().then(res => resolve(this.cartoons = res)));

    }

    getBlockQuastion() {
        let [min, max] = [0, this.arr.length];
        for (let i = min; i < max; i++) {;
            this.taskArr.push(this.arr[Math.floor(Math.random() * this.arr.length)])
        }
        return this.taskArr;


    }
    getRandomNumber() {
        let [min, max] = [0, 4];
        return Math.floor(Math.random() * max);
    }


    generateAnswerRandomNumber() {
        let totalNumbers = 3 - 0 + 1,
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


    render() {

        return new Promise(resolve => {
            this.getBlockQuastion();
            resolve(`
            <div id="test-english">
                <div class="test-english">
                    <div class="test-english__count">
                        <h2 class="count">Answers<b class="test-english__answer">${ this.answer}</b> Mistakes<b class="test-english__mistake">${this.mistakes}</b> Correct<b class="test-english__correct">${this.correct}</b> </h2>
                    </div>
                    <div class="test-english__img">
                        <img src=${this.taskArr[this.random].picture} alt="">                      
                    </div>
                        <ul class="test-english__choose">
                            <li id="test1" >

                                <button id="word1">${this.taskArr[this.genRandomNumber[0]].word}</button>

                                <svg data-name="Layer1" viewBox="0 0 32 32">
                                    <g  data-name="Layer1" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer1" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                            </li>
                            <li id="test2" >
                                
                                <button  id="word2">${this.taskArr[this.genRandomNumber[1]].word}</button>

                                <svg data-name="Layer2" viewBox="0 0 32 32">
                                    <g  data-name="Layer2" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer2" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                            </li>
                            <li id="test3">

                                <button id="word3">${this.taskArr[this.genRandomNumber[2]].word}</button>

                                <svg data-name="Layer3" viewBox="0 0 32 32">
                                    <g  data-name="Layer3" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer3" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                            </li>
                            <li id="test4">

                                <button id="word4">${this.taskArr[this.genRandomNumber[3]].word}</button>

                                <svg data-name="Layer4" viewBox="0 0 32 32">
                                    <g  data-name="Layer4" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                                        <path data-name="Layer4" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                                    </g>
                                </svg>
                            </li>

                            <li class="test-block__btn">
                                <button class="test-finish__btn"> Next</button>
                            </li>
                        </ul>
                </div>
            </div>
            `)
        })
    }

    afterRender() {
        this.addEventListner();
        this.getResponsCartoonsServer();
    }


    addSpeakVoice(text) {
        const message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
    }

    addEventListner() {
        let text;
        const blockTest = document.getElementById('test-english').addEventListener('click', () => {
            const firstWord = document.getElementById('word1'),
                secondWord = document.getElementById('word2'),
                threeWord = document.getElementById('word3'),
                fourWord = document.getElementById('word4');
            let checkWord = this.taskArr[this.random].word;
            switch (true) {
                case event.target.dataset.name === 'Layer1':
                    text = firstWord.innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer2':
                    text = secondWord.innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer3':
                    text = threeWord.innerText;
                    this.addSpeakVoice(text);
                    break;
                case event.target.dataset.name === 'Layer4':
                    text = fourWord.innerText;
                    this.addSpeakVoice(text);

                    break;
                case event.target.id === 'word1':
                    if (firstWord.innerText.toLocaleLowerCase() === checkWord) {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('correct');
                        secondWord.classList.add('opacity');
                        threeWord.classList.add('opacity');
                        fourWord.classList.add('opacity');
                        this.answer++;
                        this.correct++;

                    } else {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('error');
                        secondWord.classList.add('opacity');
                        threeWord.classList.add('opacity');
                        fourWord.classList.add('opacity');
                        this.answer++;
                        this.mistakes++;

                    }
                    break;
                case event.target.id === 'word2':
                    if (secondWord.innerText.toLocaleLowerCase() === checkWord) {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('opacity');
                        secondWord.classList.add('correct');
                        threeWord.classList.add('opacity');
                        fourWord.classList.add('opacity');
                        this.answer++;
                        this.correct++;

                    } else {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('opacity');
                        secondWord.classList.add('error');
                        threeWord.classList.add('opacity');
                        fourWord.classList.add('opacity');
                        this.answer++;
                        this.mistakes++;

                    }
                    break;
                case event.target.id === 'word3':
                    if (threeWord.innerText.toLocaleLowerCase() === checkWord) {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('opacity');
                        secondWord.classList.add('opacity');
                        threeWord.classList.add('correct');
                        fourWord.classList.add('opacity');
                        this.answer++;
                        this.correct++;
                    } else {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('opacity');
                        secondWord.classList.add('opacity');
                        threeWord.classList.add('error');
                        fourWord.classList.add('opacity');
                        this.answer++;
                        this.mistakes++;
                    }
                    break;
                case event.target.id === 'word4':
                    if (fourWord.innerText.toLocaleLowerCase() === checkWord) {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('opacity');
                        secondWord.classList.add('opacity');
                        threeWord.classList.add('opacity');
                        fourWord.classList.add('correct');
                        this.answer++;
                        this.correct++;
                    } else {
                        this.disableBtn(firstWord, secondWord, threeWord, fourWord);
                        firstWord.classList.add('opacity');
                        secondWord.classList.add('opacity');
                        threeWord.classList.add('opacity');
                        fourWord.classList.add('error');
                        this.answer++;
                        this.mistakes++;
                    }
                    break;
                case event.target.className === 'test-finish__btn':
                    this.taskArr = [];
                    this.getBlockQuastion();
                    this.random = this.getRandomNumber();
                    this.genRandomNumber = this.generateAnswerRandomNumber();
                    this.renderNextPage(firstWord, secondWord, threeWord, fourWord);
            };
        });
    }

    disableBtn(firstWord, secondWord, threeWord, fourWord) {
        firstWord.disabled = true;
        secondWord.disabled = true;
        threeWord.disabled = true;
        fourWord.disabled = true;
    }

    unDisableBtn(firstWord, secondWord, threeWord, fourWord) {
        firstWord.disabled = false;
        secondWord.disabled = false;
        threeWord.disabled = false;
        fourWord.disabled = false;
    }

    renderNextPage(firstWord, secondWord, threeWord, fourWord) {
        const blockTest = document.getElementById('test-english');
        blockTest.innerHTML = '';
        blockTest.insertAdjacentHTML('beforeend', `<div class="test-english">
        <div class="test-english__count">
            <h2 class="count">Answers<b class="test-english__answer">${ this.answer}</b> Mistakes<b class="test-english__mistake">${this.mistakes}</b> Correct<b class="test-english__correct">${this.correct}</b> </h2>
        </div>
        <div class="test-english__img">
            <img src=${this.taskArr[this.random].picture} alt="">
        </div>
            <ul class="test-english__choose">
                <li id="test1" >

                    <button id="word1">${this.taskArr[this.genRandomNumber[0]].word}</button>

                    <svg data-name="Layer1" viewBox="0 0 32 32">
                        <g  data-name="Layer1" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                            <path data-name="Layer1" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                            <path data-name="Layer1" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                            <path data-name="Layer1" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                            <path data-name="Layer1" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                        </g>
                    </svg>
                </li>
                <li id="test2" >
                    
                    <button  id="word2">${this.taskArr[this.genRandomNumber[1]].word}</button>

                    <svg data-name="Layer2" viewBox="0 0 32 32">
                        <g  data-name="Layer2" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                            <path data-name="Layer2" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                            <path data-name="Layer2" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                            <path data-name="Layer2" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                            <path data-name="Layer2" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                        </g>
                    </svg>
                </li>
                <li id="test3">

                    <button id="word3">${this.taskArr[this.genRandomNumber[2]].word}</button>

                    <svg data-name="Layer3" viewBox="0 0 32 32">
                        <g  data-name="Layer3" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                            <path data-name="Layer3" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                            <path data-name="Layer3" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                            <path data-name="Layer3" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                            <path data-name="Layer3" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                        </g>
                    </svg>
                </li>
                <li id="test4">

                    <button id="word4">${this.taskArr[this.genRandomNumber[3]].word}</button>

                    <svg data-name="Layer4" viewBox="0 0 32 32">
                        <g  data-name="Layer4" ><path  class="cls-1" d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"/>
                            <path data-name="Layer4" class="cls-1" d="M8,22H4a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H8a1,1,0,0,1,1,1V21A1,1,0,0,1,8,22ZM4,12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H7V12Z"/>
                            <path data-name="Layer4" class="cls-1" d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"/>
                            <path data-name="Layer4" class="cls-1" d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"/>
                            <path data-name="Layer4" class="cls-1" d="M23.65,22.65a1,1,0,0,1-.7-.29A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"/>
                        </g>
                    </svg>
                </li>

                <li class="test-block__btn">
                    <button class="test-finish__btn"> Next</button>
                </li>
            </ul>
    </div>
`);
        firstWord.className = '';
        secondWord.className = '';
        threeWord.className = '';
        fourWord.className = '';
        this.unDisableBtn(firstWord, secondWord, threeWord, fourWord);
        this.renderFinishPage(blockTest);
    }

    renderFinishPage(blockTest) {
        let text;
        if (this.answer === 10 && this.correct > this.mistakes) {
            blockTest.innerHTML = `<div class="finish">
            <div class="finish__block">
                <div class="finish__text">
                    <h2 class="phrase">Super!!! You are intelegent!<br> Let's go watch the cartoons!</h2>
                    <div class="finish__picture">
                        <iframe src=${this.cartoons[Math.floor(Math.random() * this.cartoons.length)]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="finish__img">
                    <img src="./assets/images/imgbin_binary-option-automated-trading-system-aerobot-computer-program-png.png" alt="">
                </div>
            </div>
        </div>`;
            const phrase = document.getElementsByClassName('phrase')[0];
            text = phrase.innerText;
            this.addSpeakVoice(text);
        } else if (this.answer === 10 && this.correct < this.mistakes) {
            blockTest.innerHTML = `<div class="finish">
            <div class="finish__block">
                <div class="finish__text">
                    <h2>Не растраивайся! Давай поучим слова и попробуем снова!</h2>
                    <div class="finish__picture">
                        <img src="./assets/images/never give up.png" alt="">
                    </div>
                </div>
                <div class="finish__img">
                    <img src="./assets/images/pngwing.com 2.png" alt="">
                </div>
        
            </div>
        </div>
        `;

        };
    }
}

export default BlockTest;