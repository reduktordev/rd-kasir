import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DatePicker = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate instanceof Date ? selectedDate : date;
    setShow(false);
    setDate(currentDate);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          flexDirection: 'row',
          width: 300,
          backgroundColor: 'white',
          borderColor: 'red',
          borderWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 10,
          gap: 8,
          borderRadius: 5,
        }}
      >
        <Icon name="calendar-month" size={20} color="red" />
        <Text style={{ color: 'black', fontSize: 16,}}>
           ({formatDate(date)})
        </Text>
      </TouchableOpacity>
      
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
