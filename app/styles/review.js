import bg from '../assets/flowers.jpg';

export default {


    container: {
        backgroundImage: `url(${ bg })`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover'
    },

    reviews: {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '10px'
    },

    img: {
        height: '100px'
    },

    center: {
        margin: '0 auto',
    },

    flex: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
}