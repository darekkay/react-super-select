var multiple = require('./properties/multiple'),
    searchable = require('./properties/searchable'),
    tags = require('./properties/tags'),
    clearable = require('./properties/clearable'),
    clearSearchLabelString = require('./properties/clearSearchLabelString'),
    clearSelectionLabelString = require('./properties/clearSelectionLabelString'),
    customClass = require('./properties/customClass'),
    customGroupHeadingClass = require('./properties/customGroupHeadingClass'),
    customSearchIconClass = require('./properties/customSearchIconClass'),
    customLoaderClass = require('./properties/customLoaderClass'),
    customTagClass = require('./properties/customTagClass'),
    onChange = require('./properties/onChange'),
    ajaxDataFetch = require('./properties/ajaxDataFetch'),
    dataSource = require('./properties/dataSource'),
    initialValue = require('./properties/initialValue'),
    optionLabelKey = require('./properties/optionLabelKey'),
    optionValueKey = require('./properties/optionValueKey'),
    pageDataFetch = require('./properties/pageDataFetch'),
    hasMorePages = require('./properties/hasMorePages'),
    groupBy = require('./properties/groupBy'),
    customGroupHeadingTemplateFunction = require('./properties/customGroupHeadingTemplateFunction'),
    customFilterFunction = require('./properties/customFilterFunction'),
    customOptionTemplateFunction = require('./properties/customOptionTemplateFunction'),
    ajaxErrorString = require('./properties/ajaxErrorString'),
    noResultsString = require('./properties/noResultsString'),
    placeholder = require('./properties/placeholder'),
    searchPlaceholder = require('./properties/searchPlaceholder'),
    tagRemoveLabelString = require('./properties/tagRemoveLabelString');

var allProps = [
  multiple,
  searchable,
  tags,
  clearable,
  clearSearchLabelString,
  clearSelectionLabelString,
  customClass,
  customGroupHeadingClass,
  customSearchIconClass,
  customLoaderClass,
  customTagClass,
  onChange,
  ajaxDataFetch,
  dataSource,
  initialValue,
  optionLabelKey,
  optionValueKey,
  pageDataFetch,
  hasMorePages,
  groupBy,
  customGroupHeadingTemplateFunction,
  customFilterFunction,
  customOptionTemplateFunction,
  ajaxErrorString,
  noResultsString,
  placeholder,
  searchPlaceholder,
  tagRemoveLabelString
];

module.exports = allProps;
