import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import page from '../pages/demo';

moduleForAcceptance('Acceptance | with tags', {
    afterEach: function() {
        
    }
});

test('visiting /with-tags', function(assert) {
    page.visit({page: 'with-tags'});

    andThen(function() {
        assert.equal(page.selectedCount, 1, '1 selected');
        assert.equal(find('#selectWithTags option').length-1, page.displayedOptionCount(), 'selected item not displayed');
        page.selectByTitle('Cantaloupe');
    });

    andThen(function() {
        assert.equal(page.selectedCount, 2, '2 selected');
        page.addTag('Watermelon');
    });

    andThen(function() {
        assert.equal(page.selectedCount, 3, '3 selected');
        page.deselectByTitle('Cantaloupe');
    });

    andThen(function() {
        assert.equal(page.selectedCount, 2, '2 selected');
    });
});
