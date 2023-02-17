fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=a6dc394`)
.then(res => res.json())
.then(data =>{
    console.log(data);
})