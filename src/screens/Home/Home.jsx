import React from 'react';
import CardHome from '../../components/Cards/CardHome/CardHome.jsx';
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
                <CardHome
                    title='Number'
                    description='Establish a range between two numbers to get a random number inside the range. Number must be between 0 and the number you want'
                    button='CREATE RANDOM NUMBER'
                    route='/random/randomnumber'
                />
                <CardHome
                    title='Team'
                    description='Enter all the members and select how many teams do you want. Teams must have equal number of members. Members between 2 - 12'
                    button='CREATE RANDOM TEAMS'
                    route='/random/randomteam'
                />
            </div>
        </div>
    );
}

export default Home;
