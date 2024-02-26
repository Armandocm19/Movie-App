

export const formatDate = ( releaseDate: string ) => {
    const newFormatDate = new Date(releaseDate).toLocaleDateString('en-us', { day:"numeric", year:"numeric", month:"short"});

    return newFormatDate;
}