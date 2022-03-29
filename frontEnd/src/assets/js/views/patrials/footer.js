class Footer {
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