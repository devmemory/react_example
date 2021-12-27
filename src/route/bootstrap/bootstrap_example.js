import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import AlertExample from '../../component/bootstrap/alert'
import AccordionExample from '../../component/bootstrap/aoccordion'
import BadgeExample from '../../component/bootstrap/badges'
import ButtonRow from '../../component/bootstrap/button_row'
import CardExample from '../../component/bootstrap/card'
import CarouselExample from '../../component/bootstrap/carousel'
import DrawerExample from '../../component/bootstrap/drawer'
import FormFile from '../../component/bootstrap/form_file'
import LoadingButton from '../../component/bootstrap/loading_button'
import ModalExample from '../../component/bootstrap/modal'
import NavBarExample from '../../component/bootstrap/navbar'
import OverlayExample from '../../component/bootstrap/overlay'
import PlaceHolderExample from '../../component/bootstrap/placeholder'
import TableExample from '../../component/bootstrap/table'

class BootstrapExample extends Component {
    render() {
        return (
            <>
                <NavBarExample />
                <ButtonRow /><br />
                <AccordionExample /><br />
                <AlertExample /><br />
                <BadgeExample /><br />
                <LoadingButton /><br />
                <CardExample /><br />
                <CarouselExample /><br />
                <FormFile /><br />
                <Row>
                    <Col>
                        <ModalExample />
                    </Col>
                    <Col>
                        <DrawerExample />
                    </Col>
                    <Col>
                        <OverlayExample /><br />
                    </Col>
                </Row><br/>
                <PlaceHolderExample/><br/>
                <TableExample/>
            </>
        )
    }
}

export default BootstrapExample
