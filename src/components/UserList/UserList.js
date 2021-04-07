import React, { Component } from 'react';
import "./UserList.css"
import {getRandomUsers} from "../Users/Users";
import UserItem from "../UserItem/UserItem";


export class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            current: null,
        };
    }

    select = (userId) => {
        const storedUser = this.state.current;
        if(storedUser !== userId) {
            this.setState({current: userId});
        } else {
            this.setState({current: null})
        }
    }


    componentWillMount() {
        //request random users
        //set state to fetching
        getRandomUsers(10)
            .then(data => {
                console.log("request " + data);
                this.setState({
                    users: data,
                    fetching: false
                });
            });
    }

    isSelect(id) {
        return this.state.current === id;
    }

    renderUserItems() {
        const {search} = this.props;

        return this.state.users
            .filter((user) => !search || new RegExp(`^${search}`, "i").test(user.name.first))
            .map((user, index) => {

                const gender = user.gender;
                const first = user.name.first;
                const last = user.name.last;
                const username = user.login.username;
                const phone = user.phone;
                const location = user.location.city;
                const thumbnail = user.picture.thumbnail;
                const age = user.dob.age;
                const registered_date = user.registered.date;
                const email = user.email;
                const address = user.location.street.number;
                const Address = user.location.street.name;
                const city = user.location.city;
                const postcode = user.location.postcode;
                const birthday = user.dob.date;
                const cell = user.cell;

                return (
                    <UserItem

                        onClick={this.select}
                        id={user.login.uuid}
                        isSelect={this.isSelect(user.login.uuid)}
                        key={user.login.uuid}
                        gender={gender}
                        firstName={first}
                        lastName={last}
                        username={username}
                        phone={phone}
                        location={location}
                        thumbnail={thumbnail}
                        age={age}
                        registered_date={registered_date}
                        email={email}
                        address={address}
                        Address={Address}
                        city={city}
                        zip_code={postcode}
                        birthday={birthday}
                        cell={cell}

                    />



                );

            });
    }


    render() {
        if (this.state.fetching) {
            return (
                <div>
                    <img src='./img/giphy.gif'/>
                </div>

            );
        }

        return (
            <div>
                <div className='width-10'>Photo</div>
                <div className='width-10'>First Name</div>
                <div className='width-10'>Last Name</div>
                <div className='width-10'>Username</div>
                <div className='width-10'>Phone</div>
                <div className='width-10'>City</div>
                <div className='width-10'>Age</div>
                <div className='width-10'>Action</div>
                <div>
                    {this.renderUserItems()}
                </div>
            </div>

        );

    }

}
