import './label-textbox.css'

interface Props {
    name: string,
}

export function LabelTextBox(props: Props) {
    return (
        <div className="container">
            <p>{props.name}</p>
            <input className='text-input'></input>
        </div>
    );
}