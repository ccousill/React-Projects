import React from 'react';
import Card from '../UI/Card';

function UsersList(props) {

    return (
        <Card>
            {props.userData.map((item) => (
                <div key={item.name}>
                    <h1>{item.name}</h1>
                    <p>{item.age} years old</p>
                </div>
            ))}
        </Card>
    );
}

export default UsersList;
