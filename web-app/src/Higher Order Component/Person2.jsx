import UpdatedComponent from './HOC'

const Person2 = ({count, handleCount}) => {

  return (
    <div>
      <p>Counter {count}</p>
      <button onClick={handleCount}>Double it</button>
    </div>
  );
};

export default UpdatedComponent(Person2);
