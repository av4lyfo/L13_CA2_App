import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
    const { carpark } = route.params;
    const {
        car_park_no, address, car_park_type, type_of_parking_system,
        short_term_parking, free_parking, night_parking,
        car_park_decks, car_park_basement
    } = carpark;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{car_park_no}</Text>

                <View style={styles.detailsContainer}>
                    <DetailBox label="Address" value={address} />
                    <DetailBox label="Car Park Type" value={car_park_type} />
                    <DetailBox label="Type of Parking System" value={type_of_parking_system} />
                    <DetailBox label="Short Term Parking" value={short_term_parking} />
                    <DetailBox label="Free Parking" value={free_parking} />
                    <DetailBox label="Night Parking" value={night_parking} />
                    <DetailBox label="Car Park Decks" value={car_park_decks} />
                    <DetailBox label="Car Park Basement" value={car_park_basement} />
                </View>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const DetailBox = ({ label, value }) => (
    <View style={styles.detailBox}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        paddingBottom: 20,
    },
    card: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center",
        color: "#1E3A8A",
    },
    detailsContainer: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    detailBox: {
        backgroundColor: "#F0F4F8",
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#222222",
    },
    value: {
        fontSize: 16,
        color: "#3c3c3c",
    },
    backButton: {
        marginTop: 20,
        padding: 12,
        backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: 8,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default DetailsScreen;
