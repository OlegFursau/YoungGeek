import { parseRequestURL } from '../patrials/footer';
import Component from "../component";

class Header extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="header__logo">
                <a>
                    <img class="header__img" src="./assets/images/3333-[Converted] 1.png">
                </a>
                <a href="#">
                    <p class="header__name">Young Geek</p>
                </a>
            </div>
    
    
            <div class="header__btn">
                <div class="header__button--back">
                    <a data-set="back" href="#">Back</a>
                </div>
                <a data-set="test" class="btn__test">
                    <p data-set="test">Test</p>
                </a>
            </div>
            `);
        });
    }

    afterRender() {
        this.listnerButtonHeader();
    }
    listnerButtonHeader() {
        const button = document.getElementsByClassName('header__btn')[0].addEventListener('click', () => {

            switch (event.target.dataset.set) {
                case 'back':
                    if (this.request.resourse == 'choose') {
                        event.target.href = '#';
                    }
                    if (this.request.resourse == 'english') {
                        event.target.href = '#/choose';
                    }
                    if (this.request.resourse == 'maths') {
                        event.target.href = '#/choose';
                    }
                    if (this.request.resourse == 'test') {
                        event.target.href = '#/choose'
                    }
                    break;
                case 'test':
                    location.hash = '/test';
                    break;
            }


        });





    }

}

export default Header;