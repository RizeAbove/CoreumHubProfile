import Image from "next/image";
import Anchor from "@ui/anchor";

const UserDropdown = () => {
    const logout = () => {
        console.log("logout");
    };

    return (
        <div className="icon-box">
            <Anchor path="/author">
                <Image
                    src="/images/icons/boy-avater.png"
                    alt="Images"
                    layout="fixed"
                    width={38}
                    height={38}
                />
            </Anchor>
            <div className="rn-dropdown">
                <div className="rn-inner-top">
                    <h4 className="title">
                        <Anchor path="/product">Thomas Ross</Anchor>
                    </h4>
                    <span>
                        <Anchor path="/product">Set Display Name</Anchor>
                    </span>
                </div>
                <div className="rn-product-inner">
                    <ul className="product-list">
                        <li className="single-product-list">
                            <div className="thumbnail">
                                <Anchor path="/product">
                                    <Image
                                        src="/images/portfolio/portfolio-07.jpg"
                                        alt="Nft Product Images"
                                        layout="fixed"
                                        width={50}
                                        height={50}
                                    />
                                </Anchor>
                            </div>
                            <div className="content">
                                <h6 className="title">
                                    <Anchor path="/product">Balance</Anchor>
                                </h6>
                                <span className="price">25 CORE</span>
                            </div>
                            <div className="button" />
                        </li>
                        <li className="single-product-list">
                            <div className="thumbnail">
                                <Anchor path="/product">
                                    <Image
                                        src="/images/portfolio/portfolio-01.jpg"
                                        alt="Nft Product Images"
                                        layout="fixed"
                                        width={50}
                                        height={50}
                                    />
                                </Anchor>
                            </div>
                            <div className="content">
                                <h6 className="title">
                                    <Anchor path="/product">Balance</Anchor>
                                </h6>
                                <span className="price">25 CORE</span>
                            </div>
                            <div className="button" />
                        </li>
                    </ul>
                </div>
                <div className="add-fund-button mt--20 pb--20">
                    <button className="btn btn-primary-alta w-100" type="button">
                        Add Your More Funds
                    </button>
                </div>
                <ul className="list-inner">
                    <li>
                        <Anchor path="/author">My Profile</Anchor>
                    </li>
                    <li>
                        <Anchor path="/edit-profile">Edit Profile</Anchor>
                    </li>
                    <li>
                        <button type="button" onClick={logout}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;
