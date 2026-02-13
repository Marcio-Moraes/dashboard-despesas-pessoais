import type { Item } from '../../types/Item';
import * as C from './styles';
import {formatarData} from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
}

export const TableItem = ({item}: Props) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formatarData(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category bgcolor={categories[item.category].bgColor} color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? '#fd625e' : '#01b8aa'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}