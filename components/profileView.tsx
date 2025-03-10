import { StyleSheet } from "react-native";
import TextCustom from "./ui/TextCustom";
import ViewCustom from "./ui/ViewCustom";


export default function ProfileView() {
    return (
        <ViewCustom style={styles.container}>
            <ViewCustom style={styles.textContainer}>
                <TextCustom style={styles.text}>Profile</TextCustom>
            </ViewCustom>
            <ViewCustom style={styles.imageContainer}>
                <TextCustom style={styles.imageText}>profile image</TextCustom>
            </ViewCustom>
        </ViewCustom>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageContainer: {
        padding: 10,
        backgroundColor: '#1a1a1a',
    },
    imageText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
