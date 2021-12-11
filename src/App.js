import React, { useState } from "react";

import { Products, Navbar, AboutUs } from "./components";

const App = () => {
  const [equipmentSelected, setEquipmentSelected] = useState(true);
  const [aboutUsSelected, setAboutUsSelected] = useState(false);

  const handleTabChange = (selectedEquipment, selectedAboutUs) => {
    setEquipmentSelected(selectedEquipment);
    setAboutUsSelected(selectedAboutUs);
  };

  return (
    <div>
      <Navbar onTabChange={handleTabChange} />
      {equipmentSelected && <Products />}
      {aboutUsSelected && <AboutUs />}
    </div>
  );
};

export default App;
