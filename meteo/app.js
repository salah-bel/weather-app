const BASE_URL = "http://api.weatherapi.com/v1/current.json"
const API_KEY = "deadab80fe744c38b88104543231403"

// fetch("http://api.weatherapi.com/v1/current.json?key=deadab80fe744c38b88104543231403&q=43.4804,5.1685")
fetch("http://api.weatherapi.com/v1/current.json?key=deadab80fe744c38b88104543231403&q=Paris&lang=Fr")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let city = data.location.name
        let temp = data.current.temp_c
        let imgUrl = data.current.condition.icon
        let desc = data.current.condition.text
        console.log(data)

    })


// q = 48.8567, 2.3508


{
    /* <h1>
                <span>Marseille </span>
                <strong>18° C</strong>
            </h1>
            <img src="https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_1280.png" alt="" width="60px">
            <h2>Nuageux</h2> */
}