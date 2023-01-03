import React,{ useState,useEffect } from 'react';
import CardMember from '../../components/Cards/CardMember/CardMember.jsx';
import Swal from 'sweetalert2';
import './team.css';
import CardTeam from '../../components/Cards/CardTeam/CardTeam.jsx';

const Team = () => {
    const [numberTeams,setNumberTeams] = useState(2);
    const [members,setMembers] = useState([]);
    const [createdTeams,setCreatedTeams] = useState(false)

    function lessTeam() {
        if(numberTeams > 2) {
            setNumberTeams(numberTeams - 1);
        } else if(numberTeams == 2) {
            Swal.fire({
                icon: 'error',
                title: 'Teams Error',
                text: "Need to create two or more teams!",
              })
        }
    } 

    function moreTeam() {
        if(numberTeams === members.length) {
            Swal.fire({
                icon: 'error',
                title: 'Teams Error',
                text: "Can't create more teams than members!",
                confirmButtonColor:'#00A154'
              })
        } else if(numberTeams >= 2) {
            setNumberTeams(numberTeams + 1);
        }
    }

    function addMember() {
        const member = document.getElementById('input-member').value;
        if(members.length >= 12) {
            Swal.fire({
                icon: 'error',
                title: 'Members Error',
                text: "Max of 12 members!",
                confirmButtonColor:'#00A154'
              })
        } else if(member.length < 2) {
            Swal.fire({
                icon: 'error',
                title: 'Members Error',
                text: "Member name with more than 2 characters!",
                confirmButtonColor:'#00A154'
              })
        } else {
            setMembers([...members,member])
        }
    }

    //Terminar
    function deleteMember(index) {
        const membersArray = [...members];
        membersArray.splice(index,1)
        setMembers(membersArray)
    }

    function createTeams(members) {
        setCreatedTeams(true)
        //const teams = document.getElementById('teams');
        //const randomIndex = Math.floor(Math.random() * members.length);
        const containerTeams = document.getElementById('teamList');

        console.log(numberTeams)
        for(let i=0; i < numberTeams; i++){
            //const span = <CardTeam index={i}/>;
            const span = document.createElement('span');
            console.log(span)
            span.innerHTML = 'hola'
            console.log(span)

            //containerTeams.appendChild(span)
        }
    }

    return (
        <div className='team'>
            <h1 className='member-title1'>
                GENERATE<span className='member-title2'> RANDOM </span>TEAMS
            </h1>
            {
                !createdTeams ? 
                <>
                    <div className='member-container'>
                        <div className='member-container-header'>
                            <p className='member-container-header-title'>Generate</p>
                            <div className='member-container-numberTeams'>
                            <p className='member-container-numberTeams-operations' onClick={() => lessTeam()}>
                                -
                            </p>
                            <p className='member-container-numberTeams-number'>{ numberTeams }</p>
                            <p className='member-container-numberTeams-operations' onClick={() => moreTeam()}>
                                +
                            </p>
                            </div>
                            <p className='member-container-header-title'>Teams</p>
                        </div>
                    </div>
                    <div className='members'>
                        <div className='members-add'>
                            <input
                                type='text'
                                placeholder='Member'
                                className='members-add-input'
                                id='input-member'
                            />
                            <button className='members-add-button' onClick={() => addMember()}>
                                ADD MEMBER
                            </button>
                        </div>
                        <div className='members-list'>
                            {
                                members.length === 0 ? 
                                <p className='members-needToAdd'>
                                    Need to add between 2 - 12 members
                                </p>
                                :
                                members.map((member,index) => {
                                    return(
                                        <CardMember
                                            member={ member }
                                            key={ index }
                                            index={ index }
                                            deleteMember={ deleteMember }
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button className='members-button' onClick={() => createTeams(members)}>
                        CREATE TEAMS
                    </button>
                </>
                :
                <>
                    <div className='team-container'>
                        <div className='team-container-header'>
                            <p className='team-container-header-title'>TEAMS</p>
                        </div>
                    </div>
                    <div className='teams-list' id='teamList'>
                
                    </div>
                </>
            }
        </div>
    );
}

export default Team;
