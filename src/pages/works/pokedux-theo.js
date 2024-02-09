import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='Pokemon voting site - (Pokedux)'>
      <Container>
        <Title>
          Pokedux <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A fun project to learn about pokemon and vote for the roundest pokemon
          🚀.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://pokexu-theo.vercel.app/'>
              https://pokexu-theo.vercel.app/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next 12, React, neon db, tailwindCss, trpc, Prisma</span>
          </ListItem>
        </List>
        <WorkImage src='/images/pokedux-main.png' alt='1'></WorkImage>
        <WorkImage src='/images/pokedux-result.png' alt='2'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
