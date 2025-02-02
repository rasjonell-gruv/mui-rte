import * as React from 'react'
import MUIRichTextEditor from '../../'

class RefSave extends React.Component {
    private ref: any
    constructor(props: any) {
        super(props)
        this.ref = React.createRef()
    }

    handleClick = () => {
        this.ref.current.save()
    }

    handleSave = (data: string) => {
        console.log(data)
    }

    render() {
        return (
            <div>
                Save editor state from external button: 
                <button style={{
                        marginLeft: 5,
                        padding: 5
                    }} 
                    onClick={this.handleClick}>
                    Save
                </button>
                <MUIRichTextEditor 
                    label="Type something here..."
                    onSave={this.handleSave}
                    ref={this.ref}
                    controls={["bold", "italic", "underline", "quote", "clear"]}
                />
            </div>
        )
    }
}

export default RefSave