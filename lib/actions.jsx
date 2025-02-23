// add getForecast
// 50.0697° N, 122.9466° W

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
"use server"


export async function getForecast(){
	try {

		console.log('In get forecast');
		const res = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat=50.0697&lon=-122.9466&units=metric&exclude=minutely,hourly,daily&appid=' + process.env.OPEN_WEATHER_API_KEY)
		const json = await res.json();
		return ([json]);

	} catch (error) {
		console.error(error.message);
	}
}

