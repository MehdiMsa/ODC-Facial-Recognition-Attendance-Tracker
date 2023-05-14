import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ learners, selectedLearner, setLearners, setIsEditing }) {
  const id = selectedLearner.id;

  const [firstName, setFirstName] = useState(selectedLearner.firstName);
  const [lastName, setLastName] = useState(selectedLearner.lastName);
  const [email, setEmail] = useState(selectedLearner.email);
  const [date, setDate] = useState(selectedLearner.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const learner = {
      id,
      firstName,
      lastName,
      email,
      date,
    };

    const updatedLearners = learners.map((l) => {
      if (l.id === id) {
        return learner;
      } else {
        return l;
      }
    });

    setLearners(updatedLearners);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${learner.firstName} ${learner.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Learner</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
