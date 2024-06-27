'use client'

import { Flex, Text, useBreakpoint } from '@yamada-ui/react'
import Image from 'next/image'

export default function MoblieHeader() {
	const breakpoint = useBreakpoint()

	if (breakpoint !== 'sm') {
		return null
	}

	return (
		<Flex as="header" justifyContent="center" p="md">
			<Image src="/logo.png" alt="logo" width={34} height={34} />
			<Text textAlign="center" my="auto" mx="sm" fontWeight="bold">
				Real-life locations
			</Text>
		</Flex>
	)
}
