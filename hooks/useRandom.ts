

export default (min: number, max: number, inclusive = false) => {
    let result;

    if (inclusive) {
        // Inclusive: includes both min and max
        result = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        // Exclusive: includes min but excludes max
        result = Math.floor(Math.random() * (max - min)) + min;
    }
    return result;
};
