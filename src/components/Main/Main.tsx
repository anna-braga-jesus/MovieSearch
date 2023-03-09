import React from 'react';
import './Main.scss';
import { Button, DynamicSideContent, Title} from '@ui5/webcomponents-react';
import { FlexBox } from '@ui5/webcomponents-react';
import SearchMovies from '../SearchMovies/SearchMovies';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

 interface Props {
   title: string;
   id: number;
   Year: string;
   imdbID: string;
   Type: string;
   Poster: string;
 }
interface Ui5ImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ui5-image": Ui5ImageProps;
    }
  }
}

const Main: React.FC = () => {
  return (

    <>
          <FlexBox direction="Row" justifyContent="Center" alignItems="Center" style={{ height: '50px' }}>
            <Title level="H3">Title</Title>
          </FlexBox>

          <FlexBox direction="Row" justifyContent="SpaceAround" alignItems="Center" style={{ height: '50px' }}>
            <Title level="H5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ac libero bibendum, scelerisque lorem a, faucibus lectus. Maecenas semper urna eu elit malesuada, vel tincidunt lorem fermentum. Donec euismod nibh ac eros mollis, non lobortis dui tempor. Phasellus sed lorem eget velit semper bibendum vel quis justo. Fusce porttitor mi non purus lacinia consectetur. </Title>
          </FlexBox>

          <FlexBox className="search-form" direction="Row" justifyContent="Center" alignItems="Center" style={{ height: '50px'}}>
            {/* <Title level="H2" >{title}</Title> */}
            <SearchMovies id={1} title="Meu Filme" Poster="url-do-poster" Year="2022" imdbID="tt123456" Type="movie" />
          </FlexBox>

      <DynamicSideContent>
        <div>
            <FlexBox direction="Row" alignItems="Center" style={{ height: '50px', margin:'5px' }}>
            <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
            </FlexBox>
            <FlexBox direction="Row" alignItems="Center" style={{ height: '50px', margin:'5px' }}>
              <div slot="header" style={{ marginRight: '10px' }}><b>Actor</b></div>
              <div slot="content" style={{ marginLeft: '10px' }}>Lorem ipsum</div>  
            </FlexBox>
            <FlexBox direction="Row" alignItems="Center" style={{ height: '50px', margin:'5px' }}>
              <div slot="header" style={{ marginRight: '10px' }}><b>Review</b></div>
              <div slot="content" className="review">
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
              </div>  
            </FlexBox>
                  <Button design="Emphasized">
                    Favorite
                   <FontAwesomeIcon icon={faHeart} style={{ marginLeft: '5px' }} />
                  </Button>
        </div>
        <div slot="sideContent">
            <ui5-image
                src="https://via.placeholder.com/150"
                alt="Filme"
                style={{ width: '150px', height: '150px' }}
            ></ui5-image>
        </div>
      </DynamicSideContent>
    </>
      

);
};

export default Main;
