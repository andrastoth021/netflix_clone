/*
The function's purpose is to convert the form data into a JavaScript object for easier manipulation or submission to a server.
*/

export const getAndFormatFormData = (data: any) => {
    const formData = [...new FormData(data).entries()];

    return formData.reduce((acc: any, curr) => {
        const [key, value] = curr;
        acc[key] = value;
        return acc;
    }, {});
};
