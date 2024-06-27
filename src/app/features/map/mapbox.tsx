'use client'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Box } from '@yamada-ui/react'

export default function Mapbox() {
	mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? ''
	const mapContainer = useRef(null)
	const [map, setMap] = useState(null)

	useEffect(() => {
		const initializeMap = ({
			setMap,
			mapContainer,
		}: {
			setMap: any
			mapContainer: MutableRefObject<HTMLDivElement | null>
		}) => {
			if (!mapContainer.current) return

			const map = new mapboxgl.Map({
				container: mapContainer.current,
				center: [135.49597206006587, 34.702613241053534],
				zoom: 15,
				style: 'mapbox://styles/mapbox/streets-v12',
			})
			// 言語変更設定参考
			// defaultLanguageとしてjaを指定
			const language = new MapboxLanguage({ defaultLanguage: 'ja' })
			map.addControl(language)

			map.on('load', () => {
				setMap(map)
				map.resize()
			})
		}

		if (!map) initializeMap({ setMap, mapContainer })
	}, [map])

	return (
		<>
			<Box ref={mapContainer} w="full" h="100vh" />
		</>
	)
}
