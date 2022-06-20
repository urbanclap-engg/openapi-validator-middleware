/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const { includes, isUndefined } = require("lodash");

/** @type {import('@redocly/cli').OasRule} */
function AdditionalPropertiesRequired () {
  return {
    Schema (schema, { report, location }) {
      if (includes(schema.type, 'object')) {
        const additionalProperties = schema.additionalProperties;
        if (isUndefined(additionalProperties)) {
          report({
            message: `Schema is missing additionalProperties field.`,
            location: location.key(),
          });
        }
      }
    }
  }
};

module.exports = AdditionalPropertiesRequired