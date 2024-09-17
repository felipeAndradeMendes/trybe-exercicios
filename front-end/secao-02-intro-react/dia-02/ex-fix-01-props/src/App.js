import './App.css';
import Image from './Image';
import Text from './Text';
import catPhoto  from './images/catPhoto.jpg';

function App() {
  return (
    <div className="App">
     <Text text="diabo véio tudo!" />
     <Image source={ catPhoto } alt="alternativeText" />
    </div>
  );
}

export default App;

// A imagem tem que ser importada no topo com 'import';
// Importante lembrar que o endereço deve estar entre aspas para achar;
// Se não me engano, o nome do arquivo não pode ter alguns caracteres especificos, senão não funciona...
