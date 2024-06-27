'use client'

import ReactMapbox from 'react-map-gl'

export default function Mapbox() {
	return (
		<ReactMapbox
			id="map"
			initialViewState={{
				longitude: 139.636814,
				latitude: 35.443098,
				zoom: 15,
			}}
			style={{ width: '100%', height: '100vh' }}
			mapStyle="mapbox://styles/mapbox/streets-v11"
			mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? ''}
		/>
	)
}
