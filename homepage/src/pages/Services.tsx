import BaseGrid from "../base-styled-components/BaseGrid";
import GridText from "../components/GridText";
import Picture from "../components/Picture";
import cs from '../assets/images/cs.jpg';
import economics from '../assets/images/economics.jpg';

const Services = () => {
  return (
    <BaseGrid>
      <GridText fullwidth={true}>
        <ol>
          <li><b>Verksamhetsområden</b></li>
          <li>Mjukvaruarkitektur</li>
          <li>Projektledning</li>
          <li>Rådgivning</li>
          <li>Systemutveckling</li>
          <li>Front- & backendutveckling</li>
          <li>Ekonomi</li>
        </ol>
      </GridText>
      <Picture picture={cs} ></Picture>
      <GridText>
        <span>
          Vi har lång erfarenhet inom systemutveckling och kan hjälpa till med moderna utvecklings- och förvaltningsmetoder och anpassa lösningen efter er verksamhet och era behov. Vi jobbar gärna agilt och stödjer er i det dagliga arbetet.
          Specify IT har seniora konsulter och har som lägst 9 års erfarenhet inom sitt yrke vilket bidrar till hög effektivitet i leveranserna. Vår erfarenhet av systemutveckling från frontend till backend och även inom EPiServer gör att vi effektivt hjälper er från arkitektur till produktion.
        </span>
      </GridText>
      <Picture picture={economics} ></Picture>
      <GridText>
        <span>
          Med lång erfarenhet inom redovisning och utveckling av ekonomiprocesser kan vi på Specify IT hjälpa er att effektivisera er finansiella uppföljning.
          Med bakgrund från konsultbranschen har vi arbetat med många olika typer av företag, både storleksmässigt och i olika branscher.
          Vi kan hjälpa till med allt från bokföring till färdigställa årshandlingar, eller effektivisera en ekonomiavdelning. Behöver ni redovisningsrådgivning vad gäller ert företag hjälper vi gärna till.
        </span>
      </GridText>
    </BaseGrid>
  );
};

export default Services;
