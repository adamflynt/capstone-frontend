import React, { Component } from "react";
import LoginCard from "./LoginCard.js";
const axios = require("axios");
const FormValidators = require("./validate");
const validateLoginCard = FormValidators.validateLoginCard;
const zxcvbn = require("zxcvbn");

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                userName: "",
                password: ""
            },
            btnTxt: "show",
            type: "password",
            score: "0"
        };

        this.pwMask = this.pwMask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.pwHandleChange = this.pwHandleChange.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    pwHandleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });

        if (event.target.value === "") {
            this.setState(state =>
                Object.assign({}, state, {
                    score: "null"
                })
            );
        } else {
            var pw = zxcvbn(event.target.value);
            this.setState(state =>
                Object.assign({}, state, {
                    score: pw.score + 1
                })
            );
        }
    }

    submitLogin(user) {
        var params = {
            userName: user.usr,
            password: user.pw
        };
        axios
            .post("http://localhost:8080/api/authenticate", params)
            .then(res => {
                if (res.status === 200) {
                    localStorage.accountJWT = res.data.jwt;
                    localStorage.isAuthenticated = true;
                    window.location = "/accounts";
                } else {
                    this.setState({
                        errors: { message: res.data.message }
                    });
                }
            })
            .catch(err => {
                console.log("Sign up data submit error: ", err);
                window.alert("Login failed!\n\nUsername or password may be incorrect, or you may not have an account.");
            });
    }

    validateForm(event) {
        event.preventDefault();
        var payload = validateLoginCard(this.state.user);
        if (payload.success) {
            this.setState({
                errors: {}
            });
            var user = {
                usr: this.state.user.userName,
                pw: this.state.user.password,
            };
            this.submitLogin(user);
        } else {
            const errors = payload.errors;
            this.setState({
                errors
            });
        }
    }

    pwMask(event) {
        event.preventDefault();
        this.setState(state =>
            Object.assign({}, state, {
                type: this.state.type === "password" ? "input" : "password",
                btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
            })
        );
    }

    render() {
        return (
            <div>
                <LoginCard
                    onSubmit={this.validateForm}
                    onChange={this.handleChange}
                    onPwChange={this.pwHandleChange}
                    errors={this.state.errors}
                    user={this.state.user}
                    type={this.state.type}
                    btnTxt={this.state.btnTxt}
                    score={this.state.score}
                    pwMask={this.pwMask}
                />
            </div>
        );
    }
}

export default LoginContainer;
