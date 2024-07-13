// src/components/Pricing.js
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Pricing() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'rentals'));
                const rentals = [];
                querySnapshot.forEach((doc) => {
                    rentals.push({ id: doc.id, ...doc.data() });
                });
                setData(rentals);
            } catch (err) {
                setError('Failed to fetch rentals data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 font-nunito">
                <p className="text-red-500 text-center">{error}</p>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 font-nunito">
                <p className="text-gray-500 text-center">No pricing available at the moment. Please check back later.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 font-nunito mt-2">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-red-400 text-white">
                        <tr>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Rental</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Name</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Price per Day</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Price per Week</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Price per Month</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {data.map((rental) => (
                            <tr key={rental.id} className="border-b">
                                <td className="w-1/6 py-3 px-4 text-left lg:px-6">
                                    <img src={rental.image} alt={rental.name} className="w-full h-auto" />
                                </td>
                                <td className="w-1/6 py-3 px-4 text-left lg:px-6">{rental.name}</td>
                                <td className="w-1/6 py-3 px-4 text-left lg:px-6">{rental.daily_price} THB</td>
                                <td className="w-1/6 py-3 px-4 text-left lg:px-6">{rental.weekly_price} THB</td>
                                <td className="w-1/6 py-3 px-4 text-left lg:px-6">{rental.monthly_price} THB</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
