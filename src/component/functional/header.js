import Button from './button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header-task">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

export default Header
