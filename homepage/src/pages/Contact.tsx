import BaseGrid from "../base-styled-components/BaseGrid";
import B from "../components/grid-text/B";
import GridText from "../components/grid-text/GridText";
import H2 from "../components/grid-text/H2";
import Span from "../components/grid-text/Span";

const Contact = () => {
  return (
    <BaseGrid>
      <GridText horizontal="center" vertical='center'>
        <>
          <H2 text='Vill du veta mer om vad vi kan göra för er?' />
          <Span text='Vill du veta mer om oss eller våra tjänster och erbjudanden?' />
          <Span text='Tveka inte att ta kontakt och skicka ett mail till ' />
          <B text='info@specifyit.se' />
        </>
      </GridText>
    </BaseGrid>
  );
};

export default Contact;