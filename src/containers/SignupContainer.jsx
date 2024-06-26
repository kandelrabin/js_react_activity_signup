import Counter from "../components/Counter";

const SignUpContainer = () => {
    return (
        <>
            <h2>Activities:</h2>
            <Counter title = {"Archery"} count ={0} />
            <Counter title = {"Zorbing"} count={0} />
            <Counter title = {"Canoeing"} count={0} />
        </>
    );
};

export default SignUpContainer;