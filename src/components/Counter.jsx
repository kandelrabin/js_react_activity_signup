// props {title: "Archery", count: 0}
// {title, count} = props destructuring
const Counter = ({title, count, onButtonClick}) => {
    const handleAddParticipantClick = () => {
        console.log("You clicked add on " + title);
        onButtonClick(count + 1);
    }
    const handleRemoveParticipantClick = () => {
        if (count <= 0) return;
        console.log("You clicked delete on " + title);
        onButtonClick(count - 1);
    }
    return (
        <>
            <h3>{title}: Sign-ups</h3>
            <p>Current total: {count}</p>
            <button onClick={handleAddParticipantClick}>Add Participant</button>
            <button onClick={handleRemoveParticipantClick}>Remove Participant</button>
        </>
    );
}

export default Counter;