import './primaryButton.css'

export function PrimaryButton(props) {
    // eslint-disable-next-line react/prop-types
    const { title } = props
    return (
        <>
            <div id='primaryButtonContainer'>
                <p className='primaryButton'>{title}</p>
                <div id='verticalBar'></div>
                <img src="/src/assets/dropdown-svgrepo-com.svg" alt="" />
            </div>
        </>
    )
}