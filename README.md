# Ember select2 with test helper

This repo contains an Ember component wrapper for the [select2 select box](https://select2.github.io/), and a 
[page object](http://ember-cli-page-object.js.org/) test helper to make it easy to test in acceptance tests.

## installation

    ember install ember-select2-with-helper

This will install the `select2-select` component, and copy `select2-helper.js` to your app's `tests/pages` directory.

## component

sample usage:

    {{#select2-select
        action="onChangeSelect"
        config=config
        items=items
        selectId="mySelect"
    }}
        <select id="mySelect">
        {{#each items as |item|}}
            <option value="{{item.id}}" selected={{item.selected}} data-label="{{item.label}}">
                {{item.label}}
            </option>
        </select>
    {{/select2-select}}


_action_ will be called whenever a user selects or deselects with two paramters: an array of currently selected values, and a string describing the action ("select" or "deselect")

_config_ is a hash of settings passed to select2; see the [select2 documentation](https://select2.github.io/examples.html)

example: `{tags: true, multiple: true, placeholder: 'Select some items'}`

_items_ is an array of objects with `id`, `text`, and (optional) `selected` properties.  The Ember component needs the list of items to redraw the component if the items change.


example: `[{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug', selected: true }, ... ]`

_selectId_ is the id of the select element to select2-ize; this must match the `selectId` param

if `data-label` is set on option elements, use this value in the selected items chip.

if `option` elements contain HTML, override the `escapeMarkup` function as needed

## test helper

### setup

generate a page object for your page:

    ember generate page-object my-page

in the page object file, import the select2 test helper:

    import Select2Helper from './select2-helper';

define your page object, then add in the select2 helpers:

    let MyPage = {
        visit: visitable('/:page'),
        ....
    };

    export default PageObject.create(Object.assign(Demo, Select2Helper));

### usage

use the select2 helper methods in your test as your would any other:

    andThen(function() {
        assert.equal(page.selectedCount, 1, '1 selected');
        page.selectByTitle('Cantaloupe');
    });

    andThen(function() {
        assert.equal(page.selectedCount, 2, '2 selected');
    });

see the [sample acceptance tests](tests/acceptance) for more details

