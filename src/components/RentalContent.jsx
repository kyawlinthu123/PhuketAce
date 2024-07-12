// src/components/RentalContent.js
import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function RentalContent() {
    return (
        <div className="container mx-auto font-nunito">
            <Card className="text-start ">
                <CardBody>
                    <Typography variant="h2" className="font-bold mb-4 text-4xl">
                        Our Fleet
                    </Typography>
                    <Typography variant="paragraph" className="text-lg font-bold">
                        We have a fleet of over 25 cars and motorcycles ready for your use.
                    </Typography>
                    <Typography variant="paragraph" className="text-lg font-bold">
                        Insured, Clean Cars, Baby Seat Available, Excellent Car Condition
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}
