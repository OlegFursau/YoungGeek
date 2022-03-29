class Header {
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
                    ${location.hash == '' || location.hash == '#/choose' ? `` : `<a data-set="back" href="#/choose">Back</a>`}
                </div>
                 ${location.hash==''?'':`<a href="/#/test" data-set="test" class="btn__test"><p data-set="test">Test</p></a>`}
             </div>
            `);
        });
    }
}

export default Header;