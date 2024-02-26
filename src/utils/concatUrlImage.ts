

const concatUrlImage = {
    baseUrl: 'https://image.tmdb.org/t/p/original',
    originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w185Image: (imgPath: string) => `https://image.tmdb.org/t/p/w185/${imgPath}`

}

export default concatUrlImage;