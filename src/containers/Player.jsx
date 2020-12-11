import React, { useLayoutEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/styles/components/Player.scss";
import { getVideoSource } from "../actions";
import NotFound from "./NotFound";

const Player = (props) => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back" onClick={() => props.history.goBack()}>
                <button type="button">Regresar</button>
            </div>
        </div>
    ) : (
        <NotFound />
    );
};

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
    };
};

const mapDispatchToProps = {
    getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
