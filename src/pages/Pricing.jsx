// src/components/Pricing.js
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { db } from '../firebase';
import LoadingSpinner from '../components/LoadingSpinner';

// Custom hook for fetching rentals data
const useRentals = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "rentals"));
                const rentals = [];
                querySnapshot.forEach((doc) => {
                    rentals.push({ id: doc.id, ...doc.data() });
                });
                setData(rentals);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
};

export default function Pricing() {
    const { data, loading, error } = useRentals();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div className="container mx-auto px-4 py-8 font-nunito">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 font-nunito">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left lg:px-6">Car</th>
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
