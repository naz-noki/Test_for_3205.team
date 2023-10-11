export default (string:string):boolean => {
    if(string.length === 0) return true;
    if(string.length !== 6) return false;
    const numbersList:string = '1234567890';
    for(const str of string) {
        if(!numbersList.includes(str)) return false;
    };
    return true;
};