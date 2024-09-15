import React from 'react';
// import { FaPen } from "react-icons/fa";

interface LocationHoursProps {
    location?: string;  // Expected to be "latitude,longitude"
    openingTime?: string;
    closingTime?: string;
    address?: string;
}

const formatTime = (time: string | undefined): string => {
    if (!time) return 'NA';
    const [hour, minute] = time.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
};

const LocationHours: React.FC<LocationHoursProps> = ({ location, openingTime, closingTime, address }) => {
    const hours = [
        { day: 'Mon', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}`, status: 'Closed now' },
        { day: 'Tue', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}` },
        { day: 'Wed', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}` },
        { day: 'Thu', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}` },
        { day: 'Fri', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}` },
        { day: 'Sat', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}` },
        { day: 'Sun', time: `${formatTime(openingTime)} - ${formatTime(closingTime)}` },
    ];

    const [lat, long] = location ? location.split(',') : [undefined, undefined];

    const directionsUrl = `https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;

    return (
        <div className="p-4 bg-white border rounded-lg">
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h2 className="text-xl font-bold mb-4 md:mb-0">Location & Hours</h2>
                <div className="text-right md:text-left mb-4">
                    <button className="flex items-center gap-2 font-bold">
                        {/* <span>Suggest an edit</span>
                        <FaPen /> */}
                    </button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className="flex flex-col w-full md:w-1/2 mb-4">
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
                    <div className="mt-4 flex flex-col gap-4 md:flex-row md:gap-6">
                        <div>
                            <p className="text-blue-500 font-semibold">{address}</p>
                            {/* If you want to add more address details, include them here */}
                        </div>
                        <button 
                            className="mt-2 px-3 py-1 bg-gray-100 border rounded-lg text-sm text-blue-500"
                            onClick={() => window.open(directionsUrl, '_blank')}
                        >
                            Get directions
                        </button>
                    </div>
                </div>
                <div className="flex flex-col pt-4 items-start md:items-center">
                    {hours.map((hour, index) => (
                        <div key={index} className="flex justify-between items-center text-sm mb-2 gap-4 w-full md:w-auto">
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
