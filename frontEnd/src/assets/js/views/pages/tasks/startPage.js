import Component from '../../component';


class StartPage extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`<div class="block">
                <div class="block__task"  data-name="english">

                    <div class="block__pic">
                        <img class="block__flag" src="./assets/images/union-jack-1027896_640.jpg" alt="England">
                    </div>
            
                    <div class="block__robot block__left">
            
                        <div class="block__robotText">
                            <p data-name="english">
                                Давай поучим английские слова!!! Потом сможем настроить робота!!
                            </p>
                            <button class="block__btn" id ="1"> Let's go!</button>
                        </div>
                        <img class="block__img" src="./assets/images//Group 3.png" alt="robot">
                    </div>
                </div>
        
                <div class="block__task"  data-name="math">
                
                    <div class="block__pic">
                        <img class="block__flag" src="./assets/images/Screenshot 2022-03-07 at 20.31 1.png" alt="England">
                    </div>
            
                    <div class="block__robot block__left">
            
                        <div class="block__robotText">
                            <p data-name="math">
                                А теперь давай учить числа! У нас получится!
                            </p>
                            <button class="block__math--btn" id="2"> Let's go!</button>
                        </div>
                        <img class="block__img" src="./assets/images//Group 3.png" alt="robot">
                    </div>
                </div>
            </div>
            `)
        })

    }
    afterRender() {
        this.addListeren()
    }

    addListeren() {
        const block = document.getElementsByClassName('block')[0].addEventListener('click', () => {

            switch (+event.target.id) {
                case 1:
                    location.hash = '/english';
                    break;
                case 2:
                    location.hash = '/maths';
                    break;
            }
        })
    }


}
export default StartPage;