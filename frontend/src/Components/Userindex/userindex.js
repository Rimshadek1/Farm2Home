import React from 'react'
import './userindex.css'
import './bootstrap.min.css'


function userindex() {
    return (
        <div className="container-xxl position-relative p-0">
            <div className="container-xxl bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">
                                "Bringing Freshness and Convenience from the Farm to Your Doorstep."
                            </h1>
                            <p className="text-white pb-3 animated slideInDown">
                                Discover the Taste of Nature's Bounty with Farm to Home Direct. From the Fields to Your Doorstep,
                                Experience the Convenience of Fresh and Wholesome Produce Delivered Straight to You.
                            </p>
                            <a href="index" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">
                                Read More
                            </a>
                            <a href="index" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                                Contact Us
                            </a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid animated zoomIn" src="/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userindex
