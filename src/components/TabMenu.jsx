import {Nav} from 'react-bootstrap';
import TabContent from './TabContent';

function TabMenu(props) {
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="link-1">
            <Nav.Item>
                <Nav.Link onClick={() => {props.setTabBox(0)}} eventKey="link-1">tab1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => {props.setTabBox(1)}} eventKey="link-2">tab2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => {props.setTabBox(2)}} eventKey="link-3">tab3</Nav.Link>
            </Nav.Item>
            </Nav>
            <TabContent tab={props.tabBox} />
        </>
    );
}

export default TabMenu;
