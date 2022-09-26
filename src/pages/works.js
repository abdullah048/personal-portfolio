import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGrid } from "../../components/grid-item";
import Section from "../../components/section";
import alpsThumbnail from "../../public/images/alpsfashion.jpeg";
import portThumbnail from "../../public/images/portfolio.jpeg";
import pokeduxThumbnail from "../../public/images/pokedux.jpeg";
// import todoLisThumbnail from "../../public/images/todo-list.png";
// import timerThumbnail from "../../public/images/timer.png";
import netflixThumbnail from "../../public/images/netflix.jpeg";
import craftzGymThumbnail from "../../public/images/craftz-gym.png";
import ecommerceThumbnail from "../../public/images/home.png";
import chatThumbnail from "../../public/images/login.png";
import portfolioWebsiteV2Thumbnail from '../../public/images/picture-1.png'
// import rnmailMain from "../../public/images/rnmail-main.jpeg";
import Layout from "../../components/layout/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGrid
              id="alpsfashion"
              title="Alpsfashion"
              thumbnail={alpsThumbnail}>
              An Ecommerce site.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id="portfolio-website"
              title="Portfolio-Website"
              thumbnail={portThumbnail}>
              A portfolio Website.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid id="pokedux" title="Pokedux" thumbnail={pokeduxThumbnail}>
              A Pokemon voting site.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id="netflix-clone"
              title="Netflix-Clone"
              thumbnail={netflixThumbnail}>
              A Netflix Clone.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id="gym-website"
              title="Craftz-Gym"
              thumbnail={craftzGymThumbnail}>
              An Online Gym.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id="ecommerce-mern"
              title="Ecommerce Wesbite"
              thumbnail={ecommerceThumbnail}>
              An Ecommerce Website with vast functionality.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id="chat-firebase"
              title="Chat application"
              thumbnail={chatThumbnail}>
              A Chat application to have fun with your friends.
            </WorkGrid>
          </Section>
          <Section>
            <WorkGrid
              id="portfolioV2"
              title="Portfolio V2"
              thumbnail={portfolioWebsiteV2Thumbnail}>An Amazing portfolio for show casing your skills</WorkGrid>
          </Section>
        </SimpleGrid>

        {/*<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section>
						<WorkGrid
							id="todo-list"
							title="Todo List"
							thumbnail={todoLisThumbnail}>
							A Todo list app.
						</WorkGrid>
					</Section>
					<Section>
						<WorkGrid id="timer" title="Timer" thumbnail={timerThumbnail}>
							A Timer app.
						</WorkGrid>
					</Section>
					<Section>
						<WorkGrid id="rnmail" title="RNMail" thumbnail={rnmailMain}>
							A utility app with multiple themes.
						</WorkGrid>
					</Section>
				</SimpleGrid>*/}
      </Container>
    </Layout>
  );
};

export default Works;
