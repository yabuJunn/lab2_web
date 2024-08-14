import './header.css'
import { Logo } from '../logo/logo'
import { PrimaryButton } from '../buttons/primaryButton/primaryButton'
import { OutlinedSecondaryButton } from '../buttons/outlinedSecondaryButton/outlinedSecondaryButton'

export function Header() {
    return (
        <>
            <div id='headerContainer'>
                <Logo></Logo>


                <OutlinedSecondaryButton text="Acceder"></OutlinedSecondaryButton>
                <PrimaryButton title="Crear una cuenta"></PrimaryButton>
            </div>
        </>)
}