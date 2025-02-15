import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dataset_id = "d_23f946fa557947f93a8043bbef41dd09";
const api_url = `https://data.gov.sg/api/action/datastore_search?resource_id=${dataset_id}`;

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(api_url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                let myFilteredData = json.result.records;
                setData(myFilteredData);
                setFilteredData(myFilteredData);
            });
    }, []);

    const handleSearch = (text) => {
        setSearch(text);
        if (text === '') {
            setFilteredData(data);
        } else {
            const filtered = data.filter((item) =>
                item.car_park_no.toLowerCase().includes(text.toLowerCase()) ||
                item.address.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Car Park"
                value={search}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.car_park_no}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('Details', { carpark: item })}>
                        <Text style={styles.title}>{item.car_park_no}</Text>
                        <Text>{item.address}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F8",
        padding: 20,
    },
    searchBar: {
        height: 45,
        borderRadius: 12,
        borderColor: "#3B82F6",
        borderWidth: 1.5,
        paddingHorizontal: 18,
        fontSize: 16,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 15,
        color: "#1E3A8A",
    },
    item: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        marginVertical: 6,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 3,
        elevation: 2,
        borderLeftWidth: 5,
        borderLeftColor: "#3B82F6",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1E3A8A",
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 14,
        color: "#64748B",
    },
    listContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },

});



export default Home;
