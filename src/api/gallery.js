import request from "@/utils/request";

export const getProducts = () =>
    request({
        url:"http://mudrenok.somee.com/api/Jewelry", //<= gallery api url
        method: "get"
    });
