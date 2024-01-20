import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGrid } from '../../components/grid-item';
import Layout from '../../components/layout/article';
import Section from '../../components/section';
import curatedListThumbnail from '../../public/images/craftz-fox-uses-main.png';
import craftzGymThumbnail from '../../public/images/craftz-gym.png';
import mernDashboardThumbnail from '../../public/images/main-dashboard.png';
import similarityAPIThumbnail from '../../public/images/similarity-main.png';
import trelloCloneThumbnail from '../../public/images/trello-clone-main.png';
import uiUxThumbnail from '../../public/images/ui-ux-app-main.png';
import weatherAppThumbnail from '../../public/images/weather-app-thumbnail.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGrid
              id='gym-website'
              title='Craftz-Gym'
              thumbnail={craftzGymThumbnail}>
              An Online Gym.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id='ui-ux-app'
              title='UI-UX-Template'
              thumbnail={uiUxThumbnail}>
              A UI-UX-Template.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id='craftzfox-uses'
              title='My Tech list'
              thumbnail={curatedListThumbnail}>
              My personal and favorite tech list.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id='mern-dashboard'
              title='MERN Dashboard'
              thumbnail={mernDashboardThumbnail}>
              Beautiful MERN Dashboard.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id='similarity-api'
              title='Similarity API Dashboard'
              thumbnail={similarityAPIThumbnail}>
              Beautiful and awesome api service.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id='weather-app'
              title='Weather App'
              thumbnail={weatherAppThumbnail}>
              Beautiful and awesome weather application.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id='trello-clone'
              title='Trello Clone'
              thumbnail={trelloCloneThumbnail}>
              Beautiful and interactive trello clone.
            </WorkGrid>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
