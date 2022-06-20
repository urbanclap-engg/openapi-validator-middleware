/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const { includes, isEmpty } = require("lodash");

/** @type {import('@redocly/cli').OasRule} */
function SchemaContainsRequiredFields () {
  return {
    Schema (schema, { report, location }) {
      if (includes(schema.type, 'object')) {
        const required = schema.required;
        if (isEmpty(required)) {
          report({
            message: `Schema is missing required fields.`,
            location: location.key()
          })
        }
      }
    }
  }
};

module.exports = SchemaContainsRequiredFields