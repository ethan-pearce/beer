export const mapBeer = (beer) => {
    const { nameDisplay, id, labels, style, isOrganic } = beer;
    const image = labels?.medium ? labels?.medium : 'https://res.cloudinary.com/teepublic/image/private/s--TsohP-Cw--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:48/co_191919,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1513360267/production/designs/2182073_1.jpg'

    return {
        name: nameDisplay,
        image,
        id,
        style: style?.shortName,
        organic: isOrganic === 'Y' ? true : false
    }
}

export default mapBeer;