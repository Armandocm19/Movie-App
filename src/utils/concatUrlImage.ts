

const concatUrlImage = {

    baseUrl: 'https://image.tmdb.org/t/p/original',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w185Image: (imgPath) => `https://image.tmdb.org/t/p/w185/${imgPath}`

}

export default concatUrlImage;