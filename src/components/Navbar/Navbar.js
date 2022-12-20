import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setActivePage } from "../../store/actions/activePageActions";
import styles from "./navbar-styles.js";

const NavbarLayout = ({ }) => {
    return (<View style={styles.navbar}><Text style={styles.navbarText}> Navbar here</Text></View>)
};

const mapStateToProps = (state) => {
    const info = state.activePageReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { setActivePage },
        dispatch
    );

export const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarLayout);