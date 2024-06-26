function refresh(){
    const api_url = 'https://api.quotable.io/random';

    async function getqute(url){
    const result = await fetch(url);
    const data = await result.json();
    // console.log(data);
    document.getElementById('author').innerHTML = data.author;
    document.getElementById('content').innerHTML = data.content;
}
getqute(api_url)


}


