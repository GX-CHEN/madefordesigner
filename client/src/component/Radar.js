import React from 'react';
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis
} from "recharts";

const dataKeys = ['A', 'B', 'C'];
const colors = ['#fcc515', '#2775b6', '#248067']

class RadarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  componentDidMount = () => {
    setInterval(
      () =>
        this.setState({
          selectedIndex: this.state.selectedIndex + 1,
        }),
      3000
    );
  };

  render() {
    const data = [
      {subject: 'Math', A: 120, B: 70, C: 80, fullMark: 150},
      {subject: 'Chinese', A: 98, B: 130, C: 90, fullMark: 150},
      {subject: 'English', A: 86, B: 130, C: 50, fullMark: 150},
      {subject: 'Geography', A: 99, B: 80, C: 62, fullMark: 150},
      {subject: 'Physics', A: 85, B: 90, C: 100, fullMark: 150},
      {subject: 'History', A: 65, B: 85, C: 60, fullMark: 150},
    ];

    return (
      <div className="centered">
        <RadarChart cx={180} cy={180} outerRadius={136} width={360} height={360} data={data}>
          <PolarGrid/>
          <PolarAngleAxis dataKey="subject"/>
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey={dataKeys[this.state.selectedIndex % 3]}
                 stroke={colors[this.state.selectedIndex % 3]} fill={colors[this.state.selectedIndex % 3]}
                 fillOpacity={0.6}/>
        </RadarChart>
      </div>
    );
  }
}

export default RadarDemo;
