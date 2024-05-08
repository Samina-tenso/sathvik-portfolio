import React from "react";


const Profile = ({ url, alt }) => {
    console.log(url)
    return (
        <div className='max-w-16 max-y-16 ' >
            <img className='rounded-full' src={url} alt={alt} />
        </div>
    )

}

export default Profile