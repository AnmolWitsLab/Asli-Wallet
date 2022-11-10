import {View, Text, Modal, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/documentsStyle';
import data from '../data';

const MyDocuments = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(data);
  const handler = id => {
    const update = data.filter(itm => {
      if (itm.id === id) {
        return id === itm.id;
      }
    });
    setModalVisible(!modalVisible);
    setValue(update);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.Des}>My Documents</Text>
      <View style={styles.cardWrapper}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                handler(item.id);
              }}>
              <View
                style={[
                  styles.wrap,
                  {backgroundColor: item.color, marginTop: item.marginTop},
                ]}
                key={item.id}>
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
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.Cross}>X</Text>
                          </Pressable>
                        </View>
                      );
                    })}
                  </View>
                </Modal>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyDocuments;
