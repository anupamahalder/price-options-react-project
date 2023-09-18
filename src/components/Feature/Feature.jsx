import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className='text-black text-left px-2'>
            <p className='flex items-center gap-3'>
                <AiFillCheckCircle className='text-green-500'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

//Adding proptypes
Feature.propTypes ={
    feature: PropTypes.string.isRequired
}
export default Feature;