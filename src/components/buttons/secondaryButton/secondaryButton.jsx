import './secondaryButton.css'

export function SecondaryButton(props) {
    // eslint-disable-next-line react/prop-types
    const { text } = props
    return <>
        <div id='secondaryButtonContainer'>
            <p>{text}</p>
        </div>
    </>
}