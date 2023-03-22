import ExampleCard from '../components/ExampleCard';

const Home = () => {
  return (
    <>
      <ExampleCard
        path="/props"
        title="Props"
        subtitle="Prop Drilling"
        body="Prop Drilling"
      />
      <ExampleCard
        path="/recoil"
        title="Recoil"
        subtitle="atom"
        body="Recoil lets you create a data-flow graph that flows from atoms(shared state) through selectors (pure functions) and down into your React components."
      />
      <ExampleCard
        path="/zustand"
        title="Zustand"
        subtitle="store"
        body={
          <>
            <span role="img" aria-label="zustand bear">
              🐻
            </span>
            Bear necessities for state management in React
          </>
        }
      />
    </>
  );
};

export default Home;
