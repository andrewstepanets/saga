import { connect } from 'react-redux';
import AppContainer from './App.styles';
import Card from './components/card/card.component';

function App({ increment, decrement, value }) {
  return (
    <AppContainer>
      <Card>
        {value}
        <button onClick={increment}>Add 1 </button>
        <button onClick={decrement}>Minus 1</button>
      </Card>
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  value: state.app.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
