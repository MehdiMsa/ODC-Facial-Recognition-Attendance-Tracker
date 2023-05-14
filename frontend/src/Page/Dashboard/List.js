import React from 'react'
import { Link } from 'react-router-dom'
function List({ learners, handleEdit, handleDelete, selectedCohort, goBackToLanding }) {
   
    const cohortLearners = learners.filter(
        (learner) => learner.cohort === selectedCohort
    );

    return (
        <div className='contain-table'>
        
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cohortLearners.length > 0 ? (
                        cohortLearners.map((learner, i) => (
                            <tr key={learner.id}>
                                <td>{i + 1}</td>
                                <td>{learner.firstName}</td>
                                <td>{learner.lastName}</td>
                                <td>{learner.email}</td>
                                <td>{learner.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(learner.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(learner.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Learners</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List;
