// 50.0697° N, 122.9466° W
"use client" 
import { useEffect, useState, useActionState } from "react";

import Image from "next/image";

import Typewriter from "../ui/typewriter/typewriter";

import { getForecast } from "@/lib/actions";

function Forecast(){
	const [pageMode, setPageMode] = useState('selectForecast')

	// const [selectedForecast, setSelectedForecast] = useState('');

	// useActionState to securely retrieve data from server component via server action
  const [forecast, formAction, isPending] = useActionState(
    getForecast,
    undefined
  );

	// update page state upon forecast loading
	useEffect(() => {
    if (!isPending && forecast !== undefined) {
      console.log(forecast)
			setPageMode("showForecast");
    }
  }, [forecast, isPending]);

	console.log('forecast = ' + forecast);

	if (pageMode === 'selectForecast') {
		return (
			<>
				<Image
					src="/mountains.png"
					width={300}
					height={300}
					alt="mountains outline"
				/>
				<div className="grid grid-cols-2 gap-4 mt-10">
					<form action={formAction}>
						<button 
							className="bg-blue-600 text-white px-4 py-8 rounded-2xl w-64 hover:bg-blue-800 hover:scale-105 transition delay-100 duration-300"
						>
									Current Weather
						</button>
					</form>
					<form>
						<button className="disabled bg-blue-600 text-white px-4 py-8 rounded-2xl w-64 hover:bg-blue-800 hover:scale-105 transition delay-100 duration-300">
									Disabled Button
						</button>
					</form>
				</div>
			</>	
		)
	}	

	if (pageMode === 'showForecast'){
		return (
			<div className="text-3xl flex flex-col space-y-4">
				<p>{forecast[0].current.temp + " degrees celsius"}</p>
				<p>{forecast[0].current.wind_speed + " wind speed km/h"}</p>
				<p>{forecast[0].current.weather[0].description}</p>
			</div>
		)
	}
}

export default Forecast;

{/* <p>{forecast.current.temp} centigrade</p>
				<p>{forecast.current.visibility} meters</p>
				<p>{forecast.current.clouds}%</p>
				<p>{forecast.current.wind_speed}kmh</p>
				<p>{forecast.current.weather.description}</p> */}