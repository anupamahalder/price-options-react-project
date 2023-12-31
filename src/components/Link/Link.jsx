import PropTypes from 'prop-types';
const Link = ({route}) => {
    //destructuring route data

    return (
        <li className="mr-14 hover:bg-yellow-500 rounded p-2"><a href={route.path}>{route.name}</a></li>
    );
};


//Adding proptypes
Link.propTypes = {
    route: PropTypes.array.isRequired
}
export default Link;