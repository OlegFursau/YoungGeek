import Component from "../component";

class Footer extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
            <div>
                <span>Made in Belarus @Fixik</span>
            </div>
            `);
        });
    }
}

export default Footer;