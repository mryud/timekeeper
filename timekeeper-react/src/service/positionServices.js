import Api from "./api"

const list=()=>{
    const getlist="list";
    return Api.get(Api.url.Position+getlist);
};




export default{
    list: list,

};