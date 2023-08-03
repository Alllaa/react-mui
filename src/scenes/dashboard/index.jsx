import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcons from "@mui/icons-material/DownloadOutlined";
import EmailIcons from "@mui/icons-material/Email";
import PointOfSaleIcons from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcons from "@mui/icons-material/Traffic";
import LineChart from '../../components/LineCharts';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import StatBox from '../../components/StateBox';
import ProgressCircle from '../../components/ProgressCircle';


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>

            <Box>
                <Button>
                    
                </Button>
            </Box>
        </Box>
    )
}

export default Dashboard;