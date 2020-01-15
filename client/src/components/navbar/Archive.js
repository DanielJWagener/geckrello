import React from "react";
import ArchiveInner from "./ArchiveInner";

const Archive = props => {
  if (props.hidden) {
    return (
      <div className="sidebar-menu__interface sidebar-menu__interface--hidden">
        <ArchiveInner toggleArchive={props.toggleArchive} />
      </div>
    );
  } else {
    return (
      <div className="sidebar-menu__interface sidebar-menu__interface--visible">
        <ArchiveInner toggleArchive={props.toggleArchive} />
      </div>
    );
  }
};

export default Archive;
