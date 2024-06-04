/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let testObj = {...obj};
    const result = Object.fromEntries(
        Object.entries(testObj).filter(([key, value]) => fields.includes(key))
    );
    return result;
};
