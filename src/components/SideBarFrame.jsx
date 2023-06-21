import React, { useState } from "react";

const SideBarSection = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="sidebar-section">
      <div className="sidebar-wrapper">
        <h3 className="sidebar-wrapper-title">
          Search
        </h3>
        <div className="search-input-section">
          <input className="search-input" value={query} onChange={e => setQuery(e.target.value)} />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="sidebar-wrapper">
        <h3 className="sidebar-wrapper-title">Recent Products</h3>
        <div className="sidebar-tabs-section">
          <button className="sidebar-tab">PVD Louver Panels</button>
          <button className="sidebar-tab">PVD Metal Sheets</button>
          <button className="sidebar-tab">Stainless Steel Decorative Profile</button>
          <button className="sidebar-tab">Textured Sheets</button>
        </div>
      </div>
    </div>
  );
};

export default SideBarSection;
