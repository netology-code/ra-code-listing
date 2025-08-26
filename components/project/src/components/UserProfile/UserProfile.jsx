import './UserProfile.css'

export function UserProfile({ data }) {
    
    return (
        <div className="user-profile">
            <img src={data.avatar} />
            <div className="user-profile__content">
                <h3 className="user-profile__name">{data.name}</h3>
                <div className="user-profile__status">{data.status}</div>

                {data.haveDesignSkills && (
                    <div className="user-profile__details">Есть навыки в дизайне</div>
                )}
            </div>
        </div>
    )
}