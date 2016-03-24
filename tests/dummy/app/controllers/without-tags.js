import Ember from 'ember';
import Demo from '../mixins/demo';

export default Ember.Controller.extend(Demo, {
    config: {
        tags: false,
        multiple: true,
        placeholder: 'Select some items',
        width: '400px'
    },
});
