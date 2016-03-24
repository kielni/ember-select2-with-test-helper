import PageObject from 'ember-select2-with-test-helper/tests/page-object';

let {
  visitable
} = PageObject;

export default PageObject.create({
  visit: visitable('/')
});
