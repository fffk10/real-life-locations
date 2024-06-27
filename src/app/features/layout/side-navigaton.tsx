'use client'

import { Box, Flex, Text, useBreakpoint } from '@yamada-ui/react'
import Image from 'next/image'

export default function SideNavigation() {
	const breakpoint = useBreakpoint()

	if (breakpoint === 'sm' || breakpoint === 'xs') {
		return null
	}

	return (
		<Flex flexDirection="column" w="md" h="100vh">
			<Box>
				<Flex justifyContent="center" my="md">
					<Image src="/logo.png" alt="logo" width={34} height={34} />
					<Text textAlign="center" my="auto" mx="sm" fontWeight="bold">
						Real-life locations
					</Text>
				</Flex>

				<Flex
					as="nav"
					flexDirection="column"
					justifyContent="space-between"
					color="gray.600"
				>
					<Box as="ul" listStyleType="none" p="lg">
						<Box as="li" my="sm">
							<Text fontSize="sm" fontWeight="bold">
								Locations
							</Text>
						</Box>
						<Box as="li" my="sm">
							<Text fontSize="sm" fontWeight="bold">
								Locations
							</Text>
						</Box>
						<Box as="li" my="sm">
							<Text fontSize="sm" fontWeight="bold">
								Locations
							</Text>
						</Box>
						<Box as="li" my="sm">
							<Text fontSize="sm" fontWeight="bold">
								Locations
							</Text>
						</Box>
						<Box as="li" my="sm">
							<Text fontSize="sm" fontWeight="bold">
								Locations
							</Text>
						</Box>
					</Box>
				</Flex>
			</Box>

			<Box color="gray.600" mt="auto" p="lg">
				<Text fontSize="sm" textAlign="center">
					© 2021 Real-life locations
				</Text>
			</Box>
		</Flex>
	)
}
