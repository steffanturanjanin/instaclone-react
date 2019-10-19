export async function handleApiErrors (response) {
    /*console.log(response.json().then(promise => console.log(promise.errors)));
    if (!response.ok) throw Error(response.statusText);
    return response;*/

    /*if (!response.ok) {
       return response.clone().json().then(data => ({
            data: data,
            status: response.status})
        ).then(res => {return res.data.errors.password});

    }
    return response;*/
    if (!response.ok) {
        const errors = await response.json().then(json => {return json.errors});
        throw errors;
    }
    return response;
}
