import type { ReactNode } from 'react'
import MobileHeader from '../features/layout/mobile-header'

export default function MapPageLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<MobileHeader />
			{children}
		</div>
	)
}
