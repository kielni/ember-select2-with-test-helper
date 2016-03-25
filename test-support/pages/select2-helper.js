import PageObject from '../page-object';
/*
    This is a set of helpers for pages that contain a select2-select; it's not a full page object.
    To add these to a page object:

        import Select2Helper from './select2-helper';
        let myPage = {
            // page methods
        };
        export default PageObject.create(_.extend(myPage, Select2Helper));
*/
export default {
    displayedOptionCount() {
        // open dropdown
        $('.select2-container input').click();
        // can't use count helper because .select2-results is outside the testing container
        let count = $('.select2-results__options li:visible').length;
        // close dropdown
        $('.select2-container input').click();
        return count;
    },
    selectByTitle(title) {
        $('.select2-container input').click();
        // can't use click helper because .select2-results is outside the testing container
        $('.select2-results li[title="%@"]'.fmt(title)).trigger('mouseup');
    },
    deselectByTitle(title) {
        $('.select2-selection__choice[title="%@"] .select2-selection__choice__remove'.fmt(title)).click();
    },
    addTag(value) {
        $('.select2-container input').val(value);
        $('.select2-search--inline').trigger({type: 'input.search'});
        $('.select2-results li:first').trigger('mouseup');
    },
    typeTag(tag) {  // type but don't select
        $('.select2-container input').val(tag);
        $('.select2-search--inline').trigger({type: 'input.search'});
    },
    selectedCount: PageObject.count('.select2-selection__choice'),
    searchResultsText() {
        // can't use text helper because .select2-results is outside the testing container
        return $('.select2-results .select2-results__message').text().trim();
    },
    searchResultsCount() {
        // can't use text helper because .select2-results is outside the testing container
        return $('.select2-results__options li:visible').length;
    },
};
