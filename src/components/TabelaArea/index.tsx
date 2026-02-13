import type { Item } from '../../types/Item';
import * as C from './styles';
import { TableItem } from '../TableItem';

type Props = {
    listaItens: Item[];    
}

export const TabelaArea = ({ listaItens}: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>                
                {listaItens.map((item,indexItem)=> (
                    <TableItem key={indexItem} item={item}  />
                ))}                
            </tbody>
        </C.Table>
    );
}