import { Box, Container, Heading } from "@chakra-ui/react";

export default function Home() {
	return (
		<Container>
			<Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
				Hello I&apos;m a full stack developer based in Pakistan!
			</Box>
			<Box display={{ md: `flex` }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Abdullah Shahbaz
					</Heading>
					<p>Full stack cross platform developer. </p>
				</Box>
			</Box>
		</Container>
	);
}
