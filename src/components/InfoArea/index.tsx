import { formatarMesAtual } from '../../helpers/dateFilter';
import * as C from './styles';
import {ResumeItem} from '../ResumeItem';

type Props = {
    currentMonth: string;
    aoMudarMes: (novoMes: string)=> void;
    receitas: number;
    despesas: number;
}


export const InfoArea = ({currentMonth, aoMudarMes, receitas, despesas}: Props) => {
    
    const handleMesAnterior = () => {
        let [ano, mes] = currentMonth.split('-');
        let dataAtual = new Date(parseInt(ano), parseInt(mes) - 1, 1);
        dataAtual.setMonth(dataAtual.getMonth() - 1);
        aoMudarMes(`${dataAtual.getFullYear()}-${dataAtual.getMonth()+1}`);
    }
    const handleMesSeguinte = () => {
        let [ano, mes] = currentMonth.split('-');
        let dataAtual = new Date(parseInt(ano), parseInt(mes) - 1, 1);
        dataAtual.setMonth(dataAtual.getMonth() + 1);
        aoMudarMes(`${dataAtual.getFullYear()}-${dataAtual.getMonth()+1}`);
    }


    return(
        <C.Container>
            <C.AreaMes>
                <C.SetaMes onClick={handleMesAnterior}>⬅️</C.SetaMes>
                <C.TituloMes>{formatarMesAtual(currentMonth)}</C.TituloMes>
                <C.SetaMes onClick={handleMesSeguinte}>➡️</C.SetaMes>
            </C.AreaMes>
            <C.AreaResumo>
                <ResumeItem titulo="Receitas" value={receitas} />
                <ResumeItem titulo="Despesas" value={despesas} />
                <ResumeItem 
                    titulo="Balanço" 
                    color={(receitas - despesas < 0 ? '#fd625e' : '#01b8aa')} 
                    value={receitas - despesas} />
            </C.AreaResumo>
        </C.Container>
    )
}