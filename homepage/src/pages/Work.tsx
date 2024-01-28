import BaseGrid from "../base-styled-components/BaseGrid";
import GridText from "../components/grid-text/GridText";
import Picture from "../components/Picture";
import join from '../assets/images/join.jpg';
import H2 from "../components/grid-text/H2";
import Span from "../components/grid-text/Span";

const Work = () => {
  return (
    <BaseGrid>
      <Picture picture={join} ></Picture>
      <GridText horizontal="center" vertical='center'>
        <>
          <H2 text='Vill du bli egenföretagare och bli en av oss?' />
          <Span text='I din roll som egenföretagare hjälper vi dig med att starta ditt företag, tar hand om din ekonomi, ditt sälj och agerar mentor när du behöver det.' />
        </>
      </GridText>
    </BaseGrid>
  );
};

export default Work;