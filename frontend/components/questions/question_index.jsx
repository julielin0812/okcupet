import React from 'react';
import QuestionIndexContainer from './question_index_container';

import QuestionIndexItem from './question_index_item';
import NavContainer from '../nav/nav_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllQuestions()
      // .then(this.props.fetchPetResponses(this.props.match.params.petId));
      .then(this.props.fetchPetResponses(this.props.match.params.petId));
  }

  // componentWillMount() {

  // }

  render() {
    const questions = this.props.questions;
    const userProfile = this.props.user;
    const petProfile = this.props.pet;
    const petResponses = this.props.petResponses;

    if (!questions) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {
              questions.map( (question, idx) => (
                <QuestionIndexItem
                  key={idx}
                  question={question}
                  userProfile={userProfile}
                  petProfile={petProfile}
                  petResponse={petResponses[idx]}/>
              ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default QuestionIndex;
//
// if (!questions) {
//   return (
//     <div>
//       <p>Loading...</p>
//     </div>
//   );
// } else {
//   if (userProfile) {
//     return (
//       <div>
//         <ul>
//           {
//             questions.map( (question, idx) => (
//               <QuestionIndexItem
//                 key={idx}
//                 question={question}
//                 userProfile={userProfile} />
//             ))
//           }
//         </ul>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <ul>
//           {
//             questions.map( (question, idx) => (
//               <QuestionIndexItem
//                 key={idx}
//                 question={question}
//                 petProfile={petProfile} />
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }
// }
