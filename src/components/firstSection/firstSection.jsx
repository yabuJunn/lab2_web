import './firstSection.css'

import { PrimaryButton } from '../buttons/primaryButton/primaryButton'
import { SecondaryButton } from '../buttons/secondaryButton/secondaryButton'

export function FirstSection() {
    return <>
        <div id='firstSectionContainer'>
            <div id='sectionText'>
                <h2>Correo electrónico seguro, inteligente y fácil de usar</h2>
                <p>Mejora tu productividad con Gmail, que ahora se integra con Google Chat, Google Meet y otros servicios, todos en un mismo lugar.</p>
                <div id='buttonsContainer' className='firstSection'>
                    <PrimaryButton title="Crear una cuenta"></PrimaryButton>
                    <SecondaryButton text="Para el trabajo"></SecondaryButton>
                </div>
            </div>
        </div>
    </>
}