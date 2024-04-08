/* eslint-disable react/prop-types */
// src/WithOfflineSupport.jsx
import React from "react";
import { connect } from "react-redux";
import { removeFromQueue } from "./OfflineSupportToolkit";

const WithOfflineSupport = (WrappedComponent) => {
  class WithOfflineSupportComponent extends React.Component {
    componentDidMount() {
      window.addEventListener("online", this.syncOfflineData);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.syncOfflineData);
    }

    syncOfflineData = () => {
      const { offlineQueue, dispatch } = this.props;
      offlineQueue.forEach((action) => {
        dispatch(action);
      });
      // Clear offline queue after sync
      offlineQueue.forEach(() => {
        dispatch(removeFromQueue());
      });
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    offlineQueue: state.offlineQueue,
  });

  return connect(mapStateToProps)(WithOfflineSupportComponent);
};

export default WithOfflineSupport;
