import { Box, Heading, Link, Badge } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/works">
			<Link>Works</Link>
		</NextLink>

		<span>
			&nbsp;
			<ChevronRightIcon />
			&nbsp;
		</span>
		<Heading display="inline-block" as="h3" variant="" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
);

export const WorkImage = ({ src, alt }) => (
	<Image
		width={640}
		height={640}
		src={src}
		alt={alt}
		style={{ borderRadius: "12px", mb: 4 }}
	/>
);

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
);
