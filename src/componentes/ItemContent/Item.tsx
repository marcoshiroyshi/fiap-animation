import { SItem } from "./Item.styles";

interface IItem {
    titulo: string,
    subtittulo: string
}

const Item = ({titulo, subtittulo}:IItem) => {
    return(
    <SItem>
        <h3>{titulo}</h3>
        <span>{subtittulo}</span>
    </SItem>);
}

export default Item