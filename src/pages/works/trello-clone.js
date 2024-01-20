import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import Layout from '../../../components/layout/article';
import { Title, WorkImage, Meta } from '../../../components/work';
import Paragraph from '../../../components/paragraph';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Work = () => {
  return (
    <Layout title='Trello Clone'>
      <Container>
        <Title>
          Trello Clone <Badge>2023</Badge>
        </Title>
        <Paragraph>
          An appealing and fully functional website with full drag-and-drop
          functionality.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://65807cf724919b6d35d897a6--comforting-longma-29214d.netlify.app/'>
              https://trello-clone-2023.netlify.app/{' '}
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next 13, React beautiful dnd, tailwindCss, Headless UI, Appwrite
              Cloud, Zustand
            </span>
          </ListItem>
        </List>
        <WorkImage src='/images/trello-clone-main.png' alt='1'></WorkImage>
        <WorkImage src='/images/trello-clone-modal.png' alt='2'></WorkImage>
        <WorkImage src='/images/trello-clone-dnd.png' alt='2'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
