import React from 'react';
import { Link } from "react-router-dom";

class Pokemon extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isOpen: false }
    // }
    handleClick() {
        // this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        // let modal = '';
        // if (this.state.isOpen) {
        //     modal = (
        //         <div className='modal'>
        //             <div className='modal-inner'>
        //                 <div className='modal-header'></div>
        //                 <div className='modal-introduction'>
        //                     <h2>{this.props.name}</h2>
        //                     <p>{this.props.introduction}</p>
        //                 </div>
        //                 <button onClick={() => { this.handleClick() }} className='modal-close-btn'>Tutup</button>
        //             </div>
        //         </div>
        //     );
        // }
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
                    {/* {modal} */}
                </div>
            </Link>
        );
    }
}
export default Pokemon;