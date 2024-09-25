import { Button, ButtonGroup } from 'reactstrap'
import { BasicButtongroup } from '@/utils/Constant'

const BasicButtonGroup = () => {
  return (
    <tr>
        <td>{BasicButtongroup}</td>
        <td>
            <ButtonGroup>
                <Button color="primary">{'Primary'}</Button>
                <Button color="secondary">{'Secondary'}</Button>
                <Button color="primary">{'Success'}</Button>
            </ButtonGroup>
        </td>
        <td>
            <span>Use <code>btn-group</code> class to button for <code>div</code>.</span>
        </td>
    </tr>
  )
}

export default BasicButtonGroup