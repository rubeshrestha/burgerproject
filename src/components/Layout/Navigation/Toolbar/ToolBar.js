import React from 'react'; 
import classses from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) =>(
    <header className={classses.Toolbar}>
        <DrawToggle clicked={props.drawToggle} />
        <div className={classses.Logo}>
        <Logo /> 
        </div>
        
        <nav className={classses.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;