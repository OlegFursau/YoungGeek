import Component from '../component';

class Error404 extends Component {

    render() {
        return new Promise(resolve => {
            resolve(`
            <div class="error__container">
                <div class="error__error404page">
                    <div class="error__newcharacter404">
                        <div class="error__chair404"></div>
                        <div class="error__leftshoe404"></div>
                        <div class="error__rightshoe404"></div>
                        <div class="error__legs404"></div>
                        <div class="error__torso404">
                            <div class="error__body404"></div>
                            <div class="error__leftarm404"></div>
                            <div class="error__rightarm404"></div>
                            <div class="error__head404">
                                <div class="error__eyes404"></div>
                            </div>
                        </div>
                        <div class="error__laptop404">
                        <div class="error404">
                            <h1 >Сейчас попробуем исправить ошибку 404</h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            `)
        })
    }
    afterRender() {}
}
export default Error404;