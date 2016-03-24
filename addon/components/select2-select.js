import Ember from 'ember';
import layout from '../templates/components/select2-select';

export default Ember.Component.extend({
    layout: layout,
    config: {},
    classNames: ['select2-component'],

    setup: function() {
        let selectId = '#'+this.get('selectId');
        let $select = Ember.$(selectId);
        this.buildSelect2();
        $select.on('select2:select', () => {
            this.sendAction('action', $select.val(), 'select');
        });
        $select.on('select2:unselect', () => {
            this.sendAction('action', $select.val(), 'unselect');
        });
    }.on('didInsertElement'),

    formatSelection: function(item) {
        let label = Ember.$(item.element).attr('data-label');
        return (label && !item.loading) ? label : item.text;
    },

    formatResult: function(item) {
        // hide already selected items
        if (item.element && item.element.selected) {
            return null;
        }
        return (item.loading || !item.element) ? item.text : item.element.innerHTML;
    },

    buildSelect2: function() {
        let config = {
            templateSelection: this.formatSelection,
            templateResult: this.formatResult,
        };
        if (this.get('config')) {
            config = Object.assign(config, this.get('config'));
        }
        Ember.$('#'+this.get('selectId')).select2(config);
        this.sendAction('build');
    }.observes('items.@each.selected', 'items.@each.id'),

    teardown: function() {
        Ember.$('#'+this.get('selectId')).select2('destroy');
    }.on('willDestroyElement')
});
