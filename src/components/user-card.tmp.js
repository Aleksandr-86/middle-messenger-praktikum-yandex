import hbs from 'handlebars';
// import './card.css';

const template = `
<div class="user-card">я шаблон user-card!</div>
`;

hbs.registerPartial('userCard', template);
