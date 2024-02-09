import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='Spotify Clone'>
      <Container>
        <Title>
          Spotify Clone <Badge>2024</Badge>
        </Title>
        <Paragraph>
          A beautiful and robust spotify clone to listen to your fav songs. It
          supports authentication using various providers and forgot password
          functionality. It also supports uploading a song subscribing to stripe
          specific plan.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://spotify-clone-87132wj7w-abdullah048.vercel.app/'>
              https://spotify-clone.vercel.app/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next 13, React, Supabase, tailwindCss, Stripe, Stripe-Webhooks
            </span>
          </ListItem>
        </List>
        <WorkImage src='/images/spotify-main.png' alt='1'></WorkImage>
        <WorkImage src='/images/spotify-auth.png' alt='2'></WorkImage>
        <WorkImage src='/images/spotify-player.png' alt='3'></WorkImage>
        <WorkImage src='/images/spotify-liked.png' alt='4'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
