import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import page from '../pages/demo';

moduleForAcceptance('Acceptance | without tags');

test('visiting /without-tags', function(assert) {
    page.visit({page: 'without-tags'});

    andThen(function() {
        assert.equal(page.selectedCount, 1, '1 selected');
        page.typeTag('Broccoli');
    });

    andThen(function() {
        assert.equal(page.searchResultsText(), 'No results found', 'add new shows no results');
        page.typeTag('g');
    });

    andThen(function() {
        assert.equal(page.searchResultsCount(), 3, '3 matching results');
    });
});
