import './outlinedSecondaryButton.css'

export function OutlinedSecondaryButton(props) {
    // eslint-disable-next-line react/prop-types
    const { text } = props
    return <>
        <div id='buttonContainer'>
            <p>{text}</p>
        </div>
    </>
}