/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const { includes, isEmpty } = require("lodash");

/** @type {import('@redocly/cli').OasRule} */
function ObjectContainsProperty () {
  return {
    Schema (schema, { report, location }) {
      if (includes(schema.type, 'object')) {
        const properties = schema.properties;
        if (isEmpty(properties)) {
          report({
            message: `Schema of type 'object' must have properties field defined.`,
            location: location.child('properties'),
          });
        }
      }
    }
  }
};

module.exports = ObjectContainsProperty