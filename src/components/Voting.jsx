import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export const Voting = React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
      console.log('in render in voting');
      console.log(this.props);
        return <div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <Vote {...this.props}/>
            }
        </div>
    }
});

function mapStateToProps(state){
  console.log("in voting mapSTateToProps");
  console.log(state);
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    vote: (entry) => console.log(entry)
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
