import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    modalVisible: false
  };
  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media
    });
  };
  handleCloseModal = event => {
    this.setState({
      modalVisible: false
    });
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
          />
          {this.state.modalVisible && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
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
  return {
    categories: state.data.categories,
    searchVideos: state.searchVideos
  };
};

export default connect(mapStateToProps)(Home);
