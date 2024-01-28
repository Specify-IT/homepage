import Picture from "../components/Picture";
import Balance from '../assets/images/balance.jpg';
import GridText from "../components/grid-text/GridText";
import BaseGrid from "../base-styled-components/BaseGrid";
import Span from "../components/grid-text/Span";
import H2 from "../components/grid-text/H2";

const About = () => {
  return (
    <BaseGrid>
      <Picture picture={Balance} ></Picture>
      <GridText horizontal="center" vertical='center'>
        <>
          <H2 text='Om Specify IT' />
          <Span text='Specify IT bildades 2015 där vi såg ett behov av att kunna erbjuda helhetslösningar åt kunder.' />
          <Span text='Men också att samtidigt kunna hjälpa egenföretagare eller de som vill ta steget till att bli egenföretagare.' />
          <Span text='Vi ser att det behövs en harmoni i arbetslivet där både arbetstagare och arbetsgivare ska kunna få ut så mycket som möjligt.' />
        </>
      </GridText>
    </BaseGrid>
  );
}

export default About;