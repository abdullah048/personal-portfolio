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
          Weather App <Badge>2023</Badge>
        </Title>
        <Paragraph>A beautiful and awesome weather application.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://weather-app-abdullah048.vercel.app/'>
              https://www.weatherapp.com/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next 13, Tailwind CSS, Tremor2.0, StepZen, Graphql, React
            </span>
          </ListItem>
        </List>
        <WorkImage src='/images/weather-app-thumbnail.png' alt='1'></WorkImage>
        <WorkImage src='/images/weather-app-1.png' alt='2'></WorkImage>
      </Container>
    </Layout>
  );
};
export default Work;
