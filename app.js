const inp=document.querySelector('#inp');
const btn=document.querySelector('#btn');
const div=document.querySelector('.weather');

btn.addEventListener('click', () => {
    console.log(inp.value);
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=717f64048aaa47b4902120653241811&q=${inp.value}&aqi=no`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        div.innerHTML = `
        <img id="img" src="https:${res.current.condition.icon}" alt="${res.current.condition.text}">
        <p id="tem">Temperature: ${res.current.temp_c}°C</p>
        <p id="con">Condition: ${res.current.condition.text}</p>
        <h1 id="name">Weather in ${res.location.name}, ${res.location.country}</h1>
        `;
        inp.value=""
        })
        .catch((err) => {
            console.log(err);
            div.innerHTML = `<p style="color: red;">Failed to fetch weather data. Please try again.</p>`;
        });
});


