/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const ObjectContainsProperty = require('./rules/object-contains-property');
const SchemaContainsRequiredFields = require('./rules/schema-contains-required-fields');
const AdditionalPropertiesRequired = require('./rules/additional-properties-required');
const StringParamValidations = require('./rules/string-param-validations');
const BooleanParamValidations = require('./rules/boolean-param-validations');
const IdParamValidations = require('./rules/id-param-validations');

const id = 'schema-validations';

/** @type {import('@redocly/cli').CustomRulesConfig} */
const rules = {
  oas2: {
    'object-contains-property': ObjectContainsProperty,
    'schema-contains-required-fields': SchemaContainsRequiredFields,
    'additional-properties-required': AdditionalPropertiesRequired,
    'string-param-validations': StringParamValidations,
    'boolean-param-validations': BooleanParamValidations,
    'id-param-validations': IdParamValidations
  },
};

module.exports = {
  id,
  rules,
};