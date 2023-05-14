import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Landing = ({ handleStart, cohorts, handleAddCohort, handleDelete }) => {
  const [cohortName, setCohortName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    if (!cohortName || !startDate || !endDate) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Enter Cohort Name and Dates.',
        showConfirmButton: true
      });
    }
    handleAddCohort({
      name: cohortName,
      startDate: startDate,
      endDate: endDate,
      status: 'ongoing'
    });
    setCohortName('');
    setStartDate('');
    setEndDate('');
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${cohortName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="container">
      <h1>Welcome !</h1>
      <p>Please enter the name of your cohort and start and end dates:</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cohort Name"
          value={cohortName}
          onChange={e => setCohortName(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          placeholder="Start Date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          placeholder="End Date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          + Add
        </button>
      </div>
      {cohorts.length > 0 && (
        <div>
        <h2>On Going Cohorts</h2>
          <p>Select your cohort to start:</p>
          <table className="striped-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Cohort Name</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {cohorts.map((cohort, index) => (
                <tr key={index} onClick={() => handleStart(cohort.name)}>
                  <td>{index + 1}</td>
                  <td>{cohort.name}</td>
                  <td>{cohort.startDate}</td>
                  <td>{cohort.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <h2>Past Cohorts</h2>
  <table className="striped-table">
    <thead>
      <tr>
        <th>No.</th>
        <th>Cohort Name</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
    <tbody>
      {cohorts.filter(cohort => cohort.isPast).map((cohort, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{cohort.name}</td>
          <td>{cohort.startDate}</td>
          <td>{cohort.endDate}</td>

        
                            <td colSpan={7}>No Learners</td>
                        </tr>
      ))}
    </tbody>
  </table>
        </div>
      )}
    </div>
  );
};

export default Landing;
