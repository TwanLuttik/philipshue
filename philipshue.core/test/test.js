// const hue = require('../dist/index');
import hue from '../dist/index';
import Hue from '../dist/hue';

const h = new Hue();
h.bridge.connect();