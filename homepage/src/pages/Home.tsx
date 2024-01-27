import styled from 'styled-components';
import Standard from '../components/Standard';
import Hero from '../components/Hero';
import BaseGrid from '../base-styled-components/BaseGrid';
import GridText from '../components/GridText';

const Item = styled.div`
  height: 200px;
`;

const Home = () => {
  return (
    <BaseGrid>
      <Hero text='Specify IT'></Hero>
      <GridText fullwidth={true}>
        <ol>
          <li>Vi är ett bolag med fokus på IT och ekonomi.</li>
          <li>Kunder får hjälp att utveckla sina tekniska önskemål, från arkitektur till produktion och ger strategiska råd rörande ekonomi och management. Vi tar hand om både förvaltning och nyutveckling.</li>
          <li>Specify IT har lång branscherfarenhet från både offentliga och privata sektorn inom finans, telecom, redovisning, kommun och landsting.</li>
          <li>Era problem är vår utmaning. Ni specificerar kraven och Specify IT sköter resten.</li>
        </ol>
      </GridText>
    </BaseGrid>
  );
}

export default Home;