 // * import
 import { parseRequestURL } from './helper/utils';
 import Header from './views/patrials/header';
 import Home from './views/pages/tasks/home';
 import StartPage from './views/pages/tasks/startPage';
 import Error404 from './views/pages/error404';
 import BlockTaskEnglish from './views/pages/tasks/blockTask';
 import BlockMathTask from './views/pages/tasks/blockMathTask';
 import BlockTest from './views/pages/tasks/blockTest';
 import Footer from './views/patrials/footer';
 import { returnArrEnglish } from './helper/utils'



 window.addEventListener('DOMContentLoaded', () => {

     const Routes = {
         '': Home,
         'choose': StartPage,
         'english': BlockTaskEnglish,
         'maths': BlockMathTask,
         'test': BlockTest,

     }

     function router() {
         const footerBlock = document.getElementsByClassName('footer')[0],
             headerBlock = document.getElementsByClassName('header')[0],
             mainBlock = document.getElementById('001'),
             header = new Header(),
             footer = new Footer();

         const request = parseRequestURL(),
             parsedURL = `${request.resourse||''}`,
             page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();


         header.render().then(html => {
             headerBlock.innerHTML = html
             header.afterRender()
         });

         footer.render().then(html => footerBlock.innerHTML = html);


         //!body
         page.render().then(html => {
             mainBlock.innerHTML = html;
             page.afterRender();


         });

     }

     location.hash == '' ?
         window.addEventListener('load', () => {
             setTimeout(router, 1)
         }) :
         window.addEventListener('load', router);


     window.addEventListener('hashchange', router);




 });