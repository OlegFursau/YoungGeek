import { parseRequestURL } from '../helper/utils'


class Component {
    constructor() {
        this.request = parseRequestURL();
    }

    getResponseServer() {
        return new Promise(resolve => resolve());
    }

    afterRender() {}

}

export default Component;