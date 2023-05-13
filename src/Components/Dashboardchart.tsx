import ChartJS, {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const labels: string[] = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00"];
  
  const options = {
    plugins: {
      legend: {
        position: { x: 0, y: 0 }, 
      },
    },
  };  
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Data1",
        data: [32, 42, 51, 60, 51, 95],
        backgroundColor: "#2196F3",
        borderColor: "#2196F3",
      },
      {
        label: "Data2",
        data: [37, 42, 41, 37, 31, 44],
        backgroundColor: "#F44236",
        borderColor: "#F44236",
      },
      {
        label: "Data3",
        data: [60, 54, 54, 28, 27, 49],
        backgroundColor: "#FFCA29",
        borderColor: "#FFCA29",
      },
    ],
  };
  
  const Dashboardchart = () => {
    return (
      <div className="w-[100%] bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-[#27CDA5] font-medium text-[18px] sm:mb-[2rem] md:mb-[3rem]">Reports  <span className="text-[14px] text-[#899BBD]"> / Today </span> </h1>
        <Line options={options} data={data} />
      </div>
    );
  };
  
  export default Dashboardchart;
  