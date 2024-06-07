import { Link } from "react-router-dom"

let links = [
    {
        id: 1,
        text: `Home`,
        link: `/`,
    },
    {
        id: 2,
        text: `About`,
        link: `/about`,
    },
    {
        id: 3,
        text: `Contact`,
        link: `/contact`,
    },
]

function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <li key={link.id}>
                        <Link to={link.link}>{link.text}</Link>
                    </li>
                )
            })}
        </>
    )
}

export default NavLinks