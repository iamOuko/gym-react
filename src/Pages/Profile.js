import React from 'react'

const Profile = () => {
  return (
    <div className='container'>
        <form>

            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                </div>
                </div>
            </div>

  
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="customFile">image</label>
                <input type="file" className="form-control" id="customFile" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="customFile">Date of birth:</label>
                <input type="date" className="form-control" id="customFile" />
            </div>

            <div>
                <h6>Gender:</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        female
                    </label>
                </div>
            </div>
            

  
        </form>
    </div>
  )
}

export default Profile