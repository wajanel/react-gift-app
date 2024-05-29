
export const funcionFetchGifs = async category => {
    const apiKey = '8Ah5sXvWqwDvzICNRdMpUAyZ5h8WxlXk';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`)
    const { data = []} = await resp.json(); 

    const gifs = data.map( img => ({
        id:img.id,
        title:img.title,
        imagen:img.images.downsized_medium.url
    }))

    return gifs;
}