import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c36fe14bfc944606934d0ce2b1dc74d6",
    }
})