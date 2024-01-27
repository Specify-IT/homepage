import BaseGrid from "../base-styled-components/BaseGrid";
import GridText from "../components/GridText";
import Picture from "../components/Picture";
import join from '../assets/images/join.jpg';

const Work = () => {
  return (
    <BaseGrid>
      <Picture picture={join} ></Picture>
      <GridText horizontal="center" vertical='center'>
        <span>
          Vill du bli egenföretagare och bli en av oss?
          I din roll som egenföretagare hjälper vi dig med att starta ditt företag, tar hand om din ekonomi, ditt sälj och agerar mentor när du behöver det.
        </span>
      </GridText>
    </BaseGrid>
  );
};

export default Work;