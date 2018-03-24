import React from 'react';
import {connect} from "react-redux";
import {randomCharArray} from "../utils/utils";
import {complete, incrementCorrectInputCount, incrementIncorrectInputCount} from "../actions";
import {APP_MODES} from "../constants";

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        console.dir('UserInput Const');
        this.appMode = props.appMode;
        this.onIncorrectInput = props.onIncorrectInput;
        this.onCorrectInput = props.onCorrectInput;
        this.complete = props.complete;
        this.state = {
            chars: randomCharArray(60),
            incorrectInput: false,
            incorrectInputCount: 0
        }
    }


    componentWillReceiveProps(nextProps) {
        console.dir(nextProps.incorrectInputCount);
        this.setState({incorrectInputCount: nextProps.incorrectInputCount});
    }

    componentDidMount() {
        console.dir('M');
        document.addEventListener('keypress', this.onUserInput);
    }

    componentWillUnmount() {
        console.dir('MN');
        document.removeEventListener('keypress', this.onUserInput);
    }

    onUserInput = ({key}) => {
        if (this.state.chars.length === 0) {
            this.complete();
            return;
        }

        if (key === this.state.chars[0]) {
            this.onCorrectInput();
            this.setState((state) => ({chars: state.chars.slice(1), incorrectInput: false}))
        } else {
            this.setState({incorrectInput: true});
            this.onIncorrectInput();
        }
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Кол-во ошибок: </label>
                    <span>{this.state.incorrectInputCount}</span>
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

const mapStateToProps = state => {
    return {
       /* appMode: state.appMode,*/
        incorrectInputCount: state.incorrectInput,
        correctInput: state.correctInput
    }
};

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