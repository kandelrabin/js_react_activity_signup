// props {title: "Archery", count: 0}
// {title, count} = props destructuring
const Counter = ({title, count}) => {
    return (
        <>
            <h3>{title}: Sign-ups</h3>
            <p>Current total: {count}</p>
            <button>Add Participant</button>
            <button>Remove Participant</button>
        </>
    );
}

export default Counter;