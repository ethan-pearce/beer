import './Loading.css';

export const Loading = () => {
    return (
        <>
            <div className={'loadingText'}>Loading ....</div>
            <img className={'loadingImage'} src={'https://media4.giphy.com/media/dt91SdhwBusuZalJkG/giphy.gif?cid=ecf05e4769y62aeey7sw7k7bcuiu66q3qyjobrh2exgafgl6&rid=giphy.gif'} />
        </>
    )
}
export default Loading;