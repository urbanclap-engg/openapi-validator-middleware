/*
Modified by “UrbanClap Technologies India Pvt. Ltd.”
Change: Add custom schema validation rules.
Date: May 12, 2022
*/
const { includes, isUndefined } = require('lodash');

/** @type {import('@redocly/cli').OasRule} */
function IdParamValidations () {
  return {
    Schema (schema, ctx) {
        const fieldName = ctx.key.toString();
        const pattern = schema.pattern;
        const minLength = schema.minLength;
        const maxLength = schema.maxLength;
        if (fieldName.endsWith('id') || fieldName.endsWith('Id')) {
            if (includes(schema.type, 'string') && ( isUndefined(pattern) || isUndefined(minLength) || isUndefined(maxLength))) {
                ctx.report({
                    message: `ID parameters should have 'pattern', 'minLength', and 'maxLength' field defined.`,
                    location: ctx.location.key()
                });
            }
        }
    }
};
}

module.exports = IdParamValidations