import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key:"AIzaSyANSJu5Z9ajeUnsTioG_vQrGJ4jPyToShQ" ,
    cx: "0448da101331a407a"
}



export const fetchDataFromApi = async (payload) => {
   
    const {data} = await axios.get(BASE_URL ,{
        params:{...params , ...payload}
    })
    return data;
};


// import axios from "axios";

// const BASE_URL = "https://www.googleapis.com/customsearch/v1";

// const params = {
//     key: "AIzaSyCCukJoZWcpTYnbyMKX3ExVa3S-VNTc53Y",
//     cx: "02e63429bd1ed46ffx",
// };

// export const fetchDataFromApi = async (payload) => {
//     const { data } = await axios.get(BASE_URL, {
//         params: { ...params, ...payload },
//     });
//     return data;
// };


