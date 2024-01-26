export const convertFormDataToObject = (formData: FormData): any =>{
    var formDataObject:any = {};

    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });
    return formDataObject;
}