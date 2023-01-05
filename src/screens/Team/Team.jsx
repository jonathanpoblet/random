import React,{ useState } from 'react';
import CardMember from '../../components/Cards/CardMember/CardMember.jsx';
import Swal from 'sweetalert2';
import './team.css';

const Team = () => {
    const [numberTeams,setNumberTeams] = useState(2);
    const [members,setMembers] = useState([]);
    const [createdTeams,setCreatedTeams] = useState(false);
    let localMembers = [];

    if(localStorage.getItem('members') != null) {
        localMembers = JSON.parse(localStorage.getItem('members'));
    }

    function lessTeam() {
        if(numberTeams > 2) {
            setNumberTeams(numberTeams - 1);
        } else if(numberTeams == 2) {
            Swal.fire({
                icon: 'error',
                title: 'Teams Error',
                text: "Need to create two or more teams!",
                confirmButtonColor:'#00A154'
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
        if(localStorage.getItem('members') != null) {
            localMembers = JSON.parse(localStorage.getItem('members'));
        }
        const total = members.length / numberTeams
        if(Number.isInteger(total)) {
            if(members.length < 2) {
                Swal.fire({
                    icon: 'error',
                    title: 'Members Error',
                    text: "Need 2 - 12 members!",
                    confirmButtonColor:'#00A154'
                  })
            } else {
                setCreatedTeams(true)
                const containerTeams = document.getElementById('teams');
                containerTeams.innerHTML = '';
                for(let i = 1; i < numberTeams + 1; i++) {
                    const div = document.createElement('div');
                    const span = document.createElement('span');
                    span.innerText = `Team ${i}`;
                    span.className = 'allteams-title';
                    div.className = `allteams team${i}`;
                    div.id = `team${i}`
                    div.appendChild(span);
                    containerTeams.appendChild(div);

                    const teamContainer = document.getElementById(`team${i}`);
                    for(let i = 0; i < total; i++) {
                        const span = document.createElement('span');
                        const membersArray = members;
                        const randomMember = Math.floor(Math.random() * membersArray.length);
                        span.innerText = membersArray[randomMember];
                        span.className = 'allmembers'
                        membersArray.splice(randomMember,1);
                        teamContainer.appendChild(span);
                    }
                }
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Team Error',
                text: "Teams must have equal number of members!",
                confirmButtonColor:'#00A154'
            })
        }
    }

    function resetTeams() {
        const containerTeams = document.getElementById('teams');
        containerTeams.innerHTML = '';
        setCreatedTeams(false)
        setNumberTeams(2)
        setMembers([])
        localStorage.setItem('members', JSON.stringify([]));
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
                    <button className='members-button' onClick={() => {
                        localStorage.setItem('members',JSON.stringify(members))
                        createTeams(members)}
                        }>
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
                </>
            }
            <div className='teams-list' id='teams'>
                
            </div>
            {
                createdTeams == true &&
                <div className='all-members-button'>
                    <button className='all-members-button-1' onClick={() => createTeams(localMembers) }>CREATE TEAMS AGAIN</button>
                    <button className='all-members-button-2' onClick={() => resetTeams()}>CHANGE TEAMS PARAMETHERS</button>
                </div>
            }
        </div>
    );
}

export default Team;
