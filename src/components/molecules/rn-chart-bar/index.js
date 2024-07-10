import { colors } from 'config/colors';
import { mvs, width } from 'config/metrices';
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Regular from 'typography/regular-text';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      data: [2, 3, 1, 4, 3, 5, 7],
      color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // green color
      strokeWidth: 2, // optional
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  fillShadowGradient: '#4caf50', // Customize the bar fill color
  fillShadowGradientOpacity: 1, // Customize the bar fill opacity
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: mvs(16),
  },
  propsForBackgroundLines: {
    strokeDasharray: '', // Solid background lines
    stroke: '#e3e3e3', // Light grey lines

    strokeWidth: 1,
  },
};

const PatientsClaimsChart = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"#e3e3e3",width:mvs(2),height:mvs(210),zIndex:1,position:"absolute",left:mvs(50)}}>
        <Regular/>

      </View>
      <BarChart
        data={data}
        width={width -80}
        height={mvs(220)}
        yAxisLabel=""
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        showValuesOnTopOfBars={true}
        fromZero={true}
        style={{
          marginVertical: mvs(8),
          borderRadius: mvs(16),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: mvs(16),
    padding: mvs(16),
    marginVertical: mvs(8),
  },
  title: {
    fontSize: mvs(20),
    textAlign: 'center',
    marginBottom: mvs(10),
  },
});

export default PatientsClaimsChart;