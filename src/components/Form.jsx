import { Component } from 'react';
import Modal  from './Modal'

class Form extends Component {

    constructor(props){
        super(props);

        console.log(this.props.children[1])

        this.state = {
            name : "",
            email : "",
            password : "",
            show: false,
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    render() {

        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;

        return (
            <>
            <form>
                <label>Name: </label>
                <input type="text" name="name" />
                <label>Email: </label>
                <input type="text" name="email" />
                <label>Password: </label>
                <input type="text" name="pass" />

                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                </Modal>

                <button onClick={this.showModal}>{ this.props.children[1] }</button>
            
            </form>
            </>
        )
    }
}

export default Form;