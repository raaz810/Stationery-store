const getBaseUrl = () => {
    //return "https://skribb-backend.vercel.app"
    return "http://localhost:8000"
}

export default getBaseUrl;

// const getBaseUrl = () => {
//     return process.env.NODE_ENV === "development"
//         ? "http://localhost:8000"
//         : "https://skribb-backend.vercel.app";
// };

// export default getBaseUrl;
