import {Link} from "react-router-dom";

const contacts= [
    {
        name: "email",
        desc: "needhelp@Organia.com",
    },
    {
        name: "Phone",
        desc: "666 888 888",
    },
    {
        name: "Address",
        desc: "88 road, borklyn street, USA",
    }
]

import Logo from "../../assets/img/nav_logo.svg"

export default function Footer() {
    return (
        <footer>
            <div className="container mx-auto px-9 xl:px-16 h-full">
                <div className="footer flex flex-col justify-center items-center font-sans">
                    <div className="flex flex-col mb-4 lg:flex-row w-[90%] mx-auto">
                        <div className="flex flex-col gap-8 mb-4 lg:mb-0 lg:pe-9 pb-9 lg:pb-0 border-b lg:border-b-0 border-gray lg:border-e">
                            <h3 className="capitalize font-bold text-[1.875rem] text-darkGreen text-center lg:text-right">Contact
                                us</h3>
                            <div className="contacts">
                                {
                                    contacts.map((contact, idx) => (
                                        <div key={idx} className="text-center lg:text-right">
                                            <h5 className="text-darkGreen capitalize text-[1.125rem] font-bold">{contact.name}</h5>
                                            <p className="text-darkGray text-[1.125rem] font-semibold">{contact.desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full text-center lg:flex-1">
                            <Link to={""} className="flex items-center justify-center">
                                <img src={Logo} alt=""/>
                            </Link>
                            <p className="text-[1.125rem] font-medium text-darkGray">Simply dummy text of the printing
                                and
                                typesetting industry.<br/>
                                Lorem Ipsum simply dummy text of the printing </p>
                        </div>
                        <div className="flex flex-col gap-8 pt-9 border-t mt-4 lg:ps-9 lg:pt-0 lg:border-t-0 lg:border-s border-gray">
                            <h3 className="capitalize font-bold text-[1.875rem] text-darkGreen text-left">Utility
                                Pages</h3>
                            <div className="links flex flex-col gap-3">
                                <Link to={""} className="text-darkGray text-[1.125rem] font-semibold">Style Guide</Link>
                                <Link to={""} className="text-darkGray text-[1.125rem] font-semibold">404 Not
                                    Found</Link>
                                <Link to={""} className="text-darkGray text-[1.125rem] font-semibold">Password
                                    Protected</Link>
                                <Link to={""} className="text-darkGray text-[1.125rem] font-semibold">Licences</Link>
                                <Link to={""} className="text-darkGray text-[1.125rem] font-semibold">Changelog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray text-darkGray py-3 w-full text-center">
                        <p>Copyright &copy; <span className="capitalize font-bold text-[1.125rem] text-darkGreen">KikiDev</span> </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}