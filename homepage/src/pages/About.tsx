import Picture from "../components/Picture";
import Balance from '../assets/images/balance.jpg';
import GridText from "../components/GridText";
import BaseGrid from "../base-styled-components/BaseGrid";

const About = () => {
  return (
    <BaseGrid>
      <Picture picture={Balance} ></Picture>
      <GridText horizontal="center" vertical='center'>
        <span>
          Specify IT bildades 2015 där vi såg ett behov av att kunna erbjuda helhetslösningar åt kunder.
          Men också att samtidigt kunna hjälpa egenföretagare eller de som vill ta steget till att bli egenföretagare.
          Vi ser att det behövs en harmoni i arbetslivet där både arbetstagare och arbetsgivare ska kunna få ut så mycket som möjligt.
        </span>
      </GridText>
    </BaseGrid>
  );
}

export default About;

// Om oss
// Vi bildades 2015 för att tillsammans erbjuda en nära, kunnig och anpassad konsulttjänst inom ekonomi, systemutveckling, projektledning och rådgivning.

// Vi sitter där ni finns eller där det passar er bäst, på kontoret eller på distans.

// Vi finns här för era behov och hjälper mer än gärna till där det behövs inom våra områden.

// Org.nr.: 559044-5291

// Godkänd för F-skatt