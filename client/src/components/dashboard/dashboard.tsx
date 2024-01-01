import * as React from 'react';
import styles from './dashboard.module.scss';
const Dashboard = ({children}: any) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>

            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Dashboard;