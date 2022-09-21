// import hbs from '@anikin/parcel-transformer-handlebars';
import hbs from 'handlebars';
import page404 from './pages/404.tmp';

const data = {
  name: 'Aleks'
};

const template = hbs.compile(page404);
const html = template(data);

const rootNode = document.querySelector('#root');
rootNode.innerHTML = html;
