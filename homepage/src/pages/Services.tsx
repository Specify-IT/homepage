import BaseGrid from "../base-styled-components/BaseGrid";
import GridText from "../components/grid-text/GridText";
import Picture from "../components/Picture";
import cs from '../assets/images/cs.jpg';
import economics from '../assets/images/economics.jpg';
import Span from "../components/grid-text/Span";
import H1 from "../components/grid-text/H1";
import List from "../components/grid-text/List";

const Services = () => {
  return (
    <BaseGrid>
      <GridText fullwidth={true}>
        <>
          <H1 text='Våra tjänster' />
          <List items={[
            'Mjukvaruarkitektur',
            'Projektledning',
            'Rådgivning',
            'Systemutveckling',
            'Front- & backendutveckling',
            'Ekonomi'
          ]} />
        </>
      </GridText>
      <Picture picture={cs} ></Picture>
      <GridText>
        <>
          <Span text='Vi har lång erfarenhet inom systemutveckling och kan hjälpa till med moderna utvecklings- och förvaltningsmetoder och anpassa lösningen efter er verksamhet och era behov. Vi jobbar gärna agilt och stödjer er i det dagliga arbetet.' />
          <Span text='Specify IT har seniora konsulter med stor erfarenhet inom sitt yrke vilket bidrar till hög effektivitet i leveranserna. Vår erfarenhet av systemutveckling från frontend till backend gör att vi effektivt hjälper er från arkitektur till produktion.' />
        </>
      </GridText>
      <Picture picture={economics} ></Picture>
      <GridText>
        <>
          <Span text='Med lång erfarenhet inom redovisning och utveckling av ekonomiprocesser kan vi på Specify IT hjälpa er att effektivisera er finansiella uppföljning.' />
          <Span text='Med bakgrund från konsultbranschen har vi arbetat med många olika typer av företag, både storleksmässigt och i olika branscher.' />
          <Span text='Vi kan hjälpa till med allt från bokföring till färdigställa årshandlingar, eller effektivisera en ekonomiavdelning. Behöver ni redovisningsrådgivning vad gäller ert företag hjälper vi gärna till.' />
        </>
      </GridText>
    </BaseGrid>
  );
};

export default Services;
