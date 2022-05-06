
import './App.css';
import NewNotes from './notas/NewNotes'

function App() {

  

  const notes = [{id:1,
                  important: true,
                  content: 'Pagina de Notas'},
                  {id:2, 
                  important: false,
                  content: 'Pagina de Notaas 2'}]
  return (
    <div className="App">      
      <NewNotes notes={notes}></NewNotes>
    </div>
  );
}

export default App;
