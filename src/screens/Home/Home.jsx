import React from 'react';
import Card from '../../components/Cards/Card';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-title'>
                <h1 className='home-title1'>
                    WELCOME TO <span className='home-title2'>RANDOM</span>
                </h1>
            </div>
            <h3 className='home-subtitle'>
                Generate random numbers or teams
            </h3>
            <div className='home-container-cards'>
                <Card
                    title='Number'
                    description='Establish a range between two numbers to get a random number inside the range. Number must be between 0 to 1000'
                    button='CREATE RANDOM NUMBER'
                    route='/randomnumber'
                />
                <Card
                    title='Team'
                    description='Enter all the members and select how many teams do you want. Teams must have equal number of members'
                    button='CREATE RANDOM TEAMS'
                    route='/randomteam'
                />
            </div>
        </div>
    );
}

export default Home;
