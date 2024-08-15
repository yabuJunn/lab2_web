import './secondaryButton.css'

export function SecondaryButton(props) {
    // eslint-disable-next-line react/prop-types
    const { text } = props
    return <>
        <div id='secondaryButtonContainer'>
            <p className='secondaryButton'>{text}</p>
        </div>
    </>
}