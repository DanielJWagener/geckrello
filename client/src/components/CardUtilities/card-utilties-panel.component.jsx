import React from "react";

const CardUtiltitesPanel = ({
  heading,
  closePanel,
  listTarget,
  handleSubmit,
  handleChange,
  listOptions,
  submitValue,
}) => (
  <div className="card-utilities__panel">
    <h4 className="card-utilities__panel--heading">{heading}</h4>
    <div className="card-utilities__panel--close" onClick={closePanel}>
      &times;
    </div>
    <form onSubmit={handleSubmit}>
      <label className="card-utilities__panel--label" htmlFor="destination">
        Choose destination list:{" "}
      </label>
      <select
        name="destination"
        value={listTarget}
        onChange={handleChange}
        className="card-utilities__panel--select"
      >
        {listOptions()}
      </select>

      <input
        type="submit"
        value={submitValue}
        className="card-utilities__panel--submit"
      />
    </form>
  </div>
);

export default CardUtiltitesPanel;
