import { parseRequestURL } from '../helper/utils'


class Component {
    constructor() {
        this.request = parseRequestURL();
    }

    afterRender() {}

}

export default Component;