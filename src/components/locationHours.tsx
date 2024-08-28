import React from 'react';
import { FaPen } from "react-icons/fa";


const LocationHours = () => {
    const hours = [
        { day: 'Mon', time: '11:00 AM - 12:00 AM ', status: 'Closed now' },
        { day: 'Tue', time: '11:00 AM - 12:00 AM ' },
        { day: 'Wed', time: '11:00 AM - 12:00 AM ' },
        { day: 'Thu', time: '11:00 AM - 12:00 AM ' },
        { day: 'Fri', time: '11:00 AM - 1:00 AM ' },
        { day: 'Sat', time: '11:00 AM - 1:00 AM ' },
        { day: 'Sun', time: '11:00 AM - 12:00 AM ' },
    ];

    return (
        <div className="p-4 bg-white border rounded-lg  ">
            <div className='flex row justify-between items-center	'>
            <h2 className="text-xl font-bold mb-4">Location & Hours</h2>
            <div className=" text-right">
                <button className=" flex items-center mb-4 gap-2 font-bold ">
                    <span>Suggest an edit</span>
                    <FaPen />

                </button>
            </div>
            </div>
            <div className='flex row gap-4'>
                <div className="flex mb-4 flex-col w-3/6 ">
                    <img
                        src="https://maps.googleapis.com/maps/api/staticmap?center=35+Skyline+Plz,+Daly+City,+CA+94015&zoom=15&size=200x150&maptype=roadmap
&markers=color:red%7Clabel:C%7C37.6879,-122.4702"
                        alt="Map location"
                        className="w-1/2 h-32 rounded-lg object-cover"
                    />
                    <div className="ml-4 flex row gap-4">
                        <div>
                            <a href="https://maps.google.com" className="text-blue-500 font-semibold">35 Skyline Plz</a>
                            <p className="text-sm text-gray-600">Daly City, CA 94015</p>
                        </div>
                        <button className="mt-2 px-3 py-2 bg-gray-100 border rounded-lg text-sm text-blue-500">
                            Get directions
                        </button>
                    </div>
                </div>
                <div className="  flex-col pt-4 items-center justify-center">
                    {hours.map((hour, index) => (
                        <div key={index} className="flex justify-between items-center text-sm mb-2 gap-4">
                            <div className="font-medium">{hour.day}</div>
                            <div className="text-gray-600">{hour.time}</div>
                            
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default LocationHours;
