import React, { Component} from 'react';
import './UserItem.css';

export default class UserItem extends Component {


    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        const {gender, firstName, lastName, username, phone, location,  age, thumbnail, registered_date, email, address, Address, city, zip_code, birthday, cell, isSelect, onClick, id} = this.props;
        const row = [firstName, lastName, username, phone, location, age];
        return (

            <div onClick={onClick.bind(null, id)}>
                <div className="user-item-container">
                    <img className="picContainer" src={thumbnail || ""}/>
                    <div style={{display: "flex"}}>
                        {row.map((word) => <div className="user-item-cell width-10">{word}</div>)}
                        {<div onClick={this.handleClick}className="user-item-cell">{this.state.isToggleOn ? '+' : '-'}</div>}
                    </div>
                </div>
                {
                    isSelect ?

                        <div>
                            <div><p align="left">Gender: {gender}</p></div>
                            <div><p align="left">Last Name: {lastName}</p></div>
                            <div><p align="left">First Name: {firstName}</p></div>
                            <div><p align="left">Username: {username}</p></div>
                            <div><p align="left">Registered: {registered_date}</p></div>
                            <div><p align="left">Email: {email}</p></div>
                            <div><p align="center">Address: {address} {Address}</p></div>
                            <div><p align="center">City: {city}</p></div>
                            <div><p align="center">Zip Code: {zip_code}</p></div>
                            <div><p align="right">Birthday: {birthday}</p></div>
                            <div><p align="right">Phone: {phone}</p></div>
                            <div><p align="right">Cell: {cell}</p></div>
                        </div>
                        : null
                }
            </div>

        );
    }
}




