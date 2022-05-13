import React from "react";

// const tagIcon = <Tags></Tags>;
// const carIcon = <Car></Car>;
// const pkgIcon = <Package></Package>;
// const cityIcon = <BuildingCommunity></BuildingCommunity>;
// const taxIcon = <ReceiptTax></ReceiptTax>;

const Feature = ({ icon, title, desc }) => {
    return (
        <div className="feature">
            <>{icon}</>
            <div className="feature-text">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Feature;
