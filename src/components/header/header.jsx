import './header.css'
import { Logo } from '../logo/logo'
import { PrimaryButton } from '../buttons/primaryButton/primaryButton'
import { OutlinedSecondaryButton } from '../buttons/outlinedSecondaryButton/outlinedSecondaryButton'
import { SecondaryButton } from '../buttons/secondaryButton/secondaryButton'

export function Header() {
    return (
        <>
            <div id='headerContainer'>
                <Logo></Logo>


                <div id='headerButtonContainer'>
                    <SecondaryButton text="Para el trabajo"></SecondaryButton>
                    <OutlinedSecondaryButton text="Acceder"></OutlinedSecondaryButton>
                    <PrimaryButton title="Crear una cuenta"></PrimaryButton>
                </div>
            </div>
        </>)
}