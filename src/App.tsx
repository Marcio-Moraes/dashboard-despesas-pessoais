import * as C from './App.styles';
import type {Item} from './types/Item';
// import type {type} from './types/Category';
import {Items} from './data/items';
import {categories} from './data/categories';
import { useState, useEffect } from 'react';
import { pegarMesAtual, filtrarListaPorMes } from './helpers/dateFilter';
import {TabelaArea} from './components/TabelaArea'
import { InfoArea } from './components/InfoArea';

function App() {
  const [lista, setLista] = useState(Items);
  const [listaFiltrada, setListaFiltrada] = useState<Item[]>([]);
  const [mesAtul, setMesAtual] = useState(pegarMesAtual());
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);

  useEffect(()=>{
    setListaFiltrada(filtrarListaPorMes(lista, mesAtul));
  }, []);
  
  useEffect(()=>{
    setListaFiltrada(filtrarListaPorMes(lista, mesAtul));
  }, [lista, mesAtul]);

  useEffect(()=>{
    let receitaContar = 0;
    let despesaContar = 0;

    for(let i in listaFiltrada){
      if(categories[listaFiltrada[i].category].expense){
        despesaContar += listaFiltrada[i].value;
      } else {
        receitaContar += listaFiltrada[i].value;;
      }
    }
    
    setReceitas(receitaContar);
    setDespesas(despesaContar);

  }, [listaFiltrada]);
  
  
  const handleMudaMes = (novoMes: string) => {
    setMesAtual(novoMes);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema de Despesas Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={mesAtul}
          aoMudarMes={handleMudaMes}
          receitas={receitas}
          despesas={despesas}
         />

        {/* Área de inserção */}

        
        <TabelaArea            
          listaItens={listaFiltrada} 
        />

        
      </C.Body>
    </C.Container>
  )
}

export default App
