import React, { Component } from 'react';

class Login extends Component <{onNextClick:Function}, {user_id: string, data: object}>{
    constructor(props:any) {
        super(props)
		this.state = {
			user_id: "",
			data: {},
        };

        this.onFetchLogin().then(() => {
            var login_json = this.state.data;
            if ('uuid' in login_json) {
                this.props.onNextClick('');
            }
		});
    };

    render() {
        return (
            <div className="limiter">
                <form action="/api/user/login">
                    <span>
                        Sponsorship Portal
                    </span>
                    <button type="submit">
                        Login with HackGT
                    </button>
                </form>
            </div>
		);
    };

    onFetchLogin = () => {
        return fetch('/api/user/check', {
            method: "GET",
            credentials: "include"
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
            return new Promise((resolve, reject) => {
                this.setState({data: response, user_id: response.uuid}, function() {
                    resolve();
                });
            });
        });
    };
};

export default Login;