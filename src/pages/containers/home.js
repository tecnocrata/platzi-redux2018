import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";
import immutable from "immutable";
import * as actions from "../../actions";
import { bindActionCreators } from "redux";

class Home extends Component {
  // state = {
  //   modalVisible: false
  // };
  //Deberiamos quitar este metodo
  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media
    });
  };
  handleCloseModal = event => {
    //this.props.dispatch({ type: "CLOSE_MODAL" });
    //this.props.dispatch(closeModal());
    this.props.actions.closeModal();
  };
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            searchVideos={this.props.searchVideos}
            loading={this.props.loading}
          />
          {this.props.modal.get("visibility") && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                  id={this.props.modal.get("mediaId")}
                />
              </Modal>
            </ModalContainer>
          )}
        </HomeLayout>
      </HandleError>
    );
  }
}

const mapStateToProps = (state, props) => {
  const categories = state
    .get("data")
    .get("categories")
    .map(c => {
      return state
        .get("data")
        .get("entities")
        .get("categories")
        .get(c);
    });
  const searchText = state.get("data").get("searchText");
  let searchVideos = immutable.List();
  if (searchText) {
    searchVideos = state
      .get("data")
      .get("entities")
      .get("medias")
      .filter(media => {
        return media
          .get("title")
          .toLowerCase()
          .includes(searchText);
      })
      .toList();
  }
  return {
    categories: categories,
    searchVideos,
    modal: state.get("modal"),
    loading: state.get("loading").get("loading")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
