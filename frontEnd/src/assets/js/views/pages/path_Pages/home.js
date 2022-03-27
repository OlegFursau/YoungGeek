import Component from '../../component';
class Home extends Component {
    render() {
        return new Promise(resolve => {
            // this.addSpeakVoice()
            resolve(`
            <div class="home">
                <img src="./assets/images/Frame 2.jpg" alt="">
                    <div class="home__start">
                        <button class="home__btn--start" >Start</button>
                    </div>
            </div>`);
        });
    }
    afterRender() {
        this.addListener();

    }
    addSpeakText() {
        this.addSpeakVoice();
    }

    addSpeakVoice() {
        const message = new SpeechSynthesisUtterance();
        message.lang = 'ru-Ru';
        message.pitch = 0;
        message.rate = 1;
        message.text = 'Привет!! Я хочу, стать твоим другом!! Мы будем учить английские слова и числа! Давай Пройдем этот путь, вместе???';
        window.speechSynthesis.speak(message);
    }

    addListener() {
        document.getElementsByClassName('home__btn--start')[0].addEventListener('click', () => {
            location.hash = '/choose';
        });;
    }
}



export default Home;