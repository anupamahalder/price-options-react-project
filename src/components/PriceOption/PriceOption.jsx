import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    // Destructuring our props 
    const {name, price, features} = option;
    return (
        <div className='bg-rose-400 text-center flex flex-col text-white rounded-lg p-4 mx-4'>
            <h2 className='my-4'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            {/* Showing features using map */}
            <div className='flex-grow'>
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-blue-700 hover:bg-blue-900 p-2 rounded-lg my-2'>Buy Now</button>
        </div>
    );
};
//Adding proptypes
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;