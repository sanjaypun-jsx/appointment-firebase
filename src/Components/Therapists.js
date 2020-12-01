import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Therapists = () => {
	const [ doc, setDoc ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const db = firebase.database();

	useEffect(
		() => {
			const rootRef = firebase.database().ref().child('Therapists');
			//const docRef = rootRef.child('Tony Chopper');
			rootRef.on('value', (snap) => {
				setDoc(snap.val());
				setLoading(false);
			});
		},
		[ db ]
	);

	const StyledLi = styled(motion.li)`
	list-style:none;
	color:white;
	text-align:left;
	`;

	const StyledP = styled(motion.p)`
	font-size:20px;
	line-height:0.5;
	padding-left:20px;
	`;

	const StyledButton = styled(motion.button)`
	padding:15px 40px;
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
	border: 1px solid white;
	display:inline-block;
	margin:20px;
	`;

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

	const StyledLink = styled(Link)` 
	text-decoration:none;
	color:white;
	&:hover{
		color:black;
	}
	`;
	return loading ? (
		<Loader />
	) : (
		<div style={{ display: 'block' }}>
			{Object.keys(doc).map((item, i) => (
				<StyledDiv>
					<StyledLi key={i}>
						<img src={doc[item].Photo} alt='pp' style={{ height: '300px', width: 'auto' }} />
						<StyledP>Name: {doc[item].Name}</StyledP>
						<StyledP>Age: {doc[item].Age}</StyledP>
						<StyledP>License: {doc[item].License}</StyledP>
						<div style={{ padding: 20, marginTop: -25 }}>
							<Link to='/form'>
								<StyledButton variants={buttonVariant} initial='hidden' animate='visible'>
									<span>BOOK</span>
								</StyledButton>
							</Link>
						</div>
					</StyledLi>
				</StyledDiv>
			))}
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<StyledButton
					style={{ display: 'block', width: '48%' }}
					variants={buttonVariant}
					initial='hidden'
					animate='visible'
				>
					<StyledLink to='/'>BACK</StyledLink>
				</StyledButton>
			</div>
		</div>
	);
};

export default Therapists;
