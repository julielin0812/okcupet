import { connect } from 'react-redux';
import PetIndex from './pet_index';

import { fetchAllPets, searchPets } from '../../actions/pet_actions';

const mapStateToProps = (state) => ({
  pets: Object.values(state.entities.pets),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPets: () => dispatch(fetchAllPets()),
  searchPets: (query) => dispatch(searchPets(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetIndex);
