import Picture from "../components/Picture";
import Balance from '../assets/images/about.jpg';
import GridText from "../components/grid-text/GridText";
import BaseGrid from "../base-styled-components/BaseGrid";
import Span from "../components/grid-text/Span";
import H2 from "../components/grid-text/H2";
import Section from "../components/Section";
import MatrixOverlay from "../components/MatrixOverlay";

const About = () => {
  return (
    <BaseGrid>
      <Section>
        <Picture picture={Balance}>
            <MatrixOverlay src={Balance} />
          </Picture>
        <GridText horizontal="center" vertical='center'>
          <>
            <H2 text='Om Specify IT' />
            <Span text='Specify IT bildades 2015 där vi såg ett behov av att kunna erbjuda helhetslösningar åt kunder.' />
            <Span text='Men också att samtidigt kunna hjälpa egenföretagare eller de som vill ta steget till att bli egenföretagare.' />
            <Span text='Vi ser att det behövs en harmoni i arbetslivet där både arbetstagare och arbetsgivare ska kunna få ut så mycket som möjligt.' />
          </>
        </GridText>
      </Section>
    </BaseGrid>
  );
}

export default About;