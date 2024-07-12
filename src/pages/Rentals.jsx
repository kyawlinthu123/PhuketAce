// src/components/Rentals.js
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/index';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import RentalContent from "../components/RentalContent";

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

export default function Rentals() {
    const { data, loading, error } = useRentals();

    if (loading) {
        return <div className="container mx-auto px-4 py-8 font-nunito">Loading...</div>;
    }

    if (error) {
        return <div className="container mx-auto px-4 py-8 font-nunito">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 font-nunito">
            <div className="mb-4">
            <RentalContent />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 my-3 md:mx-24 transition-all duration-500">
                {data.map((rental) => (
                    <Card className="h-auto w-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" key={rental.id}>
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src={rental.image}
                                alt={rental.name}
                                className="shadow-lg"
                                loading="lazy"
                            />
                        </CardHeader>
                        <CardBody className="mt-6 text-center mx-auto">
                            <Typography variant="h4" color="blue-gray">
                                <span className="text2xl md:text-3xl font-bold">{rental.name}</span>
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex items-center justify-around mt-6 ml-2">
                            <div className="flex flex-col items-start text-sm font-bold">
                                <span className="text-xs text-gray-600">starting at:</span>
                                {rental.daily_price} THB/day
                            </div>
                            <Typography className="text-sm mb-1 ml-1 mr-1">
                                <Button color="red" className="text-white py-2 px-3 sm:px-4 sm:py-2 border rounded-full hover:bg-red-700 text-xs sm:text-sm md:text-base sm:mt-2">
                                Book
                                </Button>
                            </Typography>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
