import PropTypes from 'prop-types'

const DemoProps = (props) => {

    const {firstname, lastname, age} = props;

    return (
      <>
              <h2>Merci pour les petits pains</h2>
              <p>Firstname : {firstname}</p>
              <p>Lastname : {lastname}</p>
              <p>Age : {age}</p>
      </>  

    )
}

DemoProps.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    age: PropTypes.number,
}

export default DemoProps;