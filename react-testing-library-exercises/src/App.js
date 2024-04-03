import { Counter } from './Counter';
import { TextTransformer } from './TextTransformer';
import { Wrapper } from './Wrapper';
import { Burgers } from './Burgers';

function App() {
    return (
        <Wrapper>
            <h1>react-testing-library-exercises</h1>
            <Counter />
            <hr />
            <TextTransformer />
            <hr />
            <Burgers />
        </Wrapper>
    );
}

export default App;
