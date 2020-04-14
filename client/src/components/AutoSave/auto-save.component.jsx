import React from "react";
import { connect } from "react-redux";

import "./auto-save.styles.scss";

const AutoSave = ({ save }) => {
  const displayMessage = () => {
    switch (save.changes) {
      case undefined:
        return save.error;
      case null:
        return "";
      default:
        return save.changes;
    }
  };

  return <div className="auto-save">{displayMessage()}</div>;
};

const mapStateToProps = ({ save }) => ({ save });

export default connect(mapStateToProps)(AutoSave);
