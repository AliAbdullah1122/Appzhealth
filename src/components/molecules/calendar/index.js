import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar,Agenda } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
const CalendarScreen = () => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  

  const onDayPress = (day) => {
    console.log('selected day', day);
  };

  const handleMonthChange = (month) => {
    setCurrentDate(month.dateString);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth.toISOString().split('T')[0]);
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentDate(previousMonth.toISOString().split('T')[0]);
  };

  const goToToday = () => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToToday} style={styles.button}>
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToPreviousMonth} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextMonth} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Agenda
        items={{
          '2024-07-01': [{ name: 'Item 1 - any js object' }],
          '2024-07-02': [{ name: 'Item 2 - any js object', height: 80 }],
          '2024-07-03': [],
          '2024-07-04': [{ name: 'Item 3 - any js object' }, { name: 'Item 4 - any js object' }],
        }}
        renderItem={(item) => (
          <TouchableOpacity style={{ height: 50, borderWidth: 1, borderColor: 'black' }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        renderEmptyDate={() => {
          return (
            <View style={{ height: 50, borderWidth: 1, borderColor: 'black' }}>
              <Text>No items for this day</Text>
            </View>
          );
        }}
        rowHasChanged={(r1, r2) => {
          return r1.name !== r2.name;
        }}
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
      />
      
      <Calendar
        current={currentDate}
        onDayPress={onDayPress}
        onMonthChange={handleMonthChange}
        monthFormat={'MMMM yyyy'}
        hideArrows={false}
        hideExtraDays={true}
        firstDay={1}
        showWeekNumbers={false}
        enableSwipeMonths={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()} // Make sure this calls `goToPreviousMonth`
        onPressArrowRight={(addMonth) => addMonth()} // Make sure this calls `goToNextMonth`
      />
     
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Week')} style={styles.button}>
          <Text style={styles.buttonText}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Day')} style={styles.button}>
          <Text style={styles.buttonText}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Agenda')} style={styles.button}>
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CalendarScreen;