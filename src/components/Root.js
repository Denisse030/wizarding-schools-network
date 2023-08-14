import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import AllWizardingSchools from "../components/context/AllWizardingSchools";
import AllStudents from "../components/context/AllStudents";
import SingleWizardingSchool from "../components/singles/SingleWizardingSchool";
import SingleStudent from "../components/singles/SingleStudent";
import UpdateStudent from "../components/update/UpdateStudent";
import UpdateWizardingSchool from "../components/update/UpdateWizardingSchool";
import UnenrollStudent from "../components/unenroll/UnenrollStudent";
import DeleteStudent from "../components/delete/DeleteStudent";
import DeleteWizardingSchool from "../components/delete/DeleteWizardingSchool";


const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wizarding-schools" element={<AllWizardingSchools />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/wizarding-schools/:wizardingSchoolId" element={<SingleWizardingSchool />} />
        <Route path="/students/:studentId" element={<SingleStudent />} />
        <Route path="/students/:studentId/update" element={<UpdateStudent />} />
        <Route path="/wizarding-schools/:wizardingSchoolId/update" element={<UpdateWizardingSchool />} />
        <Route path="/wizarding-schools/:wizardingSchoolId/unenroll/:studentId" element={<UnenrollStudent />} />
        <Route path="/students/:studentId/delete" element={<DeleteStudent />} />
        <Route path="/wizarding-schools/:wizardingSchoolId/delete" element={<DeleteWizardingSchool />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Root;