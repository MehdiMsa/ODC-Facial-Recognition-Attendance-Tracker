import React from 'react'

function Header({ setIsAdding, handleGoBack, selectedCohort }) {
  return (
    <header>
      <div style={{ marginTop: '30px', marginBottom: '18px', display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <div>
          {selectedCohort && <h2>{selectedCohort}</h2>}
          <button onClick={() => setIsAdding(true)} className='round-button' >Add learner</button>
        </div>
        {handleGoBack && <button onClick={handleGoBack} style={{ padding: '5px 10px', fontSize: '13px', borderRadius: '5%', margin: '10px', width: '100px', height: '40px' }}>Go Back</button>}
      </div>
    </header>
  )
}

export default Header
