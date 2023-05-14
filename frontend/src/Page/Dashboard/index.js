import React, { useState } from 'react';
import { learnerData } from '../../data';
import Swal from 'sweetalert2';
import Add from './Add';
import Edit from './Edit';
import Header from '../../global/Header';
import List from './List';
import Landing from './Landing';
import 'bootstrap/dist/css/bootstrap.min.css'
const MyApp = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [learners, setLearners] = useState(learnerData);
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [cohorts, setCohorts] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState(null);

  const handleStart = (cohortName) => {
    setIsStarted(true);
  };
  const handleGoBack = () => {
    setIsStarted(false);
    setSelectedCohort(null);
  };

  const handleAddCohort = (cohortName) => {
    setCohorts([...cohorts, cohortName]);
  };

  const handleCohortClick = (cohort) => {
    handleStart(cohort);
    setSelectedCohort(cohort);
  };

  const handleEdit = (id) => {
    const [learner] = learners.filter((learner) => learner.id === id);
    setSelectedLearner(learner);
    setIsEditing(true);
  };
  const handleAddLearner = (learner) => {
    const id = learnerData.length + 1;
    const newLearner = {
      id,
      ...learner,
      cohort: selectedCohort,
    };
    setLearners([...learners, newLearner]);
  };
  
  const changeCohortStatus = (cohortName, newStatus) => {
    setCohorts(
      cohorts.map((cohort) =>
        cohort.name === cohortName ? { ...cohort, status: newStatus } : cohort
      )
    );
  };
  const handleDelete = (id) => {
    const [learner] = learners.filter((learner) => learner.id === id);

    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${learner.firstName} ${learner.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setLearners(learners.filter((learner) => learner.id !== id));
      }
    });
  };

  const renderComponents = () => {
    if (!isStarted) {
      return (
        <Landing
          handleStart={handleCohortClick}
          cohorts={cohorts}
          handleAddCohort={handleAddCohort}
          changeCohortStatus={changeCohortStatus}

        />
      );
    }

    if (!isAdding && !isEditing) {
      return (
        <>
          <Header
          setIsAdding={setIsAdding}
          handleGoBack={handleGoBack}
          selectedCohort={selectedCohort}
        />
          <List
            learners={learners}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            selectedCohort={selectedCohort}
          />
        </>
      );
    }

    if (isAdding) {
      return (
        <Add
          learners={learners}
          handleAddLearner={handleAddLearner}        
          setIsAdding={setIsAdding}
        />
      );
    }

    if (isEditing) {
      return (
        <Edit
          learners={learners}
          selectedLearner={selectedLearner}
          setLearners={setLearners}
          setIsEditing={setIsEditing}
        />
      );
    }
  };

  return <>{renderComponents()}</>;
};

export default MyApp;
