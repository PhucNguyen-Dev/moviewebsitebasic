const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0acd0403df54e49abe3f74e501ce07b1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

