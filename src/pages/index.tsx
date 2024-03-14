import React from 'react';
import Navbar from '../components/Navbar';
import TournamentForm from '../components/TournamentForm';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center my-8">Join the Tournament!</h1>
                <TournamentForm src="01HRY0820XPESYMKE06ESNFYDK" />

            </div>
        </div>
    );
};

export default HomePage;
