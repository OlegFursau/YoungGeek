import { genereteID } from '../../../helper/utils';
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
        });
    }
    afterRender() {
        this.addListener();
    }
    addListener() {
        const buttonStart = document.getElementsByClassName('home__btn--start')[0];

        buttonStart.addEventListener('click', () => {
            location.hash = '/choose'
        });


    }
}



export default Home;