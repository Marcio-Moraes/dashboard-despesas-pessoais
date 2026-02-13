import type {Item} from '../types/Item';

export const pegarMesAtual = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
};

export const filtrarListaPorMes = (lista: Item[], date: string): Item[] => {
    let novaLista: Item[] = [];
    let [ano, mes] = date.split('-');

    for(let i in lista){
        lista[i].date.getFullYear()
        if(
            lista[i].date.getFullYear() === parseInt(ano) &&
            lista[i].date.getMonth() + 1 === parseInt(mes)
        ){
            novaLista.push(lista[i]);
        }
    }

    return novaLista;
}

export const formatarData = (date: Date): string => {
    let ano = date.getFullYear();
    let mes = addZeroEmData(date.getMonth() + 1);
    let dia = addZeroEmData(date.getDate());

    return `${dia}/${mes}/${ano}`;
}

const addZeroEmData = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatarMesAtual = (mesAtual: string): string => {
    let [ano, mes] = mesAtual.split('-');
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${meses[parseInt(mes)-1]} de ${ano}`;
}