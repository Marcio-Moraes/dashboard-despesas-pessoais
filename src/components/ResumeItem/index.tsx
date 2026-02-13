import * as C from './styles';

type Props = {
    titulo: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({titulo, value, color}: Props) => {
    return(
        <div>
            <C.Container>
                <C.Titulo>{titulo}</C.Titulo>
                <C.Info color={color}>R$ {value}</C.Info>
            </C.Container>
        </div>
    )
}