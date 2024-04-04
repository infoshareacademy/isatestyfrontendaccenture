export const getValueAsPromise = (value) => Promise.resolve(value);

export const rejectValueAsPromise = (value) => Promise.reject(value);

export const isValueValid = async (value) => {
    const isValid = await new Promise((resolve) => {
        if (value > 10) return resolve(true);
        else return resolve(false)
    })

    return isValid;
}