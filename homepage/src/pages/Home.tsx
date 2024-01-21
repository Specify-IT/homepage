import styled from 'styled-components';
import media from '../layout/media';
import Standard from '../components/Standard';
import Hero from '../components/Hero';
import Balance from '../assets/images/balance.jpg';
import Picture from '../components/Picture';

const Item = styled.div`
  height: 200px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.md`
    grid-template-columns: 1fr;
  `};
`;

const Home = () => {
  return (
    <Container>
      <Hero text='Specify IT'></Hero>
      <Picture picture={Balance} ></Picture>
      <Standard horizontal='left' vertical='end' >Standard content</Standard>
      <Item>item1</Item>
      <Item>item2</Item>
      <Item>item3</Item>
      <Item>item4</Item>
      <Item>item5</Item>
      <Standard>Standard content</Standard>
      <h2>Home Page</h2>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </Container>
  );
}

export default Home;

// Specify IT strävar efter att ta er verksamhet inom IT och ekonomi till nya höjder.
// Specify IT hjälper sina kunder att utveckla sina tekniska önskemål, från arkitektur till produktion och ger strategiska råd rörande ekonomi och management. Vi tar hand om både förvaltning och nyutveckling.

// Specify IT har lång branscherfarenhet från både offentliga och privata sektorn inom finans, telecom, redovisning, kommun och landsting.

// Era problem är vår utmaning. Ni specificerar kraven och Specify IT sköter resten.

// Våra tjänster

// Kontakta oss redan idag!