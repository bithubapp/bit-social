import '../src/bit-social';
import template from './demo.stache!';
import 'font-awesome/less/font-awesome.less!'; 
import data from 'data';

document.body.appendChild(template({data: data}));
