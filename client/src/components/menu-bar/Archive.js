import React from "react";
import ArchiveInner from "./ArchiveInner";

const Archive = ({ hidden, toggleArchive }) => (
  <div
    className={`sidebar-menu__interface sidebar-menu__interface--${
      hidden ? "hidden" : "visible"
    }`}
  >
    <ArchiveInner toggleArchive={toggleArchive} />
  </div>
);

export default Archive;
