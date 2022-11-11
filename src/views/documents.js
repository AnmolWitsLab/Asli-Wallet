import {View, Text, Modal, Pressable, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from '../styles/documentsStyle';
import data from '../data';

const MyDocuments = () => {
  const upValue = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(data);

  const animatedStyle = {
    transform: [
      {
        translateY: upValue,
      },
    ],
  };

  const moveUp = () => {
    Animated.timing(upValue, {
      toValue: -10,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const moveDown = () => {
    Animated.timing(upValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handler = id => {
    const update = data.filter(itm => {
      if (itm.id === id) {
        return id === itm.id;
      }
    });
    moveUp();
    setValue(update);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.Des}>My Documents</Text>
      <View style={styles.cardWrapper}>
        {data.map(item => {
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                handler(item.id);
              }}>
              <Animated.View
                style={[
                  styles.wrap,
                  animatedStyle,
                  {backgroundColor: item.color, marginTop: item.marginTop},
                ]}>
                <Text style={styles.Description}>{item.Name}</Text>
                <Text style={styles.wrapDes}>{item.Description}</Text>
                <Text style={styles.phoneText}>
                  {item.phone}
                  <Text style={styles.phoneNumber}>{item.number}</Text>
                </Text>
                <Text style={styles.verifyStatus}>
                  {item.verify}
                  <Text style={styles.verified}>{item.verified}</Text>
                </Text>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.Wrapper}>
                    {value.map(itm => {
                      return (
                        <View
                          style={[
                            styles.modalWrap,

                            {
                              backgroundColor: itm.color,
                            },
                          ]}
                          key={itm.id}>
                          <Text style={styles.Description}>{itm.Name}</Text>
                          <Text style={styles.wrapDes}>{itm.Description}</Text>
                          <Text style={styles.phoneText}>
                            {itm.phone}
                            <Text style={styles.phoneNumber}>{itm.number}</Text>
                          </Text>
                          <Text style={styles.verifyStatus}>
                            {itm.verify}
                            <Text style={styles.verified}>{itm.verified}</Text>
                          </Text>
                          <Pressable
                            style={styles.textStyle}
                            onPress={() => {
                              setModalVisible(!modalVisible);
                              moveDown();
                            }}>
                            <Text style={styles.Cross}>X</Text>
                          </Pressable>
                        </View>
                      );
                    })}
                  </View>
                </Modal>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default MyDocuments;
