import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const DetailsScreenLayout = ({ navigation }) => {
    /*useEffect(() => {
    }, [])
    const [token, setToken] = useState("");
    const [refresh, setRefresh] = useState("");*/
    return (
        /*<View style={styles.body}>
            <Text style={[styles.headerText]}>Инфо</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.defaultText}>Токен: </Text>
                <Text style={styles.defaultText}>{token}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: "red" }}>
                <Text style={styles.defaultText}>Рефреш токен: </Text>
                <Text style={styles.defaultText}>{refresh}</Text>
            </View>
        </View >*/
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 24 }}>Details Screen</Text>
        </View>
    )
};

const mapStateToProps = (state) => {
    const signInInfo = state.signInReducer;
    return { signInInfo };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {},
        dispatch
    );

export const DetailsScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsScreenLayout);