import Error404 from "../views/pages/error404";

class Task {


    getEnglishArr() {
        return fetch('http://localhost:5000/api/english')
            .then(res => {
                return res.text();
            }).then(res => {
                return JSON.parse(res);
            }).catch(() => {
                this.showError404();
            });

    }


    getMathArr() {
        return fetch('http://localhost:5000/api/math')
            .then(res => {
                return res.text();
            })
            .then(res => {
                return JSON.parse(res);
            }).catch(() => {
                this.showError404();
            });


    }

    getCartoonsArr() {
        return fetch('http://localhost:5000/api/cartoons')
            .then(res => {

                return res.text();
            })
            .then(res => {
                return JSON.parse(res);
            }).catch(() => {
                this.showError404();
            });
    }

    showError404() {
        const mainBlock = document.getElementById('001');
        new Error404().render().then(html => {
            mainBlock.innerHTML = html;
        });
    }



}



export default Task;