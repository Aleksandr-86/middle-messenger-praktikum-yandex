import hbs from '@anikin/parcel-transformer-handlebars';
import page404 from './pages/404.tmp';

const data = {
  name: 'Aleks'
};

const renderFunction = hbs.compile(page404);
const html = renderFunction(data);

const rootNode = document.querySelector('#root');
rootNode.innerHTML = html;
