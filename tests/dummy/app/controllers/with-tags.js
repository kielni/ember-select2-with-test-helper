import Ember from 'ember';
import Demo from '../mixins/demo';

export default Ember.Controller.extend(Demo, {
    config: {
        tags: true,
        multiple: true,
        placeholder: 'Select some items or type to add more',
        width: '400px'
    },
});
