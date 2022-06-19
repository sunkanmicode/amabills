import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Topbar } from '../../components/topbar/Topbar';
import Widgets from '../../components/widgets/Widgets';
import Feeds from '../feeds/Feeds';

const Home = () => {
    return (
        <div className="containerSide">
            <Sidebar />
            <div className='home'>
               <Topbar />
               <Widgets />
               <div className="homeWidgets">
                   <Feeds />
               </div>
            </div>

        </div>
    );
}

export default Home