import React from 'react';
// import PrimaryButton from '../../../src/Pages/Shared/PrimaryButton'
const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className="text-red-500">No Slot Available try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                {/* <p><small>{slots}</small></p> */}
                <div className="card-actions justify-center">
                    {/* <PrimaryButton disabled={slots.length === 0}>Book Appointment</PrimaryButton> */}
                    {/* <button
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase">
                        Book Appointment</button> */}
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;