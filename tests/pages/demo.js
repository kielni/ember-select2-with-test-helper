/*
in an app:
import PageObject from '../page-object';

but that doesn't work in an addon
see https://github.com/san650/ember-cli-page-object/issues/61
*/
import PageObject from 'dummy/tests/page-object';
/*
installing this addon will copy test-support/pages/select2-helper to tests/pages
*/
import Select2Helper from './select2-helper';

let {
    visitable, count
} = PageObject;

let Demo = {
    visit: visitable('/:page'),
    updateCount: count('#log ul li')
};

export default PageObject.create(Object.assign(Demo, Select2Helper));
