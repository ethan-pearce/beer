import './BeerHeader.css'

const BeerHeader = ({title, subTitle, organic}) => {
return (
        <>
            <h2 className={'beerName'}>{title}</h2>
            <h3 className={'beerSubtitle'}>{subTitle}</h3>
            {organic && <img className={'organic'} alt={'organic'} src={'https://modernbuyerbehaviour.files.wordpress.com/2016/03/organic.jpg'}/>}
        </>
    );
}

export default BeerHeader;