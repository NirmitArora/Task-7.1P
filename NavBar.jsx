import { Link } from "react-router-dom"
import { Button, Menu } from "semantic-ui-react"


export const NavBar = () => {
    return (
        <>
            <Menu className='menu'>
                <Menu.Item>
                    <p><strong>DEV@Deakin</strong></p>
                </Menu.Item>
                <Menu.Item>
                    <form className='fs'>
                        <label htmlFor='search'></label>
                        <input type="search" name="searchname" id="search" placeholder='Search' />
                    </form>
                </Menu.Item>
            </Menu>
            <br />

            <Button className='btn' primary> Post </Button>

            <Link to='/login'>
            <Button className='btn1' primary> Login </Button>
            </Link>
        </>
    )
}
