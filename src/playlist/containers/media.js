import React from "react";
import Media from "../components/media";
import { connect } from "react-redux";

class MediaContainer extends React.Component {
  render() {
    return (
      <Media
        openModal={this.props.handleOpenModal}
        {...this.props.media}
        key={this.props.media.id}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const media = state.data.entities.medias[props.id];
  return { media };
};

export default connect(mapStateToProps)(MediaContainer);
