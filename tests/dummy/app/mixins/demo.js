import Ember from 'ember';

export default Ember.Mixin.create({
    log: [],

    items: [
        {id: 1, label: 'Apple', count: 4},
        {id: 2, label: 'Banana', count: 2, selected: true},
        {id: 3, label: 'Cantaloupe', count: 1},
        {id: 4, label: 'Durian', count: 0},
        {id: 5, label: 'Eggplant', count: 3},
        {id: 6, label: 'Fig', count: 10},
        {id: 7, label: 'Grape', count: 25},
    ],

    activity: function() {
        return this.get('log');
    }.property('log.length'),

    actions: {
        onChangeSelect: function(value, action) {
            this.get('log').pushObject('%@ %@'.fmt(action, value));
        }
   }

});
