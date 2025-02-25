import { Protect } from '@clerk/nextjs'

export default function Orders(){
	return(
		<>
			<button>Current Weather</button>
			<Protect
      	role="org:admin"
      	fallback={<p>You do not have the permissions to get a 4 day forecast.</p>}
    	>
				<button>9AM PT Forecast for Next 4 Days</button>
			</Protect>
			<button>Hourly Weather</button>
		</>
	)
}