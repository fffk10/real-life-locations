import { Box, Container, Flex } from '@yamada-ui/react'
import type { ReactNode } from 'react'
import MobileHeader from '../features/layout/mobile-header'
import SideNavigation from '../features/layout/side-navigaton'

export default function MapPageLayout({ children }: { children: ReactNode }) {
	return (
		<Box>
			<MobileHeader />

			<Flex w="full">
				<SideNavigation />
				<Container>{children}</Container>
			</Flex>
		</Box>
	)
}
