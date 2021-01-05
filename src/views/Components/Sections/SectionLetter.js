import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/letterStyle.js";
const useStyles = makeStyles(styles);
export default function SectionCarousel() {
    const classes = useStyles();
    return (
        <div class="wrapper">
            <div class="card">
                <h1>I think, therefore I am.</h1>
                <div class="card__content">
                    <i>Cogito ergo sum</i> is a Latin philosophical proposition by René Descartes usually translated into English as "I think, therefore I am". The phrase originally appeared in French as <i>je pense, donc je suis</i> in his Discourse on the Method, so as to reach a wider audience than Latin would have allowed. It appeared in Latin in his later Principles of Philosophy.
            </div>
                <span class="i-quote"></span>
                <div class="card__overlay card__overlay--1"></div>
                <div class="card__overlay card__overlay--2"></div>
                <div class="card__overlay card__overlay--3"></div>
            </div>
        </div>
    );
}