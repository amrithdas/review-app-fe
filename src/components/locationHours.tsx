import React from 'react';
// import { FaPen } from "react-icons/fa";

interface LocationHoursProps {
    location?: string;  // Expected to be "latitude,longitude"
    openingTime?: string;
    closingTime?: string;
    address?: string;
}

const LocationHours: React.FC<LocationHoursProps> = ({ location, openingTime, closingTime, address }) => {
    // Sample hours data with dynamic values for the opening and closing times
    const hours = [
        { day: 'Mon', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} `, status: 'Closed now' },
        { day: 'Tue', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} ` },
        { day: 'Wed', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} ` },
        { day: 'Thu', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} ` },
        { day: 'Fri', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} ` },
        { day: 'Sat', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} ` },
        { day: 'Sun', time: `${openingTime || 'NA'} - ${closingTime || 'NA'} ` },
    ];

    const [lat, long] = location ? location.split(',') : [undefined, undefined];

    const directionsUrl = `https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed`;

    return (
        <div className="p-4 bg-white border rounded-lg">
            <div className='flex row justify-between items-center'>
                <h2 className="text-xl font-bold mb-4">Location & Hours</h2>
                <div className="text-right">
                    <button className="flex items-center mb-4 gap-2 font-bold">
                        {/* <span>Suggest an edit</span>
                        <FaPen /> */}
                    </button>
                </div>
            </div>
            <div className='flex row gap-4'>
                <div className="flex mb-4 flex-col w-3/6">
                <iframe
                        src={directionsUrl}
                        width="100%"
                        height="200"
                        frameBorder="0"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                        title="Google Map Location"
                    ></iframe>
                    <div className="ml-4 flex row gap-4">
                        <div>
                            <p className="text-blue-500 font-semibold">{address}</p>
                            {/* If you want to add more address details, include them here */}
                        </div>
                        <button 
                            className="mt-2 px-3 py-1 h-16 bg-gray-100 border rounded-lg text-sm text-blue-500"
                            onClick={() => window.open(directionsUrl, '_blank')}
                        >
                            Get directions
                        </button>
                    </div>
                </div>
                <div className="flex-col pt-4 items-center justify-center">
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