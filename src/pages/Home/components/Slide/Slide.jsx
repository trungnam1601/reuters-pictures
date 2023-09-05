import Carousel from 'react-bootstrap/Carousel';
import images from '../../../../assets/images/images';

function Slide() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={images.slide1} height={430} alt="slide1" />
                <Carousel.Caption>
                    <p>Full moon rises behind the Temple of Poseidon in Cape Sounion.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={images.slide2} alt="slide2" height={430}></img>
                <Carousel.Caption>
                    <p>Aftermath of Hurricane Idalia in Tarpon Springs, Florida.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={images.slide3} alt="slide3" height={430}></img>
                <Carousel.Caption>
                    <p>An explosion is seen in the sky over the city during a Russian missile strike in Kyiv.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={images.slide4} alt="slide4" height={430}></img>
                <Carousel.Caption>
                    <p>AA view shows the grave of Russian mercenary chief Yevgeny Prigozhin in St Petersburg.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;
