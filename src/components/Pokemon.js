import React from 'react';
import { Link } from "react-router-dom";

class Pokemon extends React.Component {

    handleClick() {
        // this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <Link
                to={`/pokemon/${this.props.id}`}
                state={{
                    id: this.props.id,
                    name: this.props.name,
                    img: "../" + this.props.image,
                    intro: this.props.introduction,
                }}
            >
                <div onClick={() => { this.handleClick() }} className='pokemon-card'>
                    <div className='pokemon-item'>
                        <p>{this.props.name}</p>
                        <img src={this.props.image} />
                        <button onClick={() => { this.handleClick() }} className='detail-btn'>Detail</button>
                    </div>
                </div>
            </Link>
        );
    }
}
export default Pokemon;