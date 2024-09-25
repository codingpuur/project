import { useState } from 'react'
import { Alert } from 'reactstrap';
import FeatherIcons from '@/utils/CommonSvgIcon/FeatherIcons';
const DarkOutline = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false); 
    return (
        <Alert color="light" isOpen={visible} toggle={onDismiss} className={`txt-success alert-icons border-success outline-2x fade show`}>
            <FeatherIcons iconName='ThumbsUp' />
            <p><strong>{"Well done! "}</strong>{"You successfully read this important message."}</p>
        </Alert>
    )
}

export default DarkOutline