import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

const Sidebar = () => (
    <Menu pointing vertical>

        <Menu.Item exact as={NavLink} to={"/"} name='home'/>

        <Menu.Item exact as={NavLink} to={"/foo"} name='foo'/>

        <Menu.Item exact as={NavLink} to={"/prompt"} name='prompt'/>

        <Menu.Item exact as={NavLink} to={"/dum"} name='dum'/>

    </Menu>
)

export default Sidebar;