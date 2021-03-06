import { connect } from 'react-redux';
import PetShow from './pet_show';

import { fetchPet } from '../../actions/pet_actions';
import { createConversation,
  fetchConversation } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    pet: state.entities.pets[ownProps.match.params.petId],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPet: (id) => dispatch(fetchPet(id)),
  createConversation: (conversation) =>
    dispatch(createConversation(conversation)),
  fetchConversation: (id) => dispatch(fetchConversation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetShow);
