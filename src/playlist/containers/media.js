import React from "react";
import Media from "../components/media";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { bindActionCreators } from "redux";

class MediaContainer extends React.Component {
  openModal = id => {
    //this.props.dispatch({ type: "OPEN_MODAL", payload: { mediaId: id } });
    //this.props.dispatch(openModal(id));
    this.props.actions.openModal(id);
  };
  render() {
    return (
      //   <Media
      //     openModal={this.props.handleOpenModal}
      //     {...this.props.media.toJS()}
      //     key={this.props.media.id}
      //   />
      <Media
        openModal={this.openModal}
        {...this.props.media.toJS()}
        key={this.props.media.id}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const media = state
    .get("data")
    .get("entities")
    //.get("medias")[props.id];
    .get("medias")
    .get(props.id);
  return { media };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaContainer);
