

/*Fulfills the React requirement of returning one root element in JSX, and reduces the need of many div tags
which can cost performance and look ugly in larger projects with many nested divs*/

/*The equivalent of this function is available as React.Fragment*/
const Wrapper = props => {
    return props.children;
};

export default Wrapper;
