/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const { some, includes, chain, uniq, every } = require('lodash');

/** @type {import('@redocly/cli').OasRule} */
function StringParamValidations (options) {
  return {
    Schema (schema, { report, location }) {
      if (includes(schema.type, 'string')) {
        const mustExistFields = options.mustExistFields || [];
        const requiredFieldMultiDimensionArray = chain(mustExistFields)
                                    .map((field) => field.split('|'));
        const allPossibleFields = uniq(requiredFieldMultiDimensionArray.flatten().value());
        
        if (some(Object.keys(schema), (key) => key !== 'type' && !includes(allPossibleFields, key))) {
            report({
                message: `String parameter schema must only contain fields from ${allPossibleFields}`,
                location: location.key()
            });
        } 
        const found = some(requiredFieldMultiDimensionArray.value() , (i) => {
            return every(i, (key) => includes(Object.keys(schema), key));
        }); 
        if (!found) {
            report({
                message: `String parameter should contain one of ${JSON.stringify(mustExistFields)}`,
                location: location.key()
            });
        }
    }
  }
};
}

module.exports = StringParamValidations