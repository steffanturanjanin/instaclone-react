import React, {Component} from 'react'

class FieldFileInput  extends Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props;
        onChange(e.target.files[0]);
    }

    render(){
        const { input: { value } } = this.props;
        //const {input,label, required, meta, } = this.props; //whatever props you send to the component from redux-form Field
        return(
            <div>
                <div>
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg, .svg'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default FieldFileInput;