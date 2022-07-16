import './Dashboard.scss';
import { Sidebar } from "@components/common/Sidebar/Sidebar";
import { DashContent } from '@components/common/DashContent/DashContent';

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <Sidebar />
            <DashContent />
        </div>
    );
};

export { Dashboard };