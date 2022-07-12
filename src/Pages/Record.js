import React from 'react'

function Record() {
  return (
    <div>
        <form action="">
            <div>
                <label for="" className="form-label">Underlying Conditions: </label>
                <textarea type="text" className="form-control" rows="3"  />
            </div><br />
            <div>
                <label htmlFor="" className='form-label'>Weight(kgs): </label>
                <input type="number" className="form-control"/>
            </div><br />
            <div>
                <label htmlFor="" className='form-label'>Height: </label>
                <input type="number" className="form-control"/>
            </div><br />
            <div>
                <label className="form-label" htmlFor="customFile">Date:</label>
                <input type="date" className="form-control" id="customFile" />
            </div>
        </form>
        <button type="button" class="btn btn-success mt-5">update</button>

    </div>
  )
}

export default Record