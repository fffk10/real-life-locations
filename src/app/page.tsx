import { Button } from '@yamada-ui/react'

export default function Home() {
	const handleClick = () => {
		console.log('click')
	}
	return (
		<div>
			<Button>button</Button>
		</div>
	)
}
