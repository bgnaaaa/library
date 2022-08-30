import DullGoldCard from "./DullGoldCard";
import MatteBlackCard from "./MatteBlackCard";
import MetallicSilverCard from "./MetallicSilverCard";
import RoyalPurpleCard from "./RoyalPurpleCard";


export default (user) => {
    switch (user.qarddesign) {
        case "matte":
            return (
                <MatteBlackCard
                    avatar="/assets/images/CP9010.png"
                    name={user.firstname}
                    profession={user.job}
                    phonenumber={user.number}
                    email={user.email}
                    website={user.website}
                    address={`${user.street}, ${user.city}, ${user.country}`}
                    companylogo="/assets/images/qard-logo-white.png"
                />
            );
        case "metal":
            return (
                <MetallicSilverCard
                    avatar="/assets/images/CP9010.png"
                    name={user.firstname}
                    profession={user.job}
                    phonenumber={user.number}
                    email={user.email}
                    website={user.website}
                    address={`${user.street}, ${user.city}, ${user.country}`}
                    companylogo="/assets/images/qard-logo-white.png"
                />
            );
        case "gold":
            return (
                <DullGoldCard
                    avatar="/assets/images/CP9010.png"
                    name={user.firstname}
                    profession={user.job}
                    phonenumber={user.number}
                    email={user.email}
                    website={user.website}
                    address={`${user.street}, ${user.city}, ${user.country}`}
                    companylogo="/assets/images/qard-logo-white.png"
                />
            );
        case "purple":
            return (
                <RoyalPurpleCard
                    avatar="/assets/images/CP9010.png"
                    name={user.firstname}
                    profession={user.job}
                    phonenumber={user.number}
                    email={user.email}
                    website={user.website}
                    address={`${user.street}, ${user.city}, ${user.country}`}
                    companylogo="/assets/images/qard-logo-white.png"
                />
            );
        default:
            return (
                <MatteBlackCard
                    avatar="/assets/images/CP9010.png"
                    name={user.firstname}
                    profession={user.job}
                    phonenumber={user.number}
                    email={user.email}
                    website={user.website}
                    address={`${user.street}, ${user.city}, ${user.country}`}
                    companylogo="/assets/images/qard-logo-white.png"
                />
            );
    }
};