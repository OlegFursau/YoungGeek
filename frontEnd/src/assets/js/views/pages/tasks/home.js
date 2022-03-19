import Component from '../../component';

class Home extends Component {
    render() {

        return new Promise(resole => {
            resole(`
            <div class="home">
                <img src="./assets/images/Frame 2.jpg" alt="">
                    <div class="home__start">
                        <button class="home__btn--start" >Start</button>
                    </div>
            </div>`);
            this.addSpeakVoice()
        });
    }
    afterRender() {
        this.addListener();
    }
    addSpeakVoice() {
        const message = new SpeechSynthesisUtterance();
        message.lang = 'ru-Ru';
        message.pitch = 0;
        message.rate = 1;
        message.text = "Привет!! Я хочу, стать твоим другом!! Мы будем учить английские слова и числа! Давай Пройдем этот путь, вместе???";
        window.speechSynthesis.speak(message);
    }

    addListener() {
        const buttonStart = document.getElementsByClassName('home__btn--start')[0];

        buttonStart.addEventListener('click', () => {
            location.hash = '/choose';
        });
    }
}



export default Home;