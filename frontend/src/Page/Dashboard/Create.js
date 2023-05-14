/*import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
function Create({ cohorts, setCohorts, setIsCreating }) {

    const [cohortName, setCohortName]= useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!cohortName || !startDate || !endDate) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = cohorts.length + 1;
        const newCohort = {
            id,
            cohortName,
            startDate,
            endDate
        }
        cohorts.push(newCohort);
        setCohorts(cohorts);
        setIsCreating(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${cohortName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
return (
    <div className="small-container">
<form onSubmit={handleAdd}>
    <h1>Create Cohort</h1>
    <label htmlFor="cohortName">Cohort Name</label>
    <input
        id="cohortName"
        type="text"
        ref={textInput}
        name="cohortName"
        value={cohortName}
        onChange={e => setCohortName(e.target.value)}
    />
   
    <label htmlFor="startDate">Start Date</label>
    <input
        id="startDate"
        type="startDate"
        name="startDate"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
    />
    <label htmlFor="endDate">End Date</label>
    <input
        id="endDate"
        type="endDate"
        name="endDate"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
    />
    <div style={{ marginTop: '30px' }}>
        <input type="submit" value="Add" />
        <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsCreating(false)}
        />
    </div>
</form>
</div>
);
}

export default Create;*/
