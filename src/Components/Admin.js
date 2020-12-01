import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

const Admin = () => {
	const [ messages, setMessages ] = useState('');
	const [ pname, setPname ] = useState('');
	const [ uid, setUid ] = useState('');

	const db = firebase.database();

	useEffect(() => {
		const rootRef = db.ref().child('Patients');
		const userRef = rootRef.child('id2');
		userRef.on('value', (snapshot) => {
			setPname(snapshot.val());
		});
	}, []);

	return <div>{Object.keys(pname).map((patient, i) => <li key={i}>{patient}</li>)}</div>;
};

export default Admin;
