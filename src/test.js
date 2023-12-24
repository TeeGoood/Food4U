fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then(res => {
        console.log(res.headers.get('Content-Type'));
        res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })