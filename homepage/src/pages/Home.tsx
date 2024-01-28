import Hero from '../components/Hero';
import BaseGrid from '../base-styled-components/BaseGrid';
import GridText from '../components/grid-text/GridText';
import H2 from '../components/grid-text/H2';
import Span from '../components/grid-text/Span';


const Home = () => {
  return (
    <BaseGrid>
      <Hero text='Specify IT'></Hero>
      <GridText fullwidth={true}>
        <>
          <H2 text='Är ett bolag med fokus på IT och ekonomi.' />
          <Span text='Vi hjälper kunder att utveckla sina tekniska önskemål, från arkitektur till produktion och ger strategiska råd rörande ekonomi och management. Vi tar hand om både förvaltning och nyutveckling.' />
          <Span text='Specify IT har lång branscherfarenhet från både offentliga och privata sektorn inom finans, telecom, redovisning, kommun och landsting.' />
          <Span text='Kunders problem är vår utmaning. Ni specificerar kraven och Specify IT sköter resten.' />
        </>
      </GridText>
    </BaseGrid>
  );
}

export default Home;