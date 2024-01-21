import styled from "styled-components";
import media from "../layout/media";
import Hero from "../components/Hero";
import Picture from "../components/Picture";
import Balance from '../assets/images/balance.jpg';
import GridText from "../components/GridText";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.md`
    grid-template-columns: 1fr;
  `};
`;

const About = () => {
  return (
    <Container>
      <Hero text='Specify IT'></Hero>
      <Picture picture={Balance} ></Picture>
      <GridText vertical='start' text={`
      Vi ser att det behövs en harmoni i arbetslivet där både arbetstagare och arbetsgivare ska kunna få ut så mycket som möjligt.
      Specify IT bildades därför 2015 där vi såg ett behov av att kunna erbjuda både helhetslösningar åt kunder.
      Men också att kunna hjälpa egenföretagare eller de som vill ta steget till att bli egenföretagare.`} ></GridText>
    </Container>
  );
}

export default About;

// Om oss
// Vi bildades 2015 för att tillsammans erbjuda en nära, kunnig och anpassad konsulttjänst inom ekonomi, systemutveckling, projektledning och rådgivning.

// Vi sitter där ni finns eller där det passar er bäst, på kontoret eller på distans.

// Vi finns här för era behov och hjälper mer än gärna till där det behövs inom våra områden.

// Org.nr.: 559044-5291

// Godkänd för F-skatt