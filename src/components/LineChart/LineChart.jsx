import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "Student 1", mathScore: 85, physicsScore: 78 },
        { id: 2, name: "Student 2", mathScore: 92, physicsScore: 88 },
        { id: 3, name: "Student 3", mathScore: 78, physicsScore: 75 },
        { id: 4, name: "Student 4", mathScore: 89, physicsScore: 92 },
        { id: 5, name: "Student 5", mathScore: 67, physicsScore: 63 },
        { id: 6, name: "Student 6", mathScore: 95, physicsScore: 87 },
        { id: 7, name: "Student 7", mathScore: 72, physicsScore: 69 },
        { id: 8, name: "Student 8", mathScore: 88, physicsScore: 81 },
        { id: 9, name: "Student 9", mathScore: 76, physicsScore: 70 },
        { id: 10, name: "Student 10", mathScore: 90, physicsScore: 95 },
      ];      
      
    return (
        <div>
            {/* width and height are in pixel units  data will be taken from studentData*/}
            <LChart width={500} height={400} data={studentData}>
                {/* Create minimum a single line  */}
                <Line type={'monotone'} dataKey={"mathScore"}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;