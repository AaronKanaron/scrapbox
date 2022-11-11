import React from 'react'

export default class SignUp extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
};
