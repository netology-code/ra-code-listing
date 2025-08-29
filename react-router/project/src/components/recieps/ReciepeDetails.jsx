export const ReciepeDetails = ({ name, description, time }) => {
    return (
        <div>
            <h3>{name}</h3>
            <div>Время приготовления: {time} мин.</div>
            <div>{description}</div>
        </div>
    );
}