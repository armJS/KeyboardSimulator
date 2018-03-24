import React from 'react';
import {connect} from "react-redux";
import {randomCharArray} from "../utils/utils";
import {complete, incrementCorrectInputCount, incrementIncorrectInputCount} from "../actions";
import {APP_MODES, COUNT_OF_CHAR} from "../constants";

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.appMode = props.appMode;
        this.onIncorrectInput = props.onIncorrectInput;
        this.onCorrectInput = props.onCorrectInput;
        this.complete = props.complete;
        this.state = {
            chars: randomCharArray(COUNT_OF_CHAR),
            incorrectInput: false,
            incorrectInputCount: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({incorrectInputCount: nextProps.incorrectInputCount});
    }

    componentDidMount() {
        document.addEventListener('keypress', this.onUserInput);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.onUserInput);
    }

    onUserInput = ({key}) => {
        if (key === this.state.chars[0]) {
            this.onCorrectInput();
            this.setState((state) => ({chars: state.chars.slice(1), incorrectInput: false}), () => {
                if (this.state.chars.length === 0)
                    this.complete();
            })
        } else {
            this.setState({incorrectInput: true});
            this.onIncorrectInput();
        }
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <ul>
                        <li>
                            <label>Кол-во ошибок: {this.state.incorrectInputCount}</label>
                        </li>
                        <li>
                            <label>Осталось символов: {this.state.chars.length}</label>
                        </li>
                    </ul>


                </div>

                {this.appMode === APP_MODES.IN_PROGRESS && <div style={{margin: '50px'}}>
                    {this.state.chars.map((char, i) => {
                        return <span
                            className={i === 0 && this.state.incorrectInput ? 'char-block error' : 'char-block'}>
                        {char}
                           </span>
                    })}
                </div>
                }
            </React.Fragment>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onCorrectInput: () => {
            dispatch(incrementCorrectInputCount())
        },

        onIncorrectInput: () => {
            dispatch(incrementIncorrectInputCount())
        },

        complete: () => {
            dispatch(complete())
        }
    }
};


export default connect(
    null,
    mapDispatchToProps
)(UserInput)