import styled from 'styled-components';
import code from './../assets/images/code.svg';
import wave from './../assets/images/wave.png';

const Main = styled.main`
  display: flex;
`;
const Container = styled.div`
  width: 50%;
`;

type ImageContainerProps = {
  url: any;
};

const ImageContainer = styled.div<ImageContainerProps>`
  width: 100%;

  -webkit-mask-image: url(${(props) => props.url ?? ''});
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100%;
  mask-image: url(${(props) => props.url ?? ''});
  mask-repeat: no-repeat;
  mask-size: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }
`;

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Main>
        <Container>
          <p>This section contains information about...</p>
        </Container>        
        <Container>
          <ImageContainer url={wave}>
            <img src={code} className="Code-hero" alt="code" />
          </ImageContainer>
        </Container>
      </Main>
    </div>
  );
}

export default Home;