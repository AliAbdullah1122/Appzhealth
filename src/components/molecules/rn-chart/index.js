import { colors } from 'config/colors';
import { mvs, width } from 'config/metrices';
import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [10, 20, 15, 30, 25, 40],
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // red
              strokeWidth: 3,
            },
            {
              data: [15, 25, 20, 35, 30, 45],
              color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // green
              strokeWidth: 3,
            },
            {
              data: [20, 30, 25, 40, 35, 50],
              color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`, // gold
              strokeWidth: 3,
            },
          ],
        }}
        // width={Dimensions.get('window').width - 30}
        width={width-59}
        height={mvs(280)}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: colors.white,
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: mvs(16),
          },
          propsForDots: {
            r: '6',
            strokeWidth: '1',
            stroke:colors.white,
          },
          propsForBackgroundLines: {
            strokeDasharray: '', // Solid background lines
            stroke:colors.chartlinecolor, // Light grey lines
          },
          fillShadowGradient:colors.white, // background color for the area under the curve
          fillShadowGradientOpacity: 0,  // setting opacity to make it fully white

        }}
        style={{
          borderRadius:mvs(20)
    //      paddingHorizontal: mvs(20),
    // marginVertical: mvs(5),
    // paddingVertical: mvs(20),
        }}
        // bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingHorizontal: mvs(20),
    // marginVertical: mvs(5),
    // paddingVertical: mvs(20),
    backgroundColor: colors.white,
    // justifyContent: 'center',
    // marginTop: 50,
  },
});

export default ChartComponent;
