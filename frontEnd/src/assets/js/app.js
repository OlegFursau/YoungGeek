 // * import
 import { parseRequestURL } from './helper/utils';
 import Header from './views/patrials/header';
 import Home from './views/pages/path_Pages/home';
 import StartPage from './views/pages/path_Pages/startPage';
 import Error404 from './views/pages/error404';
 import BlockTaskEnglish from './views/pages/path_Pages/blockEnglishkTask';
 import BlockMathTask from './views/pages/path_Pages/blockMathTask';
 import BlockTest from './views/pages/path_Pages/blockTest';
 import Footer from './views/patrials/footer';

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
             footer = new Footer(),
             request = parseRequestURL(),
             parsedURL = `${request.resourse||''}`,
             page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

         header.render().then(html => {
             headerBlock.innerHTML = html;
             header.afterRender();

         });

         footer.render().then(html => footerBlock.innerHTML = html);
         page.getResponseServer().then(response => {
             page.render(response).then(html => {
                 mainBlock.innerHTML = html;
                 page.afterRender();

             });

         });

     }
     location.hash == '' ? window.addEventListener('load', () => {
             setTimeout(router, 9500)
         }) :
         window.addEventListener('load', router);

     window.addEventListener('hashchange', router);

 });