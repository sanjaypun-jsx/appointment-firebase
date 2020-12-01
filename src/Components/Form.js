import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useId } from 'react-id-generator';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const ContainerDiv = styled(motion.div)`
	border: 1px solid white;
	margin-top:10vh;
	width:35%;
	max-height:110vh;
	outline:none;
	`;

const InputDiv = styled(motion.input)` 
	display:block;
	width: 100%;
  	padding: 12px 20px;
  	margin: 8px 0;
  	box-sizing: border-box;
	`;

const TextAreaDiv = styled(motion.textarea)` 
	display:block;
	width: 100%;
  	padding: 12px 20px;
  	margin: 8px 0;
  	box-sizing: border-box;
	`;
const StyledButton = styled(motion.button)`
	padding:15px 0;
	background:transparent;
	border:1px solid white;
	color:white;
	width:100%;
	cursor:pointer;
	outline:none;
	&:hover{
		color:black;
		background-color:white;
		transition: all 0.6s ease-in-out;
	}

	`;
const StyledDiv = styled(motion.div)` 
	display:block;
	justify-content:center;
	align-items:center;
	`;

const StyledP = styled(motion.p)` 	
	display:block;
	color:white;
	font-size:20px;`;

const StyledLink = styled(Link)` 
	text-decoration:none;
	color:white;
	&:hover{
	color:black;
}
`;
function Homepage() {
	const uid = useId();
	const [ loading, setLoading ] = useState(true);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ details, setDetails ] = useState('');

	const db = firebase.database();

	const submitData = (e) => {
		alert('Form Submitted!');
		e.preventDefault();
		db.ref(`Patients/${uid}`).set({
			Name: name,
			Email: email,
			Phone: phone,
			Details: details,
		});
	};

	const buttonVariant = {
		hidden: {
			y: 50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 0.6,
			},
		},
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<ContainerDiv className='container'>
				<form
					id='contact'
					action=''
					onSubmit={submitData}
					method='post'
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<StyledDiv>
						<StyledP style={{ display: 'block' }}>Please Fill Up This Form</StyledP>
						<StyledP style={{ display: 'block' }}>Arkham Asylum will contact you soon after.</StyledP>
						<InputDiv
							placeholder='Your name'
							type='text'
							id='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<InputDiv
							placeholder='Your Email Address'
							type='email'
							id='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<InputDiv
							placeholder='Your Phone Number'
							type='tel'
							id='Phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<TextAreaDiv
							placeholder='Type The Details Of Your Appointment Here'
							id='Details'
							value={details}
							onChange={(e) => setDetails(e.target.value)}
						/>
						<div style={{ padding: 20 }}>
							<StyledButton
								name='submit'
								type='submit'
								id='contact-submit'
								variants={buttonVariant}
								initial='hidden'
								animate='visible'
							>
								Submit
							</StyledButton>
						</div>
					</StyledDiv>
				</form>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
					<StyledButton
						style={{ display: 'block', width: '71%' }}
						variants={buttonVariant}
						initial='hidden'
						animate='visible'
					>
						<StyledLink to='/docs'>BACK</StyledLink>
					</StyledButton>
				</div>
			</ContainerDiv>
		</div>
	);
}

export default Homepage;
