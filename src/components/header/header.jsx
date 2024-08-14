import './header.css'
import { Logo } from '../logo/logo'
import { PrimaryButton } from '../buttons/primaryButton/primaryButton'

export function Header() {
    return (
        <>
            <div id='headerContainer'>
                <Logo></Logo>
                <PrimaryButton title="Crear una cuenta"></PrimaryButton>
            </div>
        </>)
}