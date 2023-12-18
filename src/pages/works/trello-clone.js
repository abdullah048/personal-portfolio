import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='Weather App'>
      <Container>
        <Title>
          Trello Clone <Badge>2023</Badge>
        </Title>
        <Paragraph>
          A beautiful and interactive trello clone with drag and drop
          functionality.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://65807cf724919b6d35d897a6--comforting-longma-29214d.netlify.app/'>
              https://www.craftzfox.trello-clone-2.0.com/{' '}
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next 13, Tailwind CSS, Appwrite Cloud, React-beautiful-dnd,
              Zustand, React
            </span>
          </ListItem>
        </List>
        <WorkImage src='/images/trello-clone-main.png' alt='1'></WorkImage>
        <WorkImage src='/images/trello-clone-1.png' alt='2'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
