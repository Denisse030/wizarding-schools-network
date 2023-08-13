import React, { createContext, useContext, useEffect, useState } from "react";
const WizardingSchoolsContext = createContext();

export function WizardingSchoolsProvider({ children }) {
  const [wizardingSchools, setWizardingSchools] = useState([]);

  
  useEffect(() => {
    
    const fetchWizardingSchools = async () => {
      try {
        const response = await fetch('/wizarding-schools');
        const data = await response.json();
        setWizardingSchools(data);
      } catch (error) {
        console.error('Error in fetching Wizarding Schools:', error);
      }
    };

    fetchWizardingSchools();
  }, []);

  return (
    <WizardingSchoolsContext.Provider value={wizardingSchools}>
      {children}
    </WizardingSchoolsContext.Provider>
  );
}

export function useWizardingSchools() {
  return useContext(WizardingSchoolsContext);
}
