import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';


function Add({ learners, handleAddLearner, setIsAdding,  }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const workbook = XLSX.read(bstr, { type: 'binary' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            data.forEach((row, index) => {
                const [firstName, lastName, email, date] = row;
                const id = learners.length + index + 1; // Adjust index accordingly if there are headers
                const newLearner = {
                    id,
                    firstName,
                    lastName,
                    email,
                    date,
                };
                handleAddLearner(newLearner);
            });
            setIsAdding(false);
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: 'Learners data has been Added.',
                showConfirmButton: false,
                timer: 1500
            });
        };
        reader.readAsBinaryString(file);
    };
    
    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = learners.length + 1;
        const newLearner = {
            id,
            firstName,
            lastName,
            email,
            date,
        };
        handleAddLearner(newLearner);

        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: '${firstName} ${lastName}s data has been Added.',
            showConfirmButton: false,
            timer: 1500
        });
        
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Learner</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
            <div>
                <h2>Or import from Excel</h2>
                <input
                    type="file"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    );
}

export default Add