export const FETCH_VALIDATION_RULES = 'FETCH_VALIDATION_RULES';

export const fetchValidationRules = (rules) => ({
  type: FETCH_VALIDATION_RULES,
  payload: rules,
});