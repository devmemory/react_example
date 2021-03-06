import {useState} from 'react'
import {Alert, Button} from 'react-bootstrap'

function AlertExample() {
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <Alert variant="danger" onMouseLeave={() => setShow(false)} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        );
    }
    return <Button onMouseEnter={() => setShow(true)}>Show Alert</Button>;
}

export default AlertExample
