

import React from 'react';
import './UserProfileCC.css'

export class UserProfileCC extends React.Component {
    render() {
        const { data } = this.props; 
        return (
            <div className="user-profile">
                <img src={data.avatar} />
                <div className="user-profile__content">
                    <h3 className="user-profile__name">{data.name}</h3>
                    <div className="user-profile__status">{data.status}</div>
                </div>
            </div>
        )
    }
}