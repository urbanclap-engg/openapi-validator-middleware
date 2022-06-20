/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const { includes, chain } = require('lodash');

/** @type {import('@redocly/cli').OasRule} */
function BooleanParamValidations (options) {
  return {
    Schema (schema, ctx) {
      const allowedPrefix = options.allowedPrefix;
      if (includes(schema.type, 'boolean')) {
        const fieldName = ctx.key;
        const isPrefixValid = chain(allowedPrefix)
        .some((prefix) => fieldName.startsWith(prefix))
        .value();
        if (!isPrefixValid) {
            ctx.report({
                message: `Boolean parameter name should start from either ${allowedPrefix}`,
                location: ctx.location.key()
            });
        }
    }
  }
};
}

module.exports = BooleanParamValidations