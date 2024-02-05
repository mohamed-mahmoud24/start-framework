import React from 'react'

export default function Footer() {
  return <>
  
    <div className='footer text-center text-white'>
    <div className='aboutUs'>
            <div className='container'>
                <div className='row g-4'>
                    <div className='col-md-4'>
                        <div className='item text-center text-white'>
                            <h2>LOCATION</h2>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item text-center text-white'>
                            <h2>AROUND THE WEB</h2>
                            <div className='icons'>
                                <ul className='list-unstyled d-flex  align-content-center justify-content-center '>
                                    <li><i className="fa-brands  pt-2 fa-facebook"></i></li>
                                    <li><i className="fa-brands mx-2 pt-2 fa-twitter"></i></li>
                                    <li><i className="fa-brands me-2 pt-2 fa-linkedin-in"></i></li>
                                    <li><i className="fa-solid  pt-2 fa-globe"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item text-center text-white'>
                            <h2>ABOUT FREELANCER</h2>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <p className='p-4 mb-0'>Copyright © Your Website 2021</p>
    </div>
  </>
}
