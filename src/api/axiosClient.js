import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjNAB9s2xFbS_d_n9hf1hXXMMh9DyYoA-3HMCRoWfCUafxD07devWx8k_eOQlh1WDPwE21kc-fOS71miS2POH1cggHP4DLSgXB4K6A-94t9rQxT2WSGQjSi8l7XN6s0p31JRUKs5-0w_uHtYQZWdA6HDQpq-qqQ1aSAxRy6bC2jTRNuA62jdHSRH3rwLH1QQePaJsiQNlNwj6utIQe6MTORlfoUd5yH1cIe7PUsVJZCUlmppz16tYGHHT6kwOLoQ56dYyNtYF3yj7xwPgYPVjY6vUgwnw&lib=MZPQ3h-hRBnZPYvUZy9J6RP55L4N5BRKM",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClient;
