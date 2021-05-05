import request from "../utils/request";
const endpoint = "https://content.guardianapis.com/";

export function callApiGetNews(orderBy = "newest", sports = false) {
    let query = `search?show-fields=thumbnail,body&order-by=${orderBy}&page-size=15&api-key=test`;
    if (sports) query = `search?q=sport%2Cgolf%2Cfootball%2Ctennis%2C%20running&show-fields=thumbnail,body&order-by=${orderBy}&page-size=15&api-key=test`;
    console.log("query ", query);
    return request(`${endpoint}${query}`)
}

export function callApiGetNewsPaging(search, page = 1) {
    const query = `search?q=${search}&show-fields=thumbnail,body&page-size=15&page=${page}&api-key=test`;
    return request(`${endpoint}${query}`);
}
