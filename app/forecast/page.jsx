// 50.0697° N, 122.9466° W

const buttonCSS = "bg-blue-600 text-white px-4 py-8 rounded-2xl min-h-32 max-w-64 hover:bg-blue-800 hover:scale-105 transition delay-100 duration-300"

function Forecast(){
	return (
		<div className="grid grid-cols-2 gap-4">
			<button className="bg-blue-600 text-white px-4 py-8 rounded-2xl max-w-64 hover:bg-blue-800 hover:scale-105 transition delay-100 duration-300">
            Current Weather
      </button>
			<button className="bg-blue-600 text-white px-4 py-8 rounded-2xl max-w-64 hover:bg-blue-800 hover:scale-105 transition delay-100 duration-300">
            Saturday Forecast
      </button>
		</div>
	)
}

export default Forecast;