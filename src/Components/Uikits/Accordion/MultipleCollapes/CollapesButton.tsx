import { Button } from 'reactstrap';
import { Toggleboth, Togglefirst, Togglesecond } from '@/utils/Constant';
import { CollapseButtonProps } from '@/Types/uikitsType';


const CollapesButton:React.FC<CollapseButtonProps> = ({ setCollapesId, collapesId }) => {
    const changeCollaps = (id: number) => {
        switch (id) {
            case 1:
                setCollapesId(pre => ({
                    ...pre,
                    collapes1: collapesId.collapes1 !== true ? true : false
                }))
                break;
            case 2:
                setCollapesId(pre => ({
                    ...pre,
                    collapes2: collapesId.collapes2 !== true ? true : false
                }))
                break;
            case 3:
                setCollapesId(pre => ({
                    ...pre,
                    collapes1: collapesId.collapes1 !== true ? true : false,
                    collapes2: collapesId.collapes2 !== true ? true : false
                }))
                break;
            default:
                break;
        }
    }
  return (
    <div className='common-flex'>
        <Button color='primary' onClick={() => { changeCollaps(1) }} >{Togglefirst}</Button>
        <Button color='warning' onClick={() => { changeCollaps(2) }} >{Togglesecond}</Button>
        <Button color='success' onClick={() => { changeCollaps(3) }} >{Toggleboth}</Button>
    </div>
  )
}

export default CollapesButton