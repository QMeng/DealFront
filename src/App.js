import React, { useState, useEffect } from "react";

import { Products, Navbar, AboutUs } from "./components";
import getProductsData from "./services/GetProductsService";

const App = () => {
  const [equipmentSelected, setEquipmentSelected] = useState(true);
  const [aboutUsSelected, setAboutUsSelected] = useState(false);
  const [equipmentsData, setEquipmentData] = useState([]);

  const handleTabChange = (selectedEquipment, selectedAboutUs) => {
    setEquipmentSelected(selectedEquipment);
    setAboutUsSelected(selectedAboutUs);
  };

  useEffect(() => {
    (async () => {
      const data = await getProductsData("All");
      setEquipmentData(data);
    })()
  }, []);

  return (
    <div>
      <Navbar onTabChange={handleTabChange} />
      {equipmentSelected && <Products products={equipmentsData} />}
      {aboutUsSelected && <AboutUs />}
    </div>
  );
};

export default App;
